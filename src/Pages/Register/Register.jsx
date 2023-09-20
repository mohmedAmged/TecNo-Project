import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
  },[loading]);

  function handleAddUser(data){
    fetch('https://tecno-api.onrender.com/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    navigate('/login');
  }

  function submitHandler(e) {
    e.preventDefault();
    if (
      formData.fullName != "" &&
      formData.address != "" &&
      formData.email != "" &&
      formData.password != "" &&
      formData.password === formData.confirmPassword
    ) {
      delete formData.confirmPassword;
      handleAddUser(formData);
      scrollingToTop();
    }
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
          <HomeSectionForEveryPage pTitle="Register" pName="Register" />
          <Container className="my-5">
            <Row>
              <Col lg={6} className="mx-auto registerForm">
                <h2 className="text-center fs-1 mb-4 fw-bold">Register</h2>
                <Form className="user__form" onSubmit={submitHandler}>
                  <Form.Group className="mb-4" controlId="formFullName">
                    <Form.Label>Full Name: </Form.Label>
                    <Form.Control
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      onChange={changeHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formAddress">
                    <Form.Label>Address: </Form.Label>
                    <Form.Control
                      name="address"
                      type="text"
                      placeholder="Enter your Address"
                      onChange={changeHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      onChange={changeHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={changeHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={changeHandler}
                    />
                  </Form.Group>
                  <div className="mb-4">
                    Already have an account? <Link to="/login" onClick={()=> scrollingToTop()}>Login now</Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <Button className="px-4 registerBtn" type="submit">
                      Register
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      }
    </>
  );
}
