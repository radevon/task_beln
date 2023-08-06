import './App.css';

import { fetchData } from './service/service';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

function App() {

  const [Products,setProducts]=useState([]);
  
 useEffect(()=>{
  fetchData().then(data=>{setProducts(data)});
 },[])

  return (
    <div className="container App">
      
     <ProductList items={Products} title="Список позиций"></ProductList>
      
      
      
    </div>
  );
}

export default App;
