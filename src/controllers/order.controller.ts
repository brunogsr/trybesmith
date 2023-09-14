import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (_req: Request, res: Response) => {
  const { status, message } = await orderService.getAllOrders();
  return res.status(status).json(message);
};

export default {
  getAllOrders,
};