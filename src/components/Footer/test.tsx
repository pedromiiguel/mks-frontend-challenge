import { customRender } from '@/utils/tests/customRender';
import { screen } from '@testing-library/react';

import { Footer } from '.';

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = customRender(<Footer />);

    expect(
      screen.getByText(/MKS sistemas © Todos os direitos reservados/i)
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
