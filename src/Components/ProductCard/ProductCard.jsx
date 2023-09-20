import { Button, Card} from 'react-bootstrap'
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../Store/Slices/CartSlice';
import Swal from 'sweetalert2';
import { scrollingToTop } from '../../Functions/ScrollingToTop';

export default function ProductCard({product}) {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const dispatch = useDispatch();

  function handleAddtoCart(){
    if(!isAuth) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'To Add To Cart You Should Login',
      });
    }else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      })
      dispatch(addItem(product));
    }
  }

  return (
    <>
        <Card className='h-100 shopCard'>
          {
            product.discountPercentage 
            &&
            <div className="discountPercentage position-absolute">
              {product.discountPercentage}%
            </div>
          }
          <Card.Img className='card__img' variant="top" src={product.thumbnail} />
          <Card.Body className='d-flex flex-column justify-content-between'>
            <div className='mb-3'>
              <Card.Title><Link to={'/products/'+product.id} onClick={()=> scrollingToTop()} className='text-decoration-none text-black'>{product.title}</Link></Card.Title>
              {
                product.discountPercentage ?
                <Card.Text className='shopCardText'>
                    ${product.price}
                  <del className='ms-3'>
                    ${+product.price + Math.floor(+product.price * (+product.discountPercentage / 100))}
                  </del>
                </Card.Text>
                :
                <Card.Text className='shopCardText'>
                  ${+product.price}
                </Card.Text>
              }
            </div>
            <div className='d-flex gap-3'>
              <Button className='pinkBtn w-100' onClick={handleAddtoCart}>Add to cart</Button>
            </div>
          </Card.Body>
        </Card>
    </>
  )
}
