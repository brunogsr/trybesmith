import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
// import { Order } from '../types/Order';

const getAllOrders = async (): Promise<{ status: number; message: OrderSequelizeModel[] }> => {
  const products = await OrderModel.findAll();
  return { status: 200, message: products };
};
export default {
  getAllOrders,
};
