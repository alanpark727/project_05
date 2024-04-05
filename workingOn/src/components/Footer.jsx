import React from 'react'
import '../scss/Footer.scss'


const Footer = () => {
  return (
    <div className='wrap'>
      <ul className='upper_menu'>
        <li><a href="#none">이용약관</a></li>
        <li><a href="#none">개인정보취급방침</a></li>
        <li><a href="#none">이용안내</a></li>
        <li><a href="#none">이벤트</a></li>
        <li><a href="#none">SKT CS T1</a></li>
      </ul>
      <ul className='lower_menu'>
        <li>회사명 : 에스케이텔레콤씨에스티원 주식회사</li>
        <li>CEO : Joseph Patrick Marsh</li>
        <li>주소 : 서울특별시 강남구 선릉로 627 &#40;논현동&#41;</li>
        <li>사업자번호 : 614-81-05875</li>
        <li>통신판매업 신고번호 : 제 2021-서울강남-02732호</li>
        <li>E-mail : shop@t1.gg</li>
      </ul>
      <p className='copy'>Copyright © 2023, T1 Shop All right reserved 2023</p>
      <ul className='sns'>
        <li><a href="https://www.facebook.com/t1.esports.gg" className='facebook'>
          <img src="/img/facebook.png" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/T1">
            <img src="/img/twitter.png" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/t1shopna/">
            <img src="/img/instagram.png" alt="insta" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/sktt1">
            <img src="/img/youtube.png" alt="youtube" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@t1">
            <img src="/img/tik-tok.png" alt="tiktok" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer