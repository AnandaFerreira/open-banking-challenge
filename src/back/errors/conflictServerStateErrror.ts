import { status } from './status';

export class ConflictServerStateError extends Error {
  status: number = status.Conflict;
  code = 'ERR_ONE_CARD_REQUIRED';
  isCustomError = true;

  constructor(message: any) {
    super();

    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
