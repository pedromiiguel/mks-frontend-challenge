import { customRender } from '@/utils/tests/customRender';
import { fireEvent, screen } from '@testing-library/react';

import { Drawer } from '.';

describe('<Drawer />', () => {
  it('should render the drawer', () => {
    const onCloseDrawerMock = jest.fn();

    const { container } = customRender(
      <Drawer isOpen={true} onCloseDrawer={onCloseDrawerMock} />
    );

    expect(screen.getByRole('heading', { name: 'Carrinho de compras' }));
    expect(screen.getByRole('button', { name: 'Fechar carrinho de compras' }));
    expect(screen.getByText('Total:'));

    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls onCloseDrawer when close button is clicked', () => {
    const onCloseDrawerMock = jest.fn();
    customRender(<Drawer isOpen={true} onCloseDrawer={onCloseDrawerMock} />);

    fireEvent.click(
      screen.getByRole('button', { name: /Fechar carrinho de compras/i })
    );

    expect(onCloseDrawerMock).toHaveBeenCalledTimes(1);
  });

  it('calls onCloseDrawer when overlay is clicked', () => {
    const onCloseDrawerMock = jest.fn();

    const { debug } = customRender(
      <Drawer isOpen={true} onCloseDrawer={onCloseDrawerMock} />
    );

    const overlay = screen.getByLabelText(
      'Sobreposição do carrinho de compras'
    );

    fireEvent.click(overlay);

    expect(onCloseDrawerMock).toHaveBeenCalledTimes(1);
  });

  it('should drawer is open disabled body overflow', () => {
    const onCloseDrawerMock = jest.fn();

    customRender(<Drawer isOpen={true} onCloseDrawer={onCloseDrawerMock} />);

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
  });
});
