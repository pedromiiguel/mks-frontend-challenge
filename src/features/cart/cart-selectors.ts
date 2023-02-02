import { RootState } from '@/store';

export const totalPrice = (state: RootState) =>
  state.cart.items.reduce((total, product) => {
    const itemTotal = product.price * product.quantity;

    return (total += itemTotal);
  }, 0);

export const cartLength = (state: RootState) => state.cart.items.length;
