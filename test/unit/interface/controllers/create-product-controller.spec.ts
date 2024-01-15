import { Request, Response } from 'express';

import { CreateProductUseCase } from '../../../../src/application/use-cases/create-product-use-case';
import { SkuNotAvailableError } from '../../../../src/domain/error/sku-not-available-error';
import { CreateProductController } from '../../../../src/interface/controllers/create-product-controller';
import { generateRequestCreateProduct } from '../../fixtures/request-create-product.fixture';

const makeReq = () =>
  ({
    body: generateRequestCreateProduct(),
  }) as unknown as Request;

const makeRes = () => {
  class ResponseMock {
    json = jest.fn(() => this);
    status = jest.fn(() => this);
    send = jest.fn(() => this);
  }

  return new ResponseMock() as unknown as Response;
};

const makeNext = () => jest.fn();

const makeMiddlewareParameters = () => ({
  req: makeReq(),
  res: makeRes(),
  next: makeNext(),
});

function mockCreateProductUseCase(): CreateProductUseCase {
  return {
    handle: jest.fn(),
  } as unknown as CreateProductUseCase;
}

function makeSut() {
  const createProductUseCase = mockCreateProductUseCase();
  const sut = new CreateProductController();
  const { req, res, next } = makeMiddlewareParameters();

  return {
    sut,
    createProductUseCase,
    req,
    res,
    next,
  };
}

describe('CreateProductController', () => {
  describe('Given that received a request to create request the product', () => {
    describe('When that product payload is valid', () => {
      it('Then it should return a success message', async () => {
        const { sut, req, res, next } = makeSut();

        await sut.handle(req, res, next);

        expect(next).not.toHaveBeenCalled();
      });
    });

    describe('When an error occurs in processing request', () => {
      it('Then it should return an error to middleware', async () => {
        const { sut, createProductUseCase, req, res, next } = makeSut();
        const expectError = new SkuNotAvailableError();

        jest.spyOn(createProductUseCase, 'handle').mockImplementation(() => {
          throw expectError;
        });

        await sut.handle(req, res, next);

        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledWith(expectError);
      });
    });
  });
});
