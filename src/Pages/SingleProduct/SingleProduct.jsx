import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleProduct.css';
import { Button, Col, Container, Row } from "react-bootstrap";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Swal from "sweetalert2";
import { addItem } from "../../Store/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SingleProduct() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [related,setRelated] = useState([]);
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://tecno-api.onrender.com/products/'+id);
      const data = await res.json();
      setProduct(data);
    })();
  }, [id]);

  useEffect(()=>{
    (async()=>{
      const res = await fetch("https://tecno-api.onrender.com/products");
      const data = await res.json();
      setRelated(data.filter(el =>( el?.brand == product?.brand) && (el?.id != product?.id)));
    })();
    setLoading(false);
  },[product,loading]);

  function handleIncreaseQuantity(){
    setQuantity(prev => prev + 1);
  }

  function handleDecreaseQuantity(){
    setQuantity(prev => {
      if(prev == 1) return prev;

      return prev - 1;
    });
  }

  function handleQantityChange(e){
    const val = e.target.value;
    if(val < 1){
      setQuantity(1);
    } else {
      setQuantity(val)
    }
  }

  return (
    <>
      {
        loading ? 
        <div className="loaderContainer">
          <div className="loader"></div>
        </div> 
        :
        <>
          <HomeSectionForEveryPage pTitle="Product Details" pName={product.title} />
          <Container className="my-5 singleProductSection">
            <h2 className="singleProductHead text-center fw-bolder fs-1 mb-5">Product Details</h2>
            <Row className="align-items-center mb-5">
              <Col md={6} className="single__product-img mb-4">
                <img className="w-100" src={product.thumbnail} alt="" />
              </Col>
              <Col md={6} className="single__product-text">
                  <h3 className="mb-4 fw-bolder">{product.title}</h3>
                  <p><span className="fw-bold mb-3">Brand: </span>{product.brand}</p>
                  <p><span className="fw-bold mb-3">Price: </span>
                  {
                    product?.discountPercentage ?
                      <>
                        ${product.price}
                        <del className='ms-3'>
                          ${+product?.price + Math.floor(+product?.price * (+product?.discountPercentage / 100))}
                        </del>
                      </>
                    :
                    <>
                      ${+product.price}
                    </>
                  }
                  </p>
                  <p><span className="fw-bold mb-3">Category: </span>{product.category}</p>
                  <div className="d-block d-md-flex gap-4 mb-4 align-items-center">
                    <div className="single__product-quantity d-flex border">
                      <button className="single__product-quantity-btn border-0 outline-0" onClick={handleIncreaseQuantity}>+</button>
                      <input onChange={handleQantityChange} value={quantity} className="border-0 outline-0" />
                      <button className="single__product-quantity-btn border-0 outline-0" onClick={handleDecreaseQuantity}>-</button>
                    </div>
                    <Button className="single__product-add-to-cart" onClick={()=>{
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
                            dispatch(addItem({...product,quantity}));
                          }
                    }}>Add to cart</Button>
                  </div>
                  <div>
                    <h4 className="fw-bolder mb-4 mt-4">More Details: </h4>
                    <p>{product.description}</p>
                  </div>
                </Col>
            </Row>
          </Container>
          <Container className="relatedContainer">
            <Row>
              {related?.map(rel=> {
                return (
                  <Col lg={4} key={rel?.id} md={6} sm={6} className='mb-4 productColumn'>
                    <ProductCard product={rel} />
                  </Col>
                )
              })}
            </Row>
          </Container>
        </>
      }
    </>
  )
}
