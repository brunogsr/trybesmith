import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

const getAllProducts = async (): Promise<{ status: number; message: ProductSequelizeModel[] }> => {
  const products = await ProductModel.findAll();
  return { status: 200, message: products };
};

const createProduct = async (product: Product): 
Promise<{ status: number; message: ProductSequelizeModel }> => {
  const newProduct = await ProductModel.create(product);
  return { status: 201, message: newProduct };
};

export default {
  createProduct,
  getAllProducts,
};
