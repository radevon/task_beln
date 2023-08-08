import PRODUCTS from '../data/Products' //импорт из мнимого хранилища данных

// функция трансформации массива данных, добавление каждой записи уникального _id
// не по ТЗ, но как есть....
let transformWithId=(items)=>{
    return items.map((item,index)=>{
        return {_id:index,...item}
    })
}
//функция имитирующая получение данных по сети
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(transformWithId(PRODUCTS))},100);
    })
}

export {fetchData};