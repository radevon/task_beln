/**
 * 
 * Компонент для фильтрации таблицы данных
 */

function FilterProduct({categories, title, filterParam, changeFilter}) {


    return ( 
    <div id="filter-panel"> 
     <h5 className="teal-text"><strong>{title}</strong></h5>
     
        <div className="row">
            <div className="">
            <label htmlFor="f-name">Наименование</label>
            <input id="f-name" type="text" value={filterParam.fname} style={{backgroundColor:"#fff"}} onChange={(e)=>{changeFilter({...filterParam, fname:e.target.value})}}></input>
            </div>
        </div>
        <div className="row">
            <div className="col s12">
            <label>Категория</label>
            <select id="f-category" className="browser-default" value={filterParam.fcategory} onChange={(e)=>{changeFilter({...filterParam, fcategory:e.target.value})}}>
            <option value="">ВСЕ</option>
            {
                categories.map((item)=>(<option key={item} value={item}>{item}</option>))
            }
            </select>            
            </div>
        </div>
        <div className="row">
            <div className="col s12">
            <label>
                <input type="checkbox" name="fstocked"  checked={filterParam.stock_exist} onChange={(e)=>{ changeFilter({...filterParam, stock_exist:!filterParam.stock_exist}) }}/>
                <span>В наличии</span>
            </label>   
            &nbsp;
            <label>
                    <input type="checkbox" name="fstocked"  checked={filterParam.stock_notexist} onChange={(e)=>{ changeFilter({...filterParam, stock_notexist:!filterParam.stock_notexist}) }}/>
                    <span>Отсутствует</span>
                </label>
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <button className="btn" title="Нажмите чтобы очистить фильтрацию и показать все данные" onClick={()=>{changeFilter({fname:'',fcategory:'', stock_exist:true,stock_notexist:true})}}>Очистить</button>
            </div>
        </div>
     </div>
    );
}

export default FilterProduct;