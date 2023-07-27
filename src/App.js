import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { UserContextProvider } from './context/UserContext';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <Header />
          <Outlet />
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
