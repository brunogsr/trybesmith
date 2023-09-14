import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

const createProduct = async (product: Product): 
Promise<{ type: number; message: Product }> => {
  const newProduct = await ProductModel.create(product) as unknown as Product;
  return { type: 201, message: newProduct };
};

export default {
  createProduct,
};
