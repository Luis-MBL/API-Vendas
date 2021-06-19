import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/intities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
interface IRequest {
  id: string;
}
class GetProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const produt = await productsRepository.findOne(id);

    if (!produt) {
      throw new AppError('Product not found');
    }

    return produt;
  }
}

export default GetProductService;
