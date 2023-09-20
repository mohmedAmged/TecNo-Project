import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartData } from '../../Store/Slices/CartSlice';
import HomeSectionForEveryPage from '../../Sections/EveryPageHomeSection/HomeSectionForEveryPage';
import { login } from '../../Store/Slices/AuthSlice';
import Swal from 'sweetalert2';
import { scrollingToTop } from '../../Functions/ScrollingToTop';


export default function Login() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    fetch('https://tecno-api.onrender.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      setLoading(false);
  }, [loading]);

  function handleLogin(){
    const obj = users.find(user => user?.email == formData.email && user?.password == formData.password);
    if(obj){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1000
      });
      dispatch(login(obj.id))
      dispatch(getCartData(obj.id));
      navigate("/products");
      scrollingToTop();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed To Login',
      });
    }
  }

  function submitHandler(e) {
    e.preventDefault(); 
    handleLogin(formData);
  }

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <HomeSectionForEveryPage pTitle="Login" pName="Login" />
          <Container className='my-5'>
            <Row>
              <Col lg={6} className="mx-auto loginForm">
                <h2 className='text-center fs-1 mb-4 fw-bold'>LOGIN</h2>
                <Form className='user__form' onSubmit={submitHandler}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={changeHandler} />
                  </Form.Group>
    
                  <Form.Group className='mb-4' controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={changeHandler} />
                  </Form.Group>
                  <div className="mb-4">
                    Don{"'"}t Have and account? <Link to="/register" onClick={()=> scrollingToTop()}>Create new account</Link>
                  </div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me!" />
                    </Form.Group>
                    <Button className='px-4 submitBtn' type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      }
    </>
  )
}
