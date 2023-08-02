import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { UserContextProvider } from './context/UserContext';
import { CartContextProvider } from './context/CartContext';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <UserContextProvider>
        <CartContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </CartContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
