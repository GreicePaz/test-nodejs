import { CreateProductUseCase } from '../../../../src/application/use-cases/create-product-use-case';
import { SkuNotAvailableError } from '../../../../src/domain/error/sku-not-available-error';
import { generateRequestCreateProduct } from '../../fixtures/request-create-product.fixture';

const createProductUseCase = new CreateProductUseCase();

beforeEach(() => {
  createProductUseCase.clearProductsMemory();
  jest.clearAllMocks();
});

afterEach(() => {
  createProductUseCase.clearProductsMemory();
  jest.clearAllMocks();
});

const makeSut = () => {
  const sut = new CreateProductUseCase();

  return {
    sut,
  };
};

describe('CreateProductUseCase', () => {
  describe('Given one product', () => {
    describe('When that product is not already', () => {
      it('Then it should return a create success product', async () => {
        const { sut } = makeSut();

        const result = await sut.handle(generateRequestCreateProduct());

        expect(result).toBe(true);
      });
    });

    describe('When that product is already exist', () => {
      it('Then it should return a error in create product', async () => {
        const { sut } = makeSut();

        const result = await sut.handle(generateRequestCreateProduct());

        expect(result).toBe(true);
        await expect(
          sut.handle(generateRequestCreateProduct()),
        ).rejects.toThrow(SkuNotAvailableError);
      });
    });
  });
});
