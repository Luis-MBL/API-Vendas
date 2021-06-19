import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/intities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const produts = await productsRepository.find();

    return produts;
  }
}

export default ListProductService;
