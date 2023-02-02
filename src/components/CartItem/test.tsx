import { removeFromCart } from '@/features/cart/cart-slice';
import { customRender } from '@/utils/tests/customRender';
import { fireEvent, screen } from '@testing-library/react';

import { CartItem } from '.';

describe('<CartItem />', () => {
  it('should render the cart items', () => {
    const { container } = customRender(
      <CartItem
        product={{
          id: 3,
          name: 'Macbook Air',
          price: 5000,
          photo:
            'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
          quantity: 1
        }}
      />
    );

    expect(screen.getByRole('img', { name: 'Macbook Air' }));
    expect(screen.getByRole('heading', { name: 'Macbook Air' }));
    expect(screen.getByText('R$ 5.000'));
    expect(
      screen.getByRole('button', { name: /Remover produto do carrinho/i })
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should remove the product when clicking on the remove button', () => {
    const product = {
      id: 1,
      name: 'Test Product',
      price: 10,
      photo:
        'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp',
      quantity: 1
    };

    const { store } = customRender(<CartItem product={product} />);

    const removeButton = screen.getByLabelText('Remover produto do carrinho');

    fireEvent.click(removeButton);
    store.dispatch = jest.fn();
    store.dispatch(removeFromCart(product.id));

    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(1));
  });
});
