export interface ISqlQueryExecutor {
  execQuery: (
    sql: string,
    value: any[]
  ) => Promise<{ results: any; fields: any }>;
}
