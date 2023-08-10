import { getProducts, registerProduct } from '../api/product/products';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function useProducts() {
  const queryClient = new useQueryClient();

  const productsQuery = useQuery(['products'], () => getProducts(), {
    staleTime: 1000 * 60 * 60,
  });

  const homeProdsQuery = useQuery(
    ['products', 'home'],
    () => getProducts('home'),
    {
      staleTime: 1000 * 60 * 60,
    }
  );

  const addProductQuery = useMutation(
    ({ secure_url, product }) =>
      registerProduct({ ...product, imageUrl: secure_url }),
    { onSuccess: () => queryClient.invalidateQueries(['products']) }
  );
  return { productsQuery, homeProdsQuery, addProductQuery };
}
