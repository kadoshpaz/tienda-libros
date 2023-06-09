import Buscar from "./components/busqueda";
import Navbar from "./components/navbar";
import {Routes, Route, Navigate} from 'react-router-dom';
import DetalleLibro from './pages/DetalleLibro';
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import Carro from "./pages/Carrito";
import Catalogo from "./components/catalogo";

import Busqueda from "./pages/Search";

import { UserContext } from "./UserContext";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Update from "./pages/Update";
import Profile from "./pages/Profile";
import AgregarLibro from "./pages/AgregarLibro";
import Publicaciones from "./pages/Publicaciones";

export default function App() {

  const {user} =useContext(UserContext);

  return (

  <>
  
     {/* <CatalogoProvider>
        <Provider>
          <BrowserRouter> */}
           
            <main className=""> 
            <ScrollToTop />   
            <div className="fixed-top">
              <Buscar />
              <Navbar />
            </div>                    
              <Routes>
                <Route path="/" element={<Catalogo categoriaSeleccionada="" />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                
                <Route path='/dashboard' element={user ? <Dashboard />: <Navigate to='/' />} />
                <Route path='/update/:id' element={user ? <Update />: <Navigate to='/login' />} />
                <Route path='/dashboard/profile' element={user ? <Profile />: <Navigate to='/dashboard' />} />
                <Route path='/dashboard/agregar_libro' element={user ? <AgregarLibro />: <Navigate to='/dashboard' />} />
                <Route path='/dashboard/publicaciones' element={user ? <Publicaciones />: <Navigate to='/dashboard' />} />
                <Route path='/login' element={!user ? <Login />: <Navigate to='/dashboard' />} />
                <Route path="/libro/:id" element={<DetalleLibro />} />
                <Route path="/carrito" element={<Carro />} />
                <Route path='/ciencia-ficcion' element={<Catalogo categoriaSeleccionada="fantastica" />} />
                <Route path="/infantil" element={<Catalogo categoriaSeleccionada="infantil" />} />
                <Route path="/filtrado" element={<Busqueda />} />   
                <Route path='/register' element={!user ? <Register />: <Navigate to='/dashboard' />} />             
              </Routes>             
              <Footer />
            </main> 
 
          {/* </BrowserRouter>
        </Provider>
      </CatalogoProvider> */}
    
  </>
  );
}

