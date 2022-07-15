import Card from "./Card";
import './index.css'
function Cart(props){
var dltCartItem=(idOfItem)=>{
props.deleteItemFromArr((prev)=>{
return (
    prev.filter((val)=>{
      return val.id!=idOfItem
    })
)
})
}
if(props.dis===true){
    return(
        <>
        <div class="cat">
        <h1>Cart</h1>
        <div class="cardContainer"> 
        <div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap"}}>
       {
           props.arrOfItem.map((val)=>{
             return(
                 <>
                <Card dltIcon={props.dltIconAtCart} itemObj={val} deleteFun={dltCartItem}/>
                 </>
             ) 
           })
       } 
        </div>
        </div>
        </div>
        </>
    )
}
}
export default Cart