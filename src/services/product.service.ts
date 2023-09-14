import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

const getAllProducts = async (): Promise<{ type: number; message: ProductSequelizeModel[] }> => {
  const products = await ProductModel.findAll();
  return { type: 200, message: products };
};

const createProduct = async (product: Product): 
Promise<{ type: number; message: ProductSequelizeModel }> => {
  const newProduct = await ProductModel.create(product);
  // const newProductJson = newProduct.toJSON();
  // console.log(newProduct);
  
  return { type: 201, message: newProduct };
};

export default {
  createProduct,
  getAllProducts,
};
