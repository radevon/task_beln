import { fetchData } from './service/service';
import { useEffect, useState, useMemo } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import FilterProduct from './components/FilterProduct';
import M from 'materialize-css';

/**
 * Корневой компонент приложения
 *
 */
function App() {

  
  const [Products,setProducts]=useState([]); // состояние основные данные (массив)
  const [sortParam,setSortParam]=useState({sortField:'name', sortType:1}); // состояние параметры сортировки
  const [filterParam,setFilterParam]=useState({fname:'',fcategory:'',stock_exist:true,stock_notexist:true}); // состояние параметры фильтрации
  
  // подключаем мнимую api-шку, получение исходных данных
  useEffect(()=>{
    fetchData().then(data=>{ setProducts(data)});
  },[])

  // функция фильтрации позиций учитывает одновременно фильтры по 3 полям
  const filteredProducts=useMemo(()=>{
    return Products.filter((item)=>{
      return (filterParam.fname.trim()!==''?item.name.toLocaleLowerCase().includes(filterParam.fname.toLocaleLowerCase().trim()):true) &&            // условие на частичное совпадение name
             (filterParam.fcategory.trim()!==''?item.category.toLocaleLowerCase().trim()===filterParam.fcategory.toLocaleLowerCase().trim():true) &&  // условие на полное совпадение category без учета регистра
             ((item.stocked&&filterParam.stock_exist) || (!item.stocked&&filterParam.stock_notexist))     // условие на совпадение наличие и отсутствие товара
    });
  },[filterParam,Products]);

  // функция сортировки с памятью на предварительно отфильтрованных данных
  // учитывает тип поля если строка, то сравнение происходит без учета регистра
  const sortedAndFilteredProducts=useMemo(()=>{
    return filteredProducts.sort((a,b)=>{
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
  },[sortParam,filteredProducts]);
  

  // получаю и кэширую массив уникальных категорий для выпадающего списка фильтрации
  const allCategories=useMemo(()=>{
    return Array.from(Products.reduce((prev,elem)=>prev.add(elem.category), new Set()))
  },[Products]);

  // обработчик кнопки добавления позиции
  function addProduct(item){
    setProducts([...Products,item]);
  }
  // обработчик смены условия сортировки
  function changeSort(sortField){
    setSortParam({sortField:sortField,sortType:1-sortParam.sortType});
    M.toast({html: 'Поле "'+sortField+'" cортировка по '+(sortParam.sortType===0?"возрастанию":"убыванию"), classes:"green lighten-1"})
  }



  // обработчик кнопки удаления позиции
  function removeProduct(_id){
    setProducts(Products.filter(x=>x._id!==_id));
  }  

  // основной компонент содержимое
  return (
    <div className="App"> 
      <div className='container'>
       <FilterProduct categories={allCategories} title="ФИЛЬТРАЦИЯ" filterParam={filterParam} changeFilter={setFilterParam}></FilterProduct>
       <ProductList items={sortedAndFilteredProducts} title="Позиции товаров" deleteFn={removeProduct} changeSort={changeSort} sortParam={sortParam}></ProductList>
       <AddProduct create={addProduct}></AddProduct> 
     </div>
    </div>
  );
}

export default App;
