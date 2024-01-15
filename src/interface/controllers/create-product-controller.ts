import { Request, Response, NextFunction } from 'express';

import { CreateProductUseCase } from '../../application/use-cases/create-product-use-case';
import { ok } from '../http/responses';

export class CreateProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase = new CreateProductUseCase(),
  ) {}
  async handle(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const product = req.body;

      await this.createProductUseCase.handle(product);

      ok({ product: product }, res);
    } catch (error) {
      next(error);
    }
  }
}
