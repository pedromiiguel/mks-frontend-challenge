import { Card } from '@/components/Card';
import { Drawer } from '@/components/Drawer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { useState } from 'react';

import * as S from './styles';

export interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface HomeTemplateProps {
  products: Product[] | undefined;
}

export const Home = ({ products }: HomeTemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
  };

  if (!products) {
    return (
      <S.Message>Não encontramos nenhum produto, tente novamente</S.Message>
    );
  }

  return (
    <S.Main>
      <Drawer isOpen={isOpen} onCloseDrawer={handleCloseDrawer} />
      <Header onOpenDrawer={handleOpenDrawer} />
      <S.Container>
        <S.Content>
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </S.Content>
      </S.Container>
      <Footer />
    </S.Main>
  );
};
