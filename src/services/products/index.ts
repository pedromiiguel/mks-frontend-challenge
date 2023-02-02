import { api } from '@/lib/axios';

export async function getProducts() {
  const { data } = await api.get('/products', {
    params: {
      page: 1,
      rows: 10,
      sortBy: 'name',
      orderBy: 'DESC'
    }
  });

  return data.products;
}
