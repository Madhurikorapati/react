import { useState } from "react";

export default function Cart(props){
    let { isAdded,setIsAdded }=useState(false);
    let {product}=props;
    let [quantity,setQuantity]=useState(1);
    function incrementQuantity(){
        setQuantity(quantity+1);
        console.log(quantity);
        }
    function decrementQuantity(){
         setQuantity(quantity-1);
    }
    function onAdd(){
        if(isAdded){
            props.decreaseCartItem()
            isAdded=false
        }
        else{
            isAdded=true;
            props.addCartItem();
        }
    }
    return(
        <div className="cart-wrapper">
            <div className="image-wrapper">

                <img src={product.path} alt="product-image"></img>
        </div>
        <div className="content">
            <div className="name">
                {product.name}
            </div>
            <div className="price">
                ${product.price}
            </div>
            {isAdded &&(<div className="quantity">
                <div>+</div>
                <div onClick ={incrementQuantity}>+</div>
                <div>{quantity}</div>
                <button disabled={quantity<=1} onClick={decrementQuantity}>-</button>
                <div>-</div>
            </div>)}
            <button onClick={onAdd}>{isAdded?"Remove": "Add" }</button>
            </div>
        </div>
    );
}
       