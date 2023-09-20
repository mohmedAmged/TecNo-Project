import { Col, Row } from 'react-bootstrap';
import PaginationButton from '../paginationButton/PaginationButton';
import ProductCard from '../ProductCard/ProductCard';
const PRODUCTS_PER_PAGE = 9;

export default function ProductsList(props) {
  const pagesNum = Math.ceil(props.products.length / PRODUCTS_PER_PAGE);

  let paginationElements = [];
  for(let i = 0; i < pagesNum; i++){
    paginationElements.push(<PaginationButton setCurrPage={props.setCurrPage} currPage={props.currPage} key={i} text={i + 1} />)
  }

  const start = (props.currPage - 1) * PRODUCTS_PER_PAGE;
  const end = (props.currPage * PRODUCTS_PER_PAGE) - 1;

  return (
    <div>
      {
        props.products.length > 0 ? 
          <>
            <Row>
                {
                props.products.slice(start, end + 1).map((product) => {
                  return (
                      (product?.stock !== 0) &&
                      <Col lg={4} key={product.id} md={6} sm={6} className='mb-4 productColumn'>
                        <ProductCard product={product}/>
                      </Col>
                  )
                })
              }
              <div className='d-flex justify-content-center gap-2'>
                {
                  paginationElements
                }
              </div>
            </Row>
          </>
        :
        <h2 className='text-center'>No Products Found</h2>
      }
    </div>
  );
}
