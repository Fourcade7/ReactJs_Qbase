import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";



function RegisterForm() {
  return (
    <Form data-bs-theme="dark">
      
       <Form.Label className="text-secondary mb-2">Регистратсия</Form.Label>

       <Form.Control className="border-secondary my-2" type="text" placeholder="Имя" />
       <Form.Control className="border-secondary my-2" type="text" placeholder="Фамилия" />
       <Form.Control className="border-secondary my-1" type="tel" placeholder="+998" />

        <div className="d-flex align-items-center justify-content-end">
            <Form.Text className="text-secondary">
            Мы никогда не передадим ваш номер кому-либо еще.
        </Form.Text>
        </div>
      
     

      <Form.Label className="text-secondary">Пароль</Form.Label>
       <InputGroup className="">
        <Form.Control className="border-secondary" type="password" placeholder="************" />
        <Button variant="outline-primary">
              <img src="/src/assets/hide.png" width={20} height={20} className="rounded-circle me-1"></img>
        </Button>
      </InputGroup>
      <Form.Label className="text-secondary mt-2">Подтвердите пароль</Form.Label>
       <InputGroup className="">
        <Form.Control className="border-secondary" type="password" placeholder="************" />
        <Button variant="outline-primary">
              <img src="/src/assets/hide.png" width={20} height={20} className="rounded-circle me-1"></img>
        </Button>
      </InputGroup>

      <div className="d-flex align-items-baseline justify-content-end my-2">
        <div><Form.Text className="text-secondary m-0 me-2 p-0">Запомнить меня</Form.Text></div>
        <div><Form.Check className="text-secondary p-0 m-0" type="checkbox" /></div>
      </div>
     <div className='row gx-2'>
       <div className="col d-grid">
        <Button as={Link} to="/" variant="btn btn-outline-primary" type="submit">Логин</Button>
        </div>
       <div className="col d-grid">
        <button className="btn btn-primary" type="submit">Регистратсия</button>
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
                <img src="/src/assets/qbaselogo.jpg" width={40} height={40} className="rounded-circle border border-dark  me-1"></img>
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

function RegisterScreen(){
    return(
        <div className="container-fluid bg-dark vh-100">
            <NavbarScreen></NavbarScreen>
            <div className="container-fluid bg-dark h-75 d-flex align-items-center justify-content-center">
            <div className="col-4">
                 <RegisterForm></RegisterForm>
            </div>
            </div>
        </div>
    )
}


export default RegisterScreen;