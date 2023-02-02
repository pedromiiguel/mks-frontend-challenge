import React from 'react';
import { useCart } from '@/hooks/useCart';
import { Cart } from '../Icons';

import * as S from './styles';

type HeaderProps = {
  onOpenDrawer: () => void;
};

export const Header = ({ onOpenDrawer }: HeaderProps) => {
  const { length } = useCart();

  return (
    <S.Container>
      <S.Logo>
        <S.HighlightText>MKS</S.HighlightText>
        <S.Text>Sistemas</S.Text>
      </S.Logo>

      <S.CartButton
        onClick={onOpenDrawer}
        aria-label="Abrir o carrinho de compras"
      >
        <Cart /> {length}
      </S.CartButton>
    </S.Container>
  );
};
