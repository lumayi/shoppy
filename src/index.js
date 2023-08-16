import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import NewProduct from './pages/NewProduct';
import PrivateRouter from './router/PrivateRouter';
import Auth from './pages/Auth';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      {
        path: 'products/new',
        element: (
          <PrivateRouter>
            <NewProduct isAdmin />
          </PrivateRouter>
        ),
      },
      { path: 'products/:productId', element: <Detail /> },
      {
        path: 'cart',
        element: (
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        ),
      },
      { path: 'oauth2/redirect?', element: <Auth /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
