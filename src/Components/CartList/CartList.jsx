import { useSelector } from "react-redux";
import CartProduct from "../CartProduct/CartProduct";
import "./CartList.css";
import { Table } from "react-bootstrap";

export default function CartList() {
  const cartItems = useSelector((state) => state.cartReducer.cart);

  return (
    <>
      <Table responsive className="cart w-100">
        <tbody>
          {cartItems?.map((el) => {
            return <CartProduct key={el?.id} product={el} />
          })}
        </tbody>
      </Table>
    </>
  );
}
