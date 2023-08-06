import PRODUCTS from '../data/Products' //импорт из мнимого хранилища данных

//функция имитирующая получение данных по сети
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(PRODUCTS)},100);
    })
}

export {fetchData};