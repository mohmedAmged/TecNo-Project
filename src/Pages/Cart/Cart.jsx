import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import CartInfo from "../../Components/CartInfo/CartInfo";
import { removeAll } from "../../Store/Slices/CartSlice";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import { Col, Container, Row } from "react-bootstrap";
import Swal from 'sweetalert2';
import CartList from "../../Components/CartList/CartList";
import { useEffect, useState } from "react";

export default function Cart() {
  const {cart: cartItems} = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
  },[loading]);

  function handleRemoveAll(){
    if(cartItems?.length === 0) {
      return ;
    }else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#5c0696',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeAll());
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  }


  return (
    <>
      <HomeSectionForEveryPage pTitle="Cart" pName="Cart" />
      {
        (loading) ?
          <div className="loaderContainer">
            <div className="loader"></div>
          </div> 
          :
          <>
            <div className="theCart">
              <Container>
                <Row>
                  <Col lg={12}>
                    <div className="cart-cont mt-5">
                      <div className="cart-header d-flex justify-content-between align-items-center mb-4">
                        <h5 className="fw-bolder">Shopping Cart</h5>
                        <span className="remove-all-products" onClick={handleRemoveAll}>Remove All</span>
                      </div>
                      {cartItems?.length > 0 ? (
                        <>
                          <CartList />
                          <CartInfo />
                        </>
                      ) : (
                        <h1 className="text-center mt-5">Cart is empty</h1>
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
      }
    </>
  );
}
