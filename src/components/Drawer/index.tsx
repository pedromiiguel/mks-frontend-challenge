import React from 'react';
import { CartItem } from '../CartItem';
import { useCart } from '@/hooks/useCart';
import { X } from '../Icons';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

import * as S from './styles';

export interface DrawerProps {
  isOpen: boolean;
  onCloseDrawer: () => void;
}

export const Drawer = ({ isOpen, onCloseDrawer }: DrawerProps) => {
  const { total, items } = useCart();

  useLockBodyScroll(isOpen);

  return (
    <>
      <S.Container
        isOpen={isOpen}
        aria-hidden={!isOpen}
        aria-label="Carrinho de compras"
      >
        <S.Header>
          <S.Title>Carrinho de compras</S.Title>
          <S.CloseButton
            onClick={onCloseDrawer}
            aria-label="Fechar carrinho de compras"
          >
            <X />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <S.Body>
            {items.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </S.Body>
        </S.Content>
        <S.Footer>
          <S.PriceContainer>
            <S.Label>Total: </S.Label>
            <S.Price>{total}</S.Price>
          </S.PriceContainer>
        </S.Footer>
        <S.CheckoutButton aria-label="Finalizar compra">
          Finalizar Compra
        </S.CheckoutButton>
      </S.Container>
      <S.Overlay
        isOpen={isOpen}
        onClick={onCloseDrawer}
        aria-label="Sobreposição do carrinho de compras"
      />
    </>
  );
};
