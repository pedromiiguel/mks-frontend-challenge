import React from 'react';
import Image from 'next/image';
import { formatPrice } from '@/utils/formatPrice';
import { QuantityInput } from '../QuantityInput';
import { X } from '../Icons';
import { useCart } from '@/hooks/useCart';

import * as S from './styles';

export interface CartItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    photo: string;
    quantity: number;
  };
}

export const CartItem = ({ product }: CartItemProps) => {
  const price = formatPrice(product.price);

  const { handleRemoveFromCart } = useCart();

  return (
    <S.Container>
      <S.ImageWrapper>
        <Image fill src={product.photo} alt={product.name} />
      </S.ImageWrapper>

      <S.Title>{product.name}</S.Title>
      <S.Footer>
        <QuantityInput quantity={product.quantity} productId={product.id} />
        <S.Price>{price}</S.Price>
      </S.Footer>

      <S.RemoveProductButton
        aria-label="Remover produto do carrinho"
        onClick={() => {
          handleRemoveFromCart(product.id);
        }}
      >
        <X />
      </S.RemoveProductButton>
    </S.Container>
  );
};
