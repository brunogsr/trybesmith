import OrderModel from '../database/models/order.model';
import { OrderResponse } from '../types/Order';

const getAllOrders = async (): Promise<{ status: number; message: OrderResponse[] }> => {
  const orders = await OrderModel.findAll({
    include: [
      {
        association: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  // console.log(orders);
  
  const ordersJSON = orders.map((order) => order.toJSON());
  const ordersWithProductsIds = ordersJSON.map((order) => {
    const productIdsArray = order.productIds?.map(({ id }) => id);
    return { id: order.id, userId: order.userId, productIds: productIdsArray };
  });
  
  // console.log(ordersWithProductsIds);
  
  return { status: 200, message: ordersWithProductsIds };
};
export default {
  getAllOrders,
};
