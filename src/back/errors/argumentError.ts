import { status } from './status';

export class ArgumentError extends Error {
  status: number = status.Unprocessable_Entity;
  code = 'ERR_ARG';
  isCustomError = true;

  constructor(message: any) {
    super();
    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
