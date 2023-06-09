import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProvider from './UserContext';
import { CatalogoProvider } from './BuscaContext';
import { Provider } from './Context';
import {BrowserRouter} from 'react-router-dom';
import ProductProvider from './ProductContext';
import FavoritesProvider from './FavoritesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CatalogoProvider>
          <Provider>
            <FavoritesProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </FavoritesProvider>  
          </Provider>
        </CatalogoProvider>
      </ProductProvider>   
     </UserProvider> 
  </React.StrictMode>
);

