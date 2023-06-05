import Buscar from "./components/busqueda";
import Navbar from "./components/navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Provider } from "./Context";
import Home from './pages/Home';
import DetalleLibro from './pages/DetalleLibro';
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import Carro from "./pages/Carrito";

export default function App() {
  return (

  <>
    <Provider>
      <BrowserRouter>
      <ScrollToTop />
      <div className="fixed-top">
        <Buscar />
        <Navbar />
      </div>
      <main className="">                        
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/libro/:id" element={<DetalleLibro />} />
                {/* <Route path="/carrito" element={<Carro />} />
                <Route path="/pizza/:id" element={<DetailPizza />} /> */}
                <Route path="/carrito" element={<Carro />} />
                
              </Routes>
          
          <Footer />
      </main>
      
      </BrowserRouter>
    </Provider>  
  </>
  );
}


