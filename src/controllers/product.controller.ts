import { Request, Response } from 'express';
import productService from '../services/product.service';

const getAllProducts = async (_req: Request, res: Response) => {
  const { status, message } = await productService.getAllProducts();
  return res.status(status).json(message);
};

const createProduct = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const { status, message } = await productService.createProduct({ name, price, orderId });
  return res.status(status).json(message);
};

export default {
  createProduct,
  getAllProducts,
};