import Buscar from "./components/busqueda";
import Navbar from "./components/navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Provider } from "./Context";
import Home from './pages/Home'
import Footer from "./components/footer";

export default function App() {
  return (

  <>
    <Provider>
      <BrowserRouter>
      <div className="fixed-top">
        <Buscar />
        <Navbar />
      </div>
      <main className="">                        
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/carrito" element={<Carro />} />
                <Route path="/pizza/:id" element={<DetailPizza />} /> */}
                
              </Routes>
          
          <Footer />
      </main>
      
      </BrowserRouter>
    </Provider>  
  </>
  );
}


