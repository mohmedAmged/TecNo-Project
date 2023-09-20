import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./Filteration.css";

const Filteration = ({setProducts, setCurrPage ,getAllProducts}) => {
  const [brands, setBrands] = useState([]);
  const form = useRef();
  const [filter, setFilter] = useState({
    search: '',
    brand: '',
    min_price: '',
    max_price: ''
  });

  useEffect(() => {
    fetch('https://tecno-api.onrender.com/productsbrands')
      .then(res => res.json())
      .then(data => setBrands(data));
  }, []);

  function getFilteredData(filterQuery){
    fetch(`https://tecno-api.onrender.com/products?${filterQuery}`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }

  function changeHandler(e){
    const input = e.target;
    setFilter({
      ...filter,
      [input.name]: input.value,
    });
  }

  function submitHandler(e){
    e.preventDefault();
    let filterArr = [];
    if(filter.brand) filterArr.push('brand='+filter.brand);
    if(filter.min_price) filterArr.push('price_gte='+filter.min_price);
    if(filter.max_price) filterArr.push('price_lte='+filter.max_price);
    if(filter.search) filterArr.push('q='+filter.search);
    if(filterArr.length === 0) return;
    let filterQuery = filterArr.join('&');

    setCurrPage(1);
    getFilteredData(filterQuery);

    scrollTo({top: 460});
    setFilter({
      search: '',
      brand: '',
      min_price: '',
      max_price: ''
    });
  }

  function onResetHandler(){
    getAllProducts();
    scrollTo({top: 460});
    setCurrPage(1);
    setFilter({
      search: '',
      brand: '',
      min_price: '',
      max_price: ''
    });
  }

  return (
    <form onSubmit={submitHandler} ref={form} className="productFilteration" >
      <h4 className="text-center fs-3 fw-bold text-dark mb-4">Search in Products</h4>
      <div className="searchInputContainer">
        <label htmlFor="search" className="w-100">
          <input
          type="search"
          onChange={changeHandler}
          className="form-control searchInput w-100"
          placeholder="Search Products..."
          name="search"
          id="search"
          value={filter.search} />
        </label>
      </div>
      <div className="filterationContent">
        <div className="brandsContainer">
          <select
            value={filter.brand} 
            name='brand'
            onChange={changeHandler}
            >
              <option value="" disabled >Select Brand</option>
              {brands.map((ele, idx) => {
                return <option key={idx} value={ele}>{ele}</option>
              })}
          </select>
        </div>
        <div className="minPriceContainer">
          <input 
          className="form-control"
          value={filter.min_price} 
          name='min_price' 
          onChange={changeHandler} 
          type="number" 
          placeholder='Min_Price' />
        </div>
        <div className="maxPriceContainer">
          <input 
          className="form-control"
          value={filter.max_price} 
          name='max_price' 
          onChange={changeHandler} 
          type="number" 
          placeholder='Max_Price' />
        </div>
        <div className="filterationActionsContainer d-flex justify-content-around flex-wrap gap-3">
          <Button className="btnFilter" type='submit'>Filter</Button>
          <Button onClick={onResetHandler} className="btnReset">Reset</Button>
        </div>
      </div>
    </form>
  );
}

export default Filteration;
