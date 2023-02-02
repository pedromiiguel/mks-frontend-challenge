import { addToCart } from '@/features/cart/cart-slice';
import { customRender } from '@/utils/tests/customRender';
import { fireEvent, screen } from '@testing-library/react';

import { Card } from '.';

const product = {
  id: 3,
  name: 'Macbook Air',

  description:
    'Processador intel Core i5 de dois núcleos e 1,8 GHz (Turbo Boost de até 2,9 GHz) com cache L3 compartilhado de 3 MB.',
  photo:
    'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
  price: 8200.0
};

describe('<Card />', () => {
  it('should render the card', () => {
    const { container } = customRender(<Card product={product} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render price in brazilian currency', () => {
    customRender(<Card product={product} />);

    expect(screen.getByText('R$ 8.200')).toBeInTheDocument();
  });

  it('should add product in store when buy button is clicked', () => {
    const { store, debug } = customRender(<Card product={product} />);

    const button = screen.getByLabelText(/Adicionar no carrinho/i);

    fireEvent.click(button);

    const payload = {
      id: 3,
      name: 'Macbook Air',
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      price: 8200.0,
      quantity: 1
    };

    expect(store.getState().cart.items).toEqual([payload]);
  });
});
