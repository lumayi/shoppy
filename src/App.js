import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
