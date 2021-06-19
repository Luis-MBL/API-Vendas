import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
interface IRequest {
  id: string;
  name?: string;
  price?: number;
  quantity?: number;
}
class UpdateProductService {
  public async execute({ id, ...data }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    let product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found');
    }

    if (data.name && data.name !== product.name) {
      const productExists = await productsRepository.findByName(data.name);

      if (productExists) {
        throw new AppError('There is already one product with this name');
      }
    }

    product = Object.assign(product, data);
    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
