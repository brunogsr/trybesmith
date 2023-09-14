import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const { type, message } = await productService.createProduct({ name, price, orderId });
  return res.status(type).json(message);
};

export default {
  createProduct,
};