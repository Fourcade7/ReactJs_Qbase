import { Button, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";
import "./Welcome.css"






function NavbarScreen(){
    return(
        <div className="p-2">
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

function WMain(){
    return(
        
        <div data-bs-theme="dark">
            
            <h1 className="text-white fw-bold text-center">Добро пожаловать в Qbase</h1>
            <h6 className="text-white fw-bold text-center">Здесь вы можете найти своих друзей и выполнить ряд действий с помощью Qbase.</h6>
          
            <div className="row g-3 mt-3">
                <div className="col">
                   <div className="col px-3 py-3 d-flex flex-column align-items-center justify-content-center border border-primary shadow-hover-primary">
                     <img src="/src/assets/moneyprimary.png" width={80} height={80} className="p-3 "></img>
                     <small className="text-info">Перевод денег</small>
                   </div>
                </div>
                <div className="col">
                    <div className="col px-3 py-3 d-flex flex-column align-items-center justify-content-center border border-danger shadow-hover-danger">
                     <img src="/src/assets/search-person.png" width={80} height={80} className="p-3 "></img>
                     <small className="text-danger">Поиск друзей</small>
                   </div>               
                </div>
                 <div className="col">
                    <div className="col px-3 py-3 d-flex flex-column align-items-center justify-content-center border border-warning shadow-hover-warning">
                     <img src="/src/assets/confettiwarning.png" width={80} height={80} className="p-3 "></img>
                     <small className="text-warning">Церемония</small>
                   </div>               
                </div>
                 <div className="col">
                    <div className="col px-3 py-3 d-flex flex-column align-items-center justify-content-center border border-success shadow-hover-success">
                     <img src="/src/assets/verifiedsuccess.png" width={80} height={80} className="p-3 "></img>
                     <small className="text-success">Безопасность</small>
                   </div>               
                </div>
            </div>

            <div className="col d-flex justify-content-center align-items-center mt-4">
                <div className="col-4 d-grid">
                    <Button as={Link} to="/home" variant="outline-secondary rounded-0">Начинать</Button>
                </div>
            </div>

               

        </div>
    )
}


function WellcomeScreen(){
    return(
        <div className="container-fluid bg-dark vh-100">
            <NavbarScreen></NavbarScreen>
            <div className="container-fluid bg-dark h-75 d-flex align-items-center justify-content-center">
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <WMain></WMain>
                </div>
            </div>
        </div>
    )
}


export default WellcomeScreen;