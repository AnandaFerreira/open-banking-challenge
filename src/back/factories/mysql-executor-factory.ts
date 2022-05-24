import { MysqlQueryExecutor } from '../libs/mysql-v2';

const {
  MYSQL_HOST_RDS,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASS,
  MYSQL_DB,
  MYSQL_DB_RISKS,
  IS_OFFLINE,
  STAGE,
  REGION,
} = process.env;
