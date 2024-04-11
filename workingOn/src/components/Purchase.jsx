import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Purchase = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <div className='cont_inner'>
            <h5>상품결제정보</h5>
            <p>고액결제의 경우 안전을 위해 가드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문 등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.</p>
          </div>
        </Col>
        <Col md={6}>
        <div className='cont_inner'>
            <h5>배송정보</h5>
            <ul style={{padding:'0px'}}>
              <li>배송 방법 : 택배</li>
              <li>배송 지역 : 전국지역</li>
              <li>배송 비용 : 3,000원</li>
              <li>배송 기간 : 3일 ~ 7일</li>
              <li>배송 안내 : -산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다. <br />고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div className='cont_inner'>
            <h5>교환 및 반품정보</h5>
            <p>
              <strong>교환 및 반품 주소</strong>
              <p>- 서울특별시 강남구 선릉로 627 &#40;논현동&#41; SK CS T1</p><br /><br />
              <strong>교환 및 반품이 가능한 경우</strong>
              <p>- 상품을 공급 받으신 날로부터 7일 이내 단, 가전제품의 경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.</p>
              <p>- 공급받으신 상품 및 용역의 내용이 표시,광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터 3일 이내, 그 사실을 알게 된 날로부터 30일 이내</p><br /><br />
              <strong>교환 및 반품이 불가능한 경우</strong>
              <p>- 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외</p>
              <p>- 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우<br />
              &#40;예 : 가전제품, 식품, 음반 등, 단 액정화면이 부착된 노트북, LCD모니터, 디지털 카메라 등의 불량화소에 따른 반품/교환은 제조사 기준에 따릅니다.&#41;</p>
              <p>- 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 단, 화장품등의 경우 시용제품을 제공한 경우에 한 합니다.</p>
              <p>- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우</p>
              <p>- 복제가 가능한 상품등의 포장을 훼손한 경우<br />
              &#40;자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기 바랍니다.&#41;</p><br /><br />
              <p>※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야 합니다. <br />
              &#40;색상 교환, 사이즈 교환 등 포함&#41;</p>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Purchase