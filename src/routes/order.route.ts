import { Router } from 'express';
import orderController from '../controllers/order.controller';

const productRouter = Router();

productRouter.get('/', orderController.getAllOrders);
// productRouter.post('/', orderController.createOrder);

export default productRouter;