import { ResultNotFoundError } from '../errors';
import { createPool, Pool } from 'mysql';
import { ISqlQueryExecutor } from '../protocols/sql-query-executor';

export class MysqlQueryExecutor implements ISqlQueryExecutor {
  private static pool: Pool;

  constructor(private readonly dependencies: MysqlQueryExecutor.Dependencies) {}

  private getConnection() {
    if (!MysqlQueryExecutor.pool) {
      MysqlQueryExecutor.pool = createPool({
        host: this.dependencies.host,
        port: this.dependencies.port,
        user: this.dependencies.user,
        password: this.dependencies.password,
        database: this.dependencies.database,
      });
    }

    return MysqlQueryExecutor.pool;
  }

  execQuery(
    sql: string,
    value?: any[]
  ): Promise<{ results: any; fields: any }> {
    return new Promise((resolve, reject) => {
      const conn = this.getConnection();
      function queryCallback(err: any, results: any, fields: any) {
        if (err) return reject(err);
        else {
          if (!results || results.length < 1)
            return reject(new ResultNotFoundError());

          return resolve({ results, fields });
        }
      }

      if (value) {
        conn.query(sql, value, queryCallback);
      } else {
        conn.query(sql, queryCallback);
      }
    });
  }
}

export namespace MysqlQueryExecutor {
  export type Dependencies = {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
}
