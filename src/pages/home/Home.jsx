import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { useState } from "react";

import "./Home.css"



function NavbarScreen(){
    return(
        <div className="">
           
             <Navbar bg="dark" data-bs-theme="dark">
            <div className="container-fluid">
            <div className="d-flex flex-row align-items-center">
                <img src="/src/assets/qbaselogo.jpg" width={40} height={40} className="rounded-circle border border-dark  me-1"></img>
                <Navbar.Brand href="#home">Qbase</Navbar.Brand>
            </div>
         
            <Nav className="ms-auto">
                <Nav.Link href="#home" className="fs-7">Логин</Nav.Link>
                <Nav.Link href="#features" className="fs-7">Регистратсия</Nav.Link>
                <Nav.Link href="#pricing" className="fs-7">Поддержка</Nav.Link>
            </Nav>
            </div>
            </Navbar>
           
      
     
        </div>
    )
}


function LeftContent() {
    const [activeIndex, setActiveIndex] = useState(0); // 0-index aktiv holatda bo'ladi

  const items = [
    { label: 'Друзья', icon: '/src/assets/friend2.png' },
    { label: 'Мои вечеринки', icon: '/src/assets/partywhite.png' },
    { label: 'Мониторинг', icon:"/src/assets/monitor.png" },
    { label: 'Настройки', icon:"/src/assets/setting.png" },
    { label: 'Кошелек', icon:"/src/assets/wallet.png" },
    { label: 'Поддерживать' , icon:"/src/assets/customer-support.png"},
  ];

  return (
    <div className="list-group border border-0 rounded-0 w-100">
      {items.map((item, index) => (
        <a
          href="#"
          key={index}
          className={`list-group-item list-group-item-action ${index === activeIndex ? 'active bg-primary' : 'border'}`}
          aria-current={index === activeIndex}
          onClick={(e) => {
            e.preventDefault();
            setActiveIndex(index);
          }}
        >
          <div className="d-flex align-items-center">
            {item.icon && (
              <img
                src={item.icon}
                width={20}
                height={20}
                className="me-2"
                alt={item.label}
              />
            )}
            <small>{item.label}</small>
          </div>
        </a>
      ))}
    </div>
  );
}
// style={{ backgroundColor: "#1e1e1e" }}

function RightContent() {
  return (
    <div class="border-start border-top border-bottom p-3  rounded-0 w-100">
       <div className="d-flex flex-column align-items-center justify-content-center">
           <img src="/src/assets/ghost.png" width={40} height={40} className="rounded-circle border border-dark  me-1"></img>
            <small className="text-secondary mt-2">Burxon</small>
            <small className="text-secondary">Biyjanov</small>
            <small className="text-secondary">+998973570498</small>
            <Button as={Link} to="/home" variant="outline-danger rounded-0 mt-3">Выход</Button>

       </div>
    </div>
  );
}


function CenterContent() {
  return (
    <div>
      
      <InputGroup className="mb-3">
        <Button variant="outline-primary rounded-0">
              <img src="/src/assets/search.png" width={20} height={20} className="rounded-circle me-1"></img>
        </Button>
        <Form.Control className="border-secondary rounded-0" type="text" placeholder="Поиск..." />
      </InputGroup>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Имя и Фамилия</th>
          <th>Телефон</th>
          <th>Церемония</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pr Aminov</td>
          <td>+998910984307</td>
          <td>Ден рождения</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Behzod Xudaybergenov</td>
          <td>+998973570498</td>
          <td>Свадба</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Burxon Pulmaker</td>
          <td>+998973570498</td>
          <td>Свадба</td>
        </tr>
      </tbody>
    </Table>
    </div>
   
  );
}


function HomeScreen(){
    return(
        <div data-bs-theme="dark" className="bg-dark vh-100">
            <NavbarScreen></NavbarScreen>
            
            <div className="container-fluid p-0">
                <div className="row g-0">
                 <div className="col col-2 m-0">
                    <LeftContent></LeftContent>
                 </div>
                  <div data-bs-spy="scroll" className="col col-8 border-1 border-secondary px-2">
                   
                    <CenterContent></CenterContent>
                 </div>
                  <div className="col col-2">
                    <RightContent></RightContent>
                 </div>
            </div>
            </div>
           
        </div>
    )
}


export default HomeScreen;