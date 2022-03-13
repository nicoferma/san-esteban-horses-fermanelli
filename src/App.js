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
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import AddProduct from './components/AddProduct';
import PageUser from './pages/PageUser';
import PageOrders from './pages/PageOrders';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <AuthProvider>
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

              <Route path="user" element={<PageUser />} />

              <Route path="cart" element={<PageCart />} />

              <Route path="add-product" element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              } />

              <Route path="orders" element={
                <ProtectedRoute>
                  <PageOrders />
                </ProtectedRoute>
              } />

              <Route path="login" element={<PageLogin />} />

              <Route path="*" element={<PageError />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
