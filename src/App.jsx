import Buscar from "./components/busqueda";
import Navbar from "./components/navbar";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import { Provider } from "./Context";
import DetalleLibro from './pages/DetalleLibro';
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import Carro from "./pages/Carrito";
import Catalogo from "./components/catalogo";
import { CatalogoProvider } from "./BuscaContext";
import Busqueda from "./pages/Search";

import { UserContext } from "./UserContext";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {

     const {user} =useContext(UserContext);
     console.log(user);


  return (

  <>
  
     <CatalogoProvider>
        <Provider>
          <BrowserRouter>
            <ScrollToTop />
            <main className="">    
            <div className="fixed-top">
              <Buscar />
              <Navbar />
            </div>                    
              <Routes>
                <Route path="/" element={<Catalogo categoriaSeleccionada="" />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route path='/dashboard' element={user ? <Dashboard />: <Navigate to='/' />} />
                <Route path='/login' element={!user ? <Login />: <Navigate to='/dashboard' />} />
                <Route path="/libro/:id" element={<DetalleLibro />} />
                <Route path="/carrito" element={<Carro />} />
                <Route path='/ciencia-ficcion' element={<Catalogo categoriaSeleccionada="fantastica" />} />
                <Route path="/infantil" element={<Catalogo categoriaSeleccionada="infantil" />} />
                <Route path="/filtrado" element={<Busqueda />} />                
              </Routes>             
              <Footer />
            </main> 
 
          </BrowserRouter>
        </Provider>
      </CatalogoProvider>
    
  </>
  );
}

