import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
import PageMarroquineria from "./pages/PageMarroquineria"
import PageTalabarteria from './pages/PageTalabarteria';
import PagePolo from './pages/PagePolo';
import PageEquitacion from './pages/PageEquitacion';
import PageInicio from './pages/PageInicio';
import PageLogin from './pages/PageLogin';
import PageError from './pages/PageError';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<PageInicio />} />
          <Route path="marroquineria" element={<PageMarroquineria />} />
          <Route path="talabarteria" element={<PageTalabarteria />} />
          <Route path="polo" element={<PagePolo />} />
          <Route path="equitacion" element={<PageEquitacion />} />
          <Route path="login" element={<PageLogin />} />
          <Route path="*" element={<PageError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
