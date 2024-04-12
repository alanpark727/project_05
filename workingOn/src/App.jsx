import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {Routes, Route, Navigate, useNavigate, Outlet} from 'react-router-dom';
import Home from './routes/Home';
import Footer from './components/Footer';
import data0 from './data_new';
import { useState } from 'react';
import Newarrival from './routes/Newarrival';
import Detail from './routes/Detail';
import Worlds from './routes/Worlds';
import data3 from './data_worlds';
import data5 from './data_uniform';
import Uniform from './routes/Uniform';


function App() {
  const [newItem,setNewItem] = useState(data0)
  const [worlds,setWorlds] = useState(data3)
  const [uniform,setUniform] = useState(data5)
  const [no, setNo] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
  const navigate = useNavigate();


  return (
    <div className="App">
      <Navbar bg="black" data-bs-theme="dark" sticky='top'>
      <Container>
        <Navbar.Brand style={{cursor:'pointer'}} className='logo' onClick={()=>{navigate('/')}}>
          <img src="/img/T1_Logo.png" alt="" width={'100%'}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="APPAREL" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{navigate('/newarrival/')}}>NEW ARRIVAL</NavDropdown.Item>
              <NavDropdown.Item>TOPS & SHIRTS</NavDropdown.Item>
              <NavDropdown.Item>HOODIE & SWEATSHIRTS</NavDropdown.Item>
              <NavDropdown.Item>PANTS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={()=>{navigate('/uniforms/')}}>UNIFORM</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/worlds2023/')}}>WORLDS</Nav.Link>
            <NavDropdown title="COLLECTIBLE" id="collapsible-nav-dropdown">
              <NavDropdown.Item>PINS</NavDropdown.Item>
              <NavDropdown.Item>KEYCHAINS</NavDropdown.Item>
              <NavDropdown.Item>DRINKWARE</NavDropdown.Item>
              <NavDropdown.Item>STATIONERY</NavDropdown.Item>
              <NavDropdown.Item>POSTERS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={()=>{navigate('/collaboration/')}}>COLLABORATION</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/sale/')}}>SALE</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#acount">Acount</Nav.Link>
            <Nav.Link href="#search">search</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home newItem={newItem} setNewItem={setNewItem} no={no} setNo={setNo} />} />
        <Route path='*' element={<div><h2>404</h2>Page Not Found</div>} />
        <Route path='/newarrival/' element={<div><Newarrival newItem={newItem} setNewItem={setNewItem} no={no} setNo={setNo}/></div>} />
        <Route path='/newarrival/detail/:id' element={<Detail newItem={newItem} />} />
        <Route path='/worlds2023/' element={<div><Worlds newItem={worlds} setNewItem={setWorlds} no={no} setNo={setNo} /></div>}/>
        <Route path='/worlds2023/detail/:id' element={<Detail newItem={worlds} />}/>
        <Route path='/uniforms/' element={<div><Uniform newItem={uniform} setNewItem={setUniform} no={no} setNo={setNo} /></div>} />
        <Route path='/uniforms/detail/:id' element={<Detail newItem={uniform} />}/>
      </Routes>

      <Footer  />
    </div>
  );
}

export default App;
