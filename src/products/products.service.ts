/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
//import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private product: Product[] = [
    { id: 1, name: 'p1', price: 2000, description: 'desc1' },
    { id: 2, name: 'p2', price: 2000, description: 'desc2' },
  ];
  getallproducts():Product[]{
    return this.product;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getProductById(id : number) : product {
    const product = this.products.find((p)=>p)
  }
  //   create(createProductDto: CreateProductDto) {
  //     return 'This action adds a new product';
  //   }

  //   findAll() {
  //     return `This action returns all products`;
  //   }

  //   findOne(id: number) {
  //     return `This action returns a #${id} product`;
  //   }

  //   update(id: number, updateProductDto: UpdateProductDto) {
  //     return `This action updates a #${id} product`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} product`;
  //   }
}
