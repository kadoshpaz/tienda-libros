import Buscar from "./components/busqueda";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from './pages/Home'

export default function App() {
  return (

  <>
      <div className="fixed-top">
        <Buscar />
        <Navbar />
      </div>
      <div className="mi-margen">
        <Header />
      </div>
     
      <Home />
  </>
  );
}


