import './index.css';
import Card from './Card';
import { useState } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import ItemArr from './ItemArr';
var delet=false;
var Home=()=>{
const [added,setAdded]=useState(false);
const [count,setCount]=useState(0);
const [cartDisplay,setCartDisplay]=useState(false);
const [itemArr,setItemArr]=useState([]);
var addToCart=(itemInCart)=>{
var isItemRedundunt=itemArr.includes(itemInCart);
if(!isItemRedundunt){
setAdded(true);
setItemArr((prev)=>{
return [
...prev,
itemInCart
]
})
setCount((prev)=>{
return ++prev;
})
}else{
  alert("Item already in a cart");
}
}
return(
    <>
<Navbar/>
<div id="homeDis">
<section class="sectionCards">
<div class="cat">
<h1>Fasion</h1>
<div class="cardContainer">
{
ItemArr.map((val,index)=>{
return(
  <>
  <Card AddToCart={addToCart} dltIcon={delet} itemObj={val}/>
  </>
)
})
}
</div>
</div>
</section>
{
added===true?
<div class="alert alert-success ItemAddedMsg" role="alert">
<b>{count}</b> Items Added To Cart <b style={{cursor:"pointer",textDecoration:"underline"}} onClick={()=>{
setCartDisplay(true);
delet=true;
document.getElementById('homeDis').style.display='none';
}}>Click here to check the cart</b>
</div>:
<div class="d-none" role="alert">
Item Added To Cart <b>Click here to check the cart</b>
</div>
}
</div>
<Cart dis={cartDisplay} arrOfItem={itemArr} dltIconAtCart={delet} deleteItemFromArr={setItemArr}/>
</>
)
}
export default Home