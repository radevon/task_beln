/**
 * Компонент отображающий одну единицу продукции из списка
 */
function Product({name,category,price,stocked}){
    return (
        <div>
            {name} - {category} - {stocked} - {price}
        </div>
    )
}

export default Product;
