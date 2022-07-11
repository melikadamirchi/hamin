import React from "react"
import ProductDes from "./ProductDes"

var Product=({name,descrip,price})=>{

return(
    <div>
    <h1>{name}</h1>
    <h2>{descrip}</h2>
    <h3>${price}</h3>
    
   

<ProductDes
name="emi"
price={20}
/>
</div>
)}
export default Product