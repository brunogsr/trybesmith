import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

const getAllProducts = async (): Promise<{ type: number; message: Product[] }> => {
  const products = await ProductModel.findAll() as unknown as Product[];
  return { type: 200, message: products };
};

const createProduct = async (product: Product): 
Promise<{ type: number; message: Product }> => {
  const newProduct = await ProductModel.create(product) as unknown as Product;
  return { type: 201, message: newProduct };
};

export default {
  createProduct,
  getAllProducts,
};
