import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (data: TOrder) => {
  const { productId, quantity } = data;
  const productData = await Product.findById(productId);

  if (!productData) throw new Error('Order not found');

  if (!productData.inventory.inStock)
    throw new Error('Product is out of Stock');

  const calculateQuantity = productData.inventory.quantity - quantity;

  if (calculateQuantity < 0)
    throw new Error('Insufficient quantity available in inventory');

  if (calculateQuantity === 0) {
    await Product.findByIdAndUpdate(productId, { 'inventory.inStock': false });
  }

  await Product.findByIdAndUpdate(productId, {
    'inventory.quantity': calculateQuantity,
  });

  const result = await Order.create(data);
  return result;
};

const getAllOrderFromDB = async (email: any) => {
  if (email) {
    return await Order.find({ email: email });
  }

  const result = await Order.find();
  return result;
};

export const OrderService = {
  createOrder,
  getAllOrderFromDB,
};
