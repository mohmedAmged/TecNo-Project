import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../../Store/Slices/CartSlice';
import "./CartProduct.css";
import Swal from 'sweetalert2';

export default function Cartproduct({product}) {
  const dispatch = useDispatch();

  function handleRemoveproduct(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5c0696',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeItem(product.id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }

  function handleIncreaseQuantity(){
    if(product.quantity < product.stock){
      dispatch(increaseQuantity(product.id));
    }
  }

  function handleDecreaseQuantity(){
    dispatch(decreaseQuantity(product.id));
  }

  return (
    <tr className="cart-product d-flex align-items-center justify-content-between">
    <td>
      <div className="d-flex gap-3 align-items-center product__img">
        <img className="cart-product-img p-2" src={product.thumbnail} alt='' />
        <h5>{product?.title}</h5>
      </div>
    </td>

    <td>
      <div className="cart-product-amount">
        <span className="change-amount change-amount-inc" onClick={handleIncreaseQuantity}>+</span>
        <span className="quantity">{product.quantity}</span>
        <span className="change-amount change-amount-dec" onClick={handleDecreaseQuantity}>-</span>
      </div>
    </td>

    <td>
      <div className="mb-2 d-flex flex-column text-end justify-content-end align-items-end">
        <span className="fw-bolder fs-4 product__price">${product.price * product.quantity}</span>
        <span className="remove-product" onClick={handleRemoveproduct}>Remove</span>
      </div>
    </td>
  </tr>
  )
}
