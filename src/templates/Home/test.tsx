import { customRender } from '@/utils/tests/customRender';
import {
  act,
  fireEvent,
  getAllByLabelText,
  getByLabelText,
  screen
} from '@testing-library/react';

import { Home } from '.';

const products = [
  {
    id: 1,
    name: 'Headset Cloud Revolver',

    description:
      'A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
    price: 1000.0
  },
  {
    id: 2,
    name: 'iPad',

    description:
      'iPad é uma linha de tablets projetada, desenvolvida e comercializada pela Apple, que funciona com o sistema operacional móvel iOS e iPadOS.',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/ipadair.webp',
    price: 4200.0
  }
];

describe('<Home />', () => {
  it('should render message when there are no products', () => {
    customRender(<Home products={undefined} />);
    expect(
      screen.getByText('Não encontramos nenhum produto, tente novamente')
    ).toBeInTheDocument();
  });

  it('should render the products', () => {
    customRender(<Home products={products} />);
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
    });
  });

  it('should open the drawer when the header button is clicked', () => {
    const {} = customRender(<Home products={products} />);

    act(() => {
      fireEvent.click(screen.getByLabelText('Abrir o carrinho de compras'));
    });

    expect(
      screen
        .getAllByLabelText('Carrinho de compras')[0]
        .getAttribute('aria-hidden')
    ).toBe('false');
  });

  it('should close the drawer when the close button is clicked', () => {
    const {} = customRender(<Home products={products} />);

    act(() => {
      fireEvent.click(screen.getByLabelText('Fechar carrinho de compras'));
    });

    expect(
      screen
        .getAllByLabelText('Carrinho de compras')[0]
        .getAttribute('aria-hidden')
    ).toBe('true');
  });
});
