import Card from "./Card";
import './index.css'
function Cart(props){
if(props.dis===true){
console.log(props.arrOfItem);
    return(
        <>
        <div class="cat">
        <h1>Cart</h1>
        <div class="cardContainer"> 
        <div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap"}}>
       {
           props.arrOfItem.map(()=>{
             return(
                 <>
                <Card dltIcon={props.dltIconAtCart}/>
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