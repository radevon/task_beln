import Product from "./Product";

function ProductList({items, title}){

    let list=items.map((item)=> (
        <Product {...item}></Product>
    ))

    return (
    <div>
        <h2>{title}</h2>
        {list }
    </div>
    );
}
export default ProductList