import { customRender } from '@/utils/tests/customRender';
import { screen, fireEvent } from '@testing-library/react';
import {
  decreaseItemQuantity,
  increaseItemQuantity
} from '@/features/cart/cart-slice';

import { QuantityInput } from '.';

describe('<QuantityInput />', () => {
  it('should render the quantity Input', () => {
    const props = { quantity: 1, productId: 1 };

    const { container } = customRender(<QuantityInput {...props} />);
    const increaseButton = screen.getByRole('button', {
      name: 'Aumentar a quantidade do produto'
    });
    const decreaseButton = screen.getByRole('button', {
      name: 'Diminuir a quantidade do produto'
    });

    expect(screen.getByText('Qtd:')).toBeInTheDocument();

    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should call increaseItemQuantity when + button is clicked', () => {
    const productId = 1;

    const { store } = customRender(
      <QuantityInput quantity={3} productId={productId} />
    );
    store.dispatch = jest.fn();
    store.dispatch(increaseItemQuantity(productId));

    const increaseButton = screen.getByRole('button', {
      name: 'Aumentar a quantidade do produto'
    });

    fireEvent.click(increaseButton);
    expect(store.dispatch).toHaveBeenCalledWith(
      increaseItemQuantity(productId)
    );
  });

  it('should call decreaseItemQuantity when - button is clicked', () => {
    const productId = 2;

    const { store } = customRender(
      <QuantityInput quantity={2} productId={productId} />
    );
    store.dispatch = jest.fn();
    store.dispatch(decreaseItemQuantity(productId));

    const decreaseButton = screen.getByRole('button', {
      name: 'Diminuir a quantidade do produto'
    });

    fireEvent.click(decreaseButton);
    expect(store.dispatch).toHaveBeenCalledWith(
      decreaseItemQuantity(productId)
    );
  });
});
