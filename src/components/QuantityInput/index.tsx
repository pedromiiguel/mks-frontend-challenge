import React, { InputHTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';

import {
  increaseItemQuantity,
  decreaseItemQuantity
} from '@/features/cart/cart-slice';
import * as S from './styles';
import { useCart } from '@/hooks/useCart';

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  quantity: number;
  productId: number;
}

export const QuantityInput = ({
  quantity,
  productId,
  ...props
}: QuantityInputProps) => {
  const { handleIncreaseQuantity, handleDecreaseQuantity } = useCart();

  return (
    <S.Container>
      <S.Label htmlFor="quantity">Qtd:</S.Label>
      <S.QuantityInput>
        <S.Button
          onClick={() => {
            handleDecreaseQuantity(productId);
          }}
          aria-label="Aumentar a quantidade do produto"
        >
          -
        </S.Button>
        <S.Input
          type="text"
          readOnly
          value={quantity}
          id="quantity"
          {...props}
        />
        <S.Button
          aria-label="Diminuir a quantidade do produto"
          onClick={() => {
            handleIncreaseQuantity(productId);
          }}
        >
          +
        </S.Button>
      </S.QuantityInput>
    </S.Container>
  );
};
