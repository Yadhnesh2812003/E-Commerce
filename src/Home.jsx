import './index.css';
import Card from './Card';
import { useState } from 'react';
import Cart from './Cart';
var itemArr=[];
var delet=false;
var Home=()=>{
const [added,setAdded]=useState(false);
const [count,setCount]=useState(0);
const [cartDisplay,setCartDisplay]=useState(false);
var addToCart=()=>{
setAdded(true);
itemArr.push();
setCount((prev)=>{
return ++prev;
})
itemArr.push(count);
}
return(
    <>
    <header class="head">
    <h1>ShopKaro</h1>
    <ul class="nav">
    <li class="active">Home</li>
    <li>Search</li>
    <li>Shop</li>
    <li>About</li>
    </ul>
  <button>Sign In</button>
  </header>
  <div id="homeDis">
  <section class="sectionCards">
  
  <div class="cat">
  <h1>Fasion</h1>
  <div class="cardContainer">
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  </div>
  </div>
  
  <div class="cat">
  <h1>Electronic</h1>
  <div class="cardContainer">
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  </div>
  </div>

  <div class="cat">
  <h1>Jwellery</h1>
  <div class="cardContainer">
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
  <Card AddToCart={addToCart} dltIcon={delet}/>
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