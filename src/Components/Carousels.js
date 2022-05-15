import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import NaviBar from './NaviBar';
function Carousels() {
  return (
    <>
      <Carousel>

      <NaviBar />
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 400}}
            src="https://funart.pro/uploads/posts/2021-04/1618513429_3-funart_pro-p-oboi-fon-fon-goluboi-gradient-3.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2>Поддержка</h2>
            <p>Проект поддержан Российским научным фондом (проект № 18-71-10044), Российским фондом фундаментальных исследований (проекты № 18-31-20019, № 21-51-10003) и Правительством города Новосибирска .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{height: 400}}
            src="https://funart.pro/uploads/posts/2021-04/1618513429_3-funart_pro-p-oboi-fon-fon-goluboi-gradient-3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>???</h2>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default Carousels;
