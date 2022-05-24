export interface IWorkerAction<I = unknown, O = unknown> {
  handle: (request: I) => Promise<O>;
}