import { z } from 'zod';

const createOrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().min(0),
  quantity: z.number().min(1),
});

const updateOrderValidationSchema = z.object({
  email: z.string().email().optional(),
  productId: z.string().optional(),
  price: z.number().min(0).optional(),
  quantity: z.number().min(1).optional(),
});

export const OrderValidation = {
  createOrderValidationSchema,
  updateOrderValidationSchema,
};
