export class ResourceNotFoundException extends Error {
  constructor() {
    super('Resource Not Found');
  }
}
