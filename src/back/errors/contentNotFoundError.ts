import { status } from "./status";

export class ContentNotFoundError extends Error {
  status: number = status.Not_Found;
  code = "ERR_CONTENT_NOT_FOUND";
  isCustomError = true;

  constructor(message = "Content not found") {
    super();

    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
