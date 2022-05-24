import { status } from "./status";

export class ResultNotFoundError extends Error {
  status: number = status.No_Content;
  code = "ERR_RESULT_NOT_FOUND";
  isCustomError = true;

  constructor(message = "Result not found.") {
    super();

    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
