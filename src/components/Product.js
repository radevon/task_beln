/**
 * Компонент отображающий одну единицу продукции из списка (в виде одной строки таблицы)
 * @param index - использую вместо id для удаления элементов (т. к. тестовые данные не содержат id), хотя в реальном проекте индекс массива нежелательно юзать
 */
function Product({index,name,category,price,stocked, deleteFn}){

    
    // рисую элемент в зависимости от наличия stocked
    const icon=stocked?(<i className="material-icons green-text" title="в наличии">check</i>)
                :(<i className="material-icons red-text" title="нет на складе">clear</i>);
    return (
        <div className="flex-row">
            <div className='flex-column'>{name}</div>
            <div className='flex-column'>{category}</div>
            <div className='flex-column'>{icon}</div> 
            <div className='flex-column'>{'$'+price}</div>    
            <div className='remove-column'>
                <button className="btn-floating btn-small waves-effect waves-light red" onClick={()=>deleteFn(index)} title="Удалить позицию"><i className="material-icons">remove</i></button>
            </div> 
        </div>
    )
}

export default Product;
