import { useState } from "react";
import M from "materialize-css";
/**
 * Компонент отвечающий да добавление новой позиции продукта
 * 
 */
function AddProduct({create}){
    // поля по умолчанию
    const defaultProduct={name:'',category:'',stocked:true,price:0};
    // состояние
    const [product,setProduct]=useState(defaultProduct);

    // функция обработчик добавления новой позиции
    function addProduct(){
        if(product.name.trim()!==""&&product.category.trim()!==""){
            product._id=Date.now(); // использую время в милисекундах для генерации уникального id, в данном случае для демонстрации допустимо
            product.price=+product.price;
            create(product);
            M.toast({html: 'Добавлена новая позиция.', classes:"green lighten-1"})
            setProduct(defaultProduct);
        }else{
            M.toast({html: 'Не все поля заполнены!', classes:"red lighten-3"})
        }
    }

    
    return (
        <div className="addForm">
           
            <div className="flex-row footer">
                <div className='flex-column'>
                    <input placeholder="Наименование" type="text" value={product.name} onChange={e=>setProduct({...product, name:e.target.value})}></input>
                </div>
                <div className='flex-column'>
                    <input placeholder="Категория" type="text" value={product.category} onChange={e=>setProduct({...product, category:e.target.value})}></input>
                </div>
                <div className='flex-column'>
                    <div className="switch">
                        <label>
                        Отсутствует
                        <input type="checkbox" checked={product.stocked} onChange={e=>setProduct({...product, stocked:e.target.checked})}></input>
                        <span className="lever"></span>
                        В наличии
                        </label>
                    </div>
                </div> 
                <div className='flex-column'>
                    <input placeholder="Цена" id="Price" type="number" value={product.price} onChange={e=>setProduct({...product, price:e.target.value})}></input>  
                </div>  
                <div><button className="waves-effect waves-light btn" onClick={addProduct}>Добавить</button></div> 
            </div>
        </div>
    )
}

export default AddProduct;