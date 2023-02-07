import {Routes, Route} from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home'
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:category' element={<ProductList />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart /> } />
      

    </Routes>
    
  );
}

export default App;
