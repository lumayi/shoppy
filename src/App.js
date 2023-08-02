import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { UserContextProvider } from './context/UserContext';
import { CartContextProvider } from './context/CartContext';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
