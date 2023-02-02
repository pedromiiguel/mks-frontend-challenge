import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { formatPrice } from '@/utils/formatPrice';
import { cartLength, totalPrice } from '@/features/cart/cart-selectors';
import { Product } from '@/templates/Home';
import {
  addToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart
} from '@/features/cart/cart-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCart = () => {
  const dispatch = useDispatch();

  const total = useAppSelector(totalPrice);
  const length = useAppSelector(cartLength);
  const items = useAppSelector((state) => state.cart.items);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleIncreaseQuantity = (productId: number) => {
    dispatch(increaseItemQuantity(productId));
  };

  const handleDecreaseQuantity = (productId: number) => {
    dispatch(decreaseItemQuantity(productId));
  };

  return useMemo(
    () => ({
      total: formatPrice(total),
      length,
      items,
      handleRemoveFromCart,
      handleAddToCart,
      handleIncreaseQuantity,
      handleDecreaseQuantity
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [total, length, items]
  );
};
