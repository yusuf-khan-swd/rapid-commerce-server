import { z } from 'zod';

const createOrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().min(0),
  quantity: z.number().min(1),
});

export const OrderValidation = {
  createOrderValidationSchema,
};
