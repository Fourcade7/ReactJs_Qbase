import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";



function LoginForm() {
  return (
    <Form data-bs-theme="dark">
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Label className="text-secondary">Номер телефона</Form.Label>
        <Form.Control className="border-secondary rounded-0" type="tel" placeholder="+998" />
        <div className="d-flex align-items-center justify-content-end">
            <Form.Text className="text-secondary">
         Мы никогда не передадим ваш номер кому-либо еще.
        </Form.Text>
        </div>
      </Form.Group>
      
      <Form.Label className="text-secondary">Пароль</Form.Label>
       <InputGroup className="my-1">
        <Form.Control className="border-secondary rounded-0" type="password" placeholder="************" />
        <Button variant="outline-primary rounded-0">
              <img src="/src/assets/hide.png" width={20} height={20} className="rounded-circle me-1"></img>
        </Button>
      </InputGroup>

      <div className="d-flex align-items-baseline justify-content-end my-2">
        <div><Form.Text className="text-secondary m-0 me-2 p-0">Запомнить меня</Form.Text></div>
        <div><Form.Check className="text-secondary p-0 m-0" type="checkbox" /></div>
      </div>
     <div className='row gx-2'>
       <div className="col d-grid">
        <Button as={Link} to="/register" variant="btn btn-outline-primary rounded-0" type="submit">Регистратсия</Button>
        </div>
        <div className="col d-grid">
        <Button as={Link} to="/wellcome" variant="btn btn-primary rounded-0" type="submit">Логин</Button>
        </div>
      </div>
    </Form>
  );
}

function NavbarScreen(){
    return(
        <div className="container-sm w-50">
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <div className="d-flex flex-row align-items-center">
                <img src="/src/assets/qbaselogo.jpg" width={40} height={40} className="rounded-circle me-1"></img>
                <Navbar.Brand href="#home">Qbase</Navbar.Brand>
            </div>
         
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fs-7">Логин</Nav.Link>
            <Nav.Link href="#features" className="fs-7">Регистратсия</Nav.Link>
            <Nav.Link href="#pricing" className="fs-7">Поддержка</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
     
        </div>
    )
}

function LoginScreen(){
    return(
        <div className="container-fluid bg-dark vh-100">
            <NavbarScreen></NavbarScreen>
            <div className="container-fluid bg-dark h-75 d-flex align-items-center justify-content-center">
            <div className="col-4">
                 <LoginForm></LoginForm>
            </div>
            </div>
        </div>
    )
}


export default LoginScreen;