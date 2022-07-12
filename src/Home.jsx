import './index.css';
import Card from './Card';
import { useState } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import ItemArr from './ItemArr';
var itemArr=[];
var delet=false;
var Home=()=>{
const [added,setAdded]=useState(false);
const [count,setCount]=useState(0);
const [cartDisplay,setCartDisplay]=useState(false);

var addToCart=(itemInCart)=>{
setAdded(true);
itemArr.push(itemInCart);
setCount((prev)=>{
return ++prev;
})
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
<Cart dis={cartDisplay} arrOfItem={itemArr} dltIconAtCart={delet}/>
</>
)
}
export default Home