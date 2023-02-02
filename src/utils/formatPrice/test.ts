import { formatPrice } from '.';

describe('formatPrice()', () => {
  it('should return formated the value in brazilian currency', () => {
    expect(formatPrice(200)).toEqual('R$\xa0200');
  });
});
