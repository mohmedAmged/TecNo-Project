
import { useDispatch, useSelector } from "react-redux";
import "./CartInfo.css";
import { useEffect, useState } from "react";
import { removeAll } from "../../Store/Slices/CartSlice";
import Swal from "sweetalert2";

export default function CartInfo() {
  const totalItems = useSelector(state => state.cartReducer.totalItems);
  const totalPrice = useSelector(state => state.cartReducer.totalPrice);
  const [checkOut,setCheckOut] = useState({});
  const [currentUser , setCurrentUser] = useState({});
  const [ourProducts,setOurProducts] = useState([]);
  const currUserId = JSON.parse(localStorage.getItem("user_data"));
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch(`https://tecno-api.onrender.com/users/${currUserId}`).then(res=> res.json()).then(data=> setCurrentUser(data));
    fetch(`https://tecno-api.onrender.com/products`).then(res=> res.json()).then(data => setOurProducts(data));
  },[currUserId,totalPrice,totalItems]);


  const handleCheckOut = () => {
    ourProducts?.map((Product)=>{
      currentUser?.cart?.map((cartItem)=>{
        if(Product.id === cartItem.id){
          (async()=>{
            await fetch('https://tecno-api.onrender.com/products/'+ cartItem?.id, {
              method: 'PATCH',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({stock: (Product?.stock - cartItem?.quantity)})
            });
          })();
        }
      });
    });
    const userName = currentUser.fullName;
    const proccessId = Math.ceil(Math.random() * 10000000000);
    dispatch(removeAll());
    Swal.fire({
        icon: 'success',
        title: `User Name : ${userName}`,
        html: `Proccess Number: ${proccessId}`
    });
  };

  return (
    <div className="price-cont gap-2 d-flex align-items-end flex-column fw-bolder text-center w-100" >
      <div className="w-25">
        <div className="d-flex justify-content-between align-items-center text-start">
          <div>
            <div>Total</div>
            <div><span className="items-num"></span>{totalItems} Items</div>
          </div>
          <div className="total-price fs-3">$ {totalPrice} </div>
        </div>
        <button className="checkoutBtn mx-auto mt-3 w-100" onClick={handleCheckOut} >Checkout</button>
      </div>
    </div>
  )
}
