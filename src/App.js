import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import PageMarroquineria from "./pages/PageMarroquineria"
import PageTalabarteria from './pages/PageTalabarteria';
import PagePolo from './pages/PagePolo';
import PageEquitacion from './pages/PageEquitacion';
import PageInicio from './pages/PageInicio';
import PageLogin from './pages/PageLogin';
import PageCart from './pages/PageCart';
import PageError from './pages/PageError';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';


const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <CartProvider>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<PageInicio />} />

            <Route path="/marroquineria" element={<PageMarroquineria />} />
            <Route path='/marroquineria/:id' element={<ItemDetailContainer />} />

            <Route path="talabarteria" element={<PageTalabarteria />} />
            <Route path='/talabarteria/:id' element={<ItemDetailContainer />} />

            <Route path="polo" element={<PagePolo />} />
            <Route path='/polo/:id' element={<ItemDetailContainer />} />

            <Route path="equitacion" element={<PageEquitacion />} />
            <Route path='/equitacion/:id' element={<ItemDetailContainer />} />

            <Route path="cart" element={<PageCart />} />

            <Route path="login" element={<PageLogin />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
