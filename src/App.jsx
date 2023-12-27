import React from 'react';
import PageContent from './pages/PageContent'
import { CartProvider } from "./components/cards/CartProvider";
import Admin from './components/Layout/Admin';
const App = () => {
  return (
   <>
       <CartProvider>
       <div className="App">
      <Admin/>
      <PageContent/>
     
    </div>
       </CartProvider>
   

  </>
  );
};

export default App;