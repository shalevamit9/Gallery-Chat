export class HttpException extends Error {
  constructor(public readonly code: number, message?: string) {
    super(message);
  }
}
