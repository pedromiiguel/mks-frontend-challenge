import { customRender } from '@/utils/tests/customRender';
import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the header', () => {
    const onOpenDrawerMock = jest.fn();

    const { container } = customRender(
      <Header onOpenDrawer={onOpenDrawerMock} />
    );

    const heading = screen.getByRole('heading', { name: 'MKS' });
    const text = screen.getByText('Sistemas');

    const cartIcon = screen.getByRole('img', { name: 'Carrinho de compras' });

    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call the onOpenDrawer when the cart button is clicked', () => {
    const onOpenDrawerMock = jest.fn();

    customRender(<Header onOpenDrawer={onOpenDrawerMock} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onOpenDrawerMock).toBeCalledTimes(1);
  });
});
