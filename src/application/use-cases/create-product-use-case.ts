import { SkuNotAvailableError } from '../../domain/error/sku-not-available-error';
import { Product } from '../../domain/models/product';

// eslint-disable-next-line no-var
var productsMemory: Product[] = [];
export class CreateProductUseCase {
  async handle(product: Product): Promise<boolean> {
    if (this.isSkuAvailable(product.sku)) {
      throw new SkuNotAvailableError();
    }

    this.productsMemory().push(product);
    return true;
  }

  private isSkuAvailable(sku: number): boolean {
    const exist: Product | undefined = this.productsMemory().find(
      (product) => product.sku === sku,
    );

    return exist != undefined;
  }

  public productsMemory(): Product[] {
    return productsMemory;
  }

  public clearProductsMemory() {
    productsMemory = [];
  }
}
