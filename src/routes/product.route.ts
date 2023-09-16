import { Router } from 'express';
import productController from '../controllers/product.controller';
import validateProduct from '../middlewares/product.middleware';

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', validateProduct, productController.createProduct);

export default productRouter;