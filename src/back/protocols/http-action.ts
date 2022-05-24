export interface HttpAction<T = any> {
  handle: (request: T) => Promise<any>;
}
