import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', productController.createProduct);

export default productRouter;