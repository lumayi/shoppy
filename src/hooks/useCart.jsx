import { useContext } from 'react';
import {
  deleteCartProduct,
  getCartProducts,
  updateCartProduct,
} from '../api/product/products';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UserContext } from '../context/UserContext';

export default function useCart() {
  const {
    userState: {
      user: { uid },
    },
  } = useContext(UserContext);
  const queryClient = new useQueryClient();
  const cartQuery = useQuery(['cart', uid || ''], () => getCartProducts(uid), {
    staleTime: 1000 * 60 * 60,
    enabled: !!uid,
  });
  const addCartQuery = useMutation(
    ({ product }) => updateCartProduct({ uid, product }),
    { onSuccess: () => queryClient.invalidateQueries(['cart', uid]) }
  );
  const deleteQuery = useMutation(
    (productId) => deleteCartProduct({ uid, productId }),
    { onSuccess: () => queryClient.invalidateQueries(['cart', uid]) }
  );
  const updateQuery = useMutation(
    ({ type, item }) =>
      type === 'add'
        ? updateCartProduct({
            uid,
            product: { ...item, quantity: item.quantity + 1 },
          })
        : updateCartProduct({
            uid,
            product: { ...item, quantity: item.quantity - 1 },
          }),
    { onSuccess: () => queryClient.invalidateQueries(['cart', uid]) }
  );

  return { cartQuery, deleteQuery, updateQuery, addCartQuery };
}
