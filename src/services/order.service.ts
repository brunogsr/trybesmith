import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
// import { Order } from '../types/Order';

const getAllOrders = async (): Promise<{ status: number; message: OrderSequelizeModel[] }> => {
  const orders = await OrderModel.findAll({
    include: [
      {
        association: 'productIds',
        attributes: ['id'],
      },
    ],
  });
  // const formatedOrders = orders.map((order) => {
  //   const { id, userId, productId } = order as unknown as Order;
  //   return {
  //     id,
  //     userId,
  //     productId: productId.map((product) => product.id),
  //   };
  // });
  return { status: 200, message: orders };
};
export default {
  getAllOrders,
};
