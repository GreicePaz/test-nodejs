export class SkuNotAvailableError extends Error {
  constructor() {
    super('Sku already Exists');
    Object.setPrototypeOf(this, SkuNotAvailableError.prototype);
  }
}
