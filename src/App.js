import './App.css';

import { fetchData } from './service/service';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

/**
 * Корневой компонент приложения
 *
 */
function App() {

  const [Products,setProducts]=useState([]);
  const [sortParam,setSortParam]=useState({sortField:'name', sortType:1});
  
  // обработчик кнопки добавления позиции
  function addProduct(item){
    setProducts([...Products,item]);
  }
  // обработчик кнопки удаления позиции
  function removeProduct(_id){
    let copyProdycts=[...Products];
    setProducts(copyProdycts.filter(x=>x._id!==_id));
  }
  // подключаем мнимую api-шку
  useEffect(()=>{
    fetchData().then(data=>{ setProducts(data)});
  },[])

  return (
    <div className="App"> 
      <div className='container'>    
       <ProductList items={Products} title="Список позиций товаров" deleteFn={removeProduct} sortParam={sortParam}></ProductList>
       <AddProduct create={addProduct}></AddProduct> 
     </div>
    </div>
  );
}

export default App;
