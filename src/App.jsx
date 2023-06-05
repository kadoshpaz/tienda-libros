import Buscar from "./components/busqueda";
import Navbar from "./components/navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Provider } from "./Context";
import Home from './pages/Home';
import DetalleLibro from './pages/DetalleLibro';
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import Carro from "./pages/Carrito";
import Catalogo from "./components/catalogo";

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
                <Route path="/" element={<Catalogo categoriaSeleccionada="" />} />
                <Route path="/libro/:id" element={<DetalleLibro />} />
                {/* <Route path="/carrito" element={<Carro />} />
                <Route path="/pizza/:id" element={<DetailPizza />} /> */}
                <Route path="/carrito" element={<Carro />} />
                <Route path='/ciencia-ficcion' element={<Catalogo categoriaSeleccionada="fantastica" />} />
                <Route path="/infantil" element={<Catalogo categoriaSeleccionada="infantil" />} />
                
              </Routes>
          
          <Footer />
      </main>
      
      </BrowserRouter>
    </Provider>  
  </>
  );
}


