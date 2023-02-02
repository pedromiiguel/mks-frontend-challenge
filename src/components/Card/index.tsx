import React from 'react';
import Image from 'next/image';
import { Product } from '@/templates/Home';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/utils/formatPrice';
import { ShoppingBag } from '../Icons';

import * as S from './styles';

interface CardProps {
  product: Product;
}

export const Card = ({ product }: CardProps) => {
  const { handleAddToCart } = useCart();
  const price = formatPrice(product.price);

  return (
    <S.Container>
      <S.Content>
        <S.ImageWrapper>
          <Image
            src={product.photo}
            width={150}
            height={150}
            alt={product.name}
          />
        </S.ImageWrapper>
        <S.Header>
          <S.Title>{product.name}</S.Title>
          <S.Price>{price}</S.Price>
        </S.Header>
        <S.Description>{product.description}</S.Description>
      </S.Content>

      <S.BuyButton
        aria-label="Adicionar no carrinho"
        type="button"
        onClick={() => {
          handleAddToCart(product);
        }}
      >
        <ShoppingBag />
        Comprar
      </S.BuyButton>
    </S.Container>
  );
};
