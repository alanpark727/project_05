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
import Cart from './routes/Cart';
import data4 from './data_sale';
import Login from './routes/Login';
import Razor from './routes/Razor';


function App() {
  const [newItem,setNewItem] = useState(data0)
  const [worlds,setWorlds] = useState(data3)
  const [uniform,setUniform] = useState(data5)
  const [sale,setSale] = useState(data4)
  const [no, setNo] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
  const [no2, setNo2] = useState([20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]);
  const [no3, setNo3] = useState([40,41,42,43,44,45,46,47,48,49,50,51,52,53])
  const [no4, setNo4] = useState([54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73])

  const navigate = useNavigate();


  return (
    <div className="App">
      <Navbar id='navbar' expand='lg' bg="black" data-bs-theme="dark" sticky='top' collapseOnSelect>
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
            <Nav.Link onClick={()=>{navigate('/collaboration/razor')}}>COLLABORATION</Nav.Link>
            <Nav.Link>SALE</Nav.Link>
          </Nav>
          <Nav id='user-nav'>
            <Nav.Link onClick={()=>{navigate('/login/')}}>Account</Nav.Link>
            <Nav.Link>Search</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart/')}}>
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
        <Route path='/worlds2023/' element={<div><Worlds newItem={worlds} setNewItem={setWorlds} no={no2} setNo={setNo2} /></div>}/>
        <Route path='/worlds2023/detail/:id' element={<Detail newItem={worlds} />}/>
        <Route path='/uniforms/' element={<div><Uniform newItem={uniform} setNewItem={setUniform} no={no3} setNo={setNo3} /></div>} />
        <Route path='/uniforms/detail/:id' element={<Detail newItem={uniform} />}/>
        <Route path='/login' element={<div><Login /></div>} />
        <Route path='/cart' element={<div><Cart /></div>} />
        <Route path='/collaboration/razor' element={<div><Razor /></div>} />
      </Routes>

      <Footer  />
    </div>
  );
}

export default App;
