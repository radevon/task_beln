import './App.css';

import { fetchData } from './service/service';
import { useEffect, useState, useMemo } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

/**
 * Корневой компонент приложения
 *
 */
function App() {

  const [Products,setProducts]=useState([]);
  const [sortParam,setSortParam]=useState({sortField:'name', sortType:1});
  

  const sortedProducts=useMemo(()=>{
    console.log("getsorted")
    return [...Products].sort((a,b)=>{
      let first=a[sortParam.sortField];
      let second=b[sortParam.sortField];
      if(typeof first=="string") first=first.toLocaleLowerCase();
      if(typeof second=="string") second=second.toLocaleLowerCase();
      switch (sortParam.sortType){
        case 1: return first>second?1:-1;
        case 0: return first<second?1:-1;
        default: return 0;
      }
    })
  },[sortParam,Products]);

  // обработчик кнопки добавления позиции
  function addProduct(item){
    setProducts([...Products,item]);
  }
  // обработчик смены условия сортировки
  function changeSort(sortField){
    setSortParam({sortField:sortField,sortType:1-sortParam.sortType});
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
       <ProductList items={sortedProducts} title="Список позиций товаров" deleteFn={removeProduct} changeSort={changeSort} sortParam={sortParam}></ProductList>
       <AddProduct create={addProduct}></AddProduct> 
     </div>
    </div>
  );
}

export default App;
