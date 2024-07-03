import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const productSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    toJSON: { virtuals: true },
  },
);

export const Order = model<TOrder>('Order', productSchema);
