import { EntityRepository, Repository } from 'typeorm';
import Product from '../intities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.findOne({ name });

    return product;
  }
}
