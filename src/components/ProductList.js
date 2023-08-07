import Product from "./Product";
import SortIcon from "./SortIcon";

/**
 * Компонент отображающий список товаров в виде таблицы
 * @param items - элементы данных
 * @param deleteFn - функция пробрасываемая в дочерний компонент для удаления позиции
 */
function ProductList({ items, title, deleteFn, sortParam, changeSort}) {


  return (
    <div>
      <h2 className="teal-text">{title}</h2>
      <div className="flex-row header">
            <div className='flex-column'> 
              <span className="sortable-name" onClick={()=>changeSort("name")} title="Нажмите для сортировки по полю">Наименование</span> {sortParam.sortField==="name"?<SortIcon sortType={sortParam.sortType}></SortIcon>:<span></span>}
            </div>
            <div className='flex-column'>
              <span className="sortable-name" onClick={()=>changeSort("category")} title="Нажмите для сортировки по полю">Категория</span> {sortParam.sortField==="category"?<SortIcon sortType={sortParam.sortType}></SortIcon>:<span></span>}
            </div>
            <div className='flex-column'>
              <span className="sortable-name" onClick={()=>changeSort("stocked")} title="Нажмите для сортировки по полю">Наличие</span> {sortParam.sortField==="stocked"?<SortIcon sortType={sortParam.sortType}></SortIcon>:<span></span>}
            </div> 
            <div className='flex-column'>
              <span className="sortable-name" onClick={()=>changeSort("price")} title="Нажмите для сортировки по полю">Цена</span> {sortParam.sortField==="price"?<SortIcon sortType={sortParam.sortType}></SortIcon>:<span></span>}</div>  
            <div className='remove-column'>&nbsp;</div> 
        </div>
       
    {items.length===0? ( <div className="center-align">отсутствуют товары</div>) : 
          items.map((item,i) => (
        <Product index={i} {...item} key={i} deleteFn={deleteFn}></Product>
      ))
    }
    </div>
  );
}
export default ProductList;
