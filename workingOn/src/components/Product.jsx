import React from 'react'
import {Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../scss/App.scss';


const Product = (props) => {
    const {newItem, i, no, j} = props;
    const navigate = useNavigate();
    const navigateTarget = ['/newarrival','/worlds2023','/uniforms']
    const likeNumber = [3,1,10,23,0,0,5,10,5,2,3,5,10,2,24,5,7,8,5,6]

  return (
    <Col md={3} onClick={()=>{navigate(navigateTarget[j]+`/detail/${no[i]}`)}} className='text-center mb-3 new-item' style={{position:'relative'}}>
        <div className='text-center product-hover-like'>
          <button>LIKE <span>{likeNumber[i]}</span></button>
        </div>
        <img src={newItem.imgUrl} width='80%' alt="newItem" />
        <h4 style={{fontSize:'1.1rem', fontWeight:'600'}}>{newItem.title}</h4>
        <hr />
        <p style={{fontSize:'1rem', fontWeight:'700'}}>{newItem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
        <div className='text-center product-hover-btn'>
          <button><img src="/img/cart.png" alt="" /></button>
          <button><img src="/img/search.png" alt="" /></button>
          <button><img src="/img/tabs.png" alt="" /></button>
        </div>
    </Col>
  )
}

export default Product