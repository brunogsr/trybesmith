import joi from 'joi';

const productSchema = joi.object({
  name: joi.string().min(3).required(),
  price: joi.string().min(3).required(),
  orderId: joi.number(),
});

export default productSchema;