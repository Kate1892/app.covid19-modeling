import React from "react";
import  Carousels from './Components/Carousels';
import {Container, Card, CardGroup, Image, Row, Col, ListGroup, NavLink, Button} from 'react-bootstrap';
import { BsFillTelephoneFill, BsFillEnvelopeFill, BsFillGeoAltFill} from "react-icons/bs";
import NavBar from './Components/NavBar';
import NaviBarv2 from './Components/NaviBarv2';
import NaviBar from './Components/NaviBar';
import Footer from './Components/Footer'


export const Main= () => (
      <>
      <Card  border="light" style={{
      backgroundImage: `url("https://ega.ee/wp-content/uploads/2020/08/corona_1.jpg")`,
      height:'680px', //730 Для офиса

    }}>
      <NaviBar />


      <div className="my-auto" style={{ "margin-left": "6rem"}}>

      <h1 className="text-white" ><b>Математическое моделирование</b></h1>
      <h1 className="text-white"><b>распространения инфекционных заболеваний</b></h1>
      <div className="text-white"><i>Суперкомпьютерный анализ, математическое моделирование и </i></div>
      <div className="text-white "><i>построение сценариев социально-экономического развития</i></div>
      <div className="text-white"><i>Новосибирской области в условиях пандемии COVID-19</i></div>

      <div><Button href="/modeling" className="text-white my-3 py-2" variant="info" size="sm">
            <div style={{fontSize: 16}}>Перейти к моделированию</div>
          </Button></div>
      </div>
      <Row className="my-auto" style={{
              width: "100%" }}>
      <Col xs= {12} md={6} lg={6}>
      </Col>
      <Col xs= {12} md={6} lg={6}>
      <div style={{"margin-right": "6rem" }}>
      <div align="right" className="text-white my-5"><i><h6>Проект поддержан Российским научным фондом (проект № 18-71-10044), Российским фондом фундаментальных исследований (проекты № 18-31-20019, № 21-51-10003) и Правительством города Новосибирска.</h6></i></div>
      </div>
      </Col>
      </Row>

 </Card>
        <Container >
            <div>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h3 className="my-1">Команда</h3> </Card.Title>
          </Card>
          <Container  >
            <Row xs={1} md={2} className="justify-content-md-center" style={{
                    width: "100%" }}>
              <Col xs= {20} md={6} lg={4} className="my-1">
                <Card border="light" style={{height: '15rem'}} className="mx-auto" >
                <Container style={{ width: '10rem' }, {height: '10rem'}} className="my-1 text-center">
                  <Image variant="bottom"
                  src="https://covid19-modeling.ru/wp-content/uploads/2020/11/Krivorotko.png"
                  roundedCircle
                  fluid
                  style={{ maxWidth: '9rem' } }
                  />
                </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Криворотько Ольга</Card.Title>
                    <Card.Text className="text-center">
                      к.ф.-м.н., c.н.с. ИВМиМГ СО РАН
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs= {20} md={6} lg={4} className="my-1">
                <Card border="light" style={{height: '15rem'}} className="mx-auto">
                <Container style={{ width: '10rem' }, {height: '10rem'}}  className="my-1 text-center">
                <Image variant="bottom"
                src="https://covid19-modeling.ru/wp-content/uploads/2022/02/Zyatkov1.png"
                roundedCircle
                fluid
                style={{ maxWidth: '9rem' } }
                />
                </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Зятьков Николай</Card.Title>
                    <Card.Text className="text-center">
                      к.т.н., м.н.с. ИВМиМГ СО РАН
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs= {20} md={6} lg={4} className="my-1">
                <Card border="light" style={{height: '15rem'}} className="mx-auto">
                <Container style={{ width: '10rem' }, {height: '10rem'}}  className="my-1 text-center">
                <Image variant="bottom"
                src="https://covid19-modeling.ru/wp-content/uploads/2020/11/Zvonareva.png"
                roundedCircle
                fluid
                style={{ maxWidth: '9rem' } }
                />
                </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Звонарева Татьяна</Card.Title>
                    <Card.Text className="text-center">
                      аспирант НГУ, инженер ИВМиМГ СО РАН
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs= {20} md={6} lg={4} className="my-1">
                <Card border="light" style={{height: '15rem'}} className="mx-auto" >
                <Container style={{ width: '10rem' }, {height: '10rem'}}  className="my-1 text-center">
                <Image variant="bottom"
                src="https://covid19-modeling.ru/wp-content/uploads/2020/11/Sosnovskaya.png"
                roundedCircle
                fluid
                style={{ maxWidth: '9rem' } }
                />
                </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Сосновская Мария</Card.Title>
                    <Card.Text className="text-center">
                      инженер ЛМСИИММЕ НГУ
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs= {20} md={6} lg={4} className="my-1">
                <Card border="light" style={{height: '15rem'}} className="mx-auto">
                <Container style={{ width: '10rem' }, {height: '10rem'}}  className="my-1 text-center">
                <Image variant="bottom"
                src="https://covid19-modeling.ru/wp-content/uploads/2020/11/Neverov.png"
                roundedCircle
                fluid
                style={{ maxWidth: '9rem' } }
                />
                </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Неверов Андрей</Card.Title>
                    <Card.Text className="text-center">
                      магистрант НГУ, инженер ИВМиМГ СО РАН
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs= {20} md={6} lg={4} className="my-1">
                <Card border="light" style={{height: '15rem'}} className="mx-auto">
                  <Container style={{ width: '10rem' }, {height: '10rem'}}  className="my-1 text-center">
                  <Image variant="bottom"
                  src="https://covid19-modeling.ru/wp-content/uploads/2022/02/Petrakova1.jpg"
                  roundedCircle
                  fluid
                  style={{ maxWidth: '9rem' } }
                  />
                  </Container>
                  <Card.Body>
                    <Card.Title className="text-center">Петракова Виктория</Card.Title>
                    <Card.Text className="text-center">
                      к.ф.-м.н., м.н.с. ИВМ СО РАН
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          </div>


            <h3 className="text-center text-secondary">Наши контакты</h3>

          <Card className="text-center bg-secondary text-white my-3">
          <Card.Body>
            <Row className="justify-content-md-center" style={{
                    width: "100%" }}>
              <Col xs= {6} md={4}>
              <Container  className="my-3">
              < BsFillGeoAltFill size={25} className="my-3"/>
                <h5 className="text-center"> Адрес</h5>
              </Container>
                <p className="text-center"> ул.Лавреньтева 6, ком.2-431,
                 ИВМиМГ СО РАН, г.Новосибирск </p>
              </Col>
              <Col xs= {6} md={4}>
              <Container  className="my-3">
              <BsFillTelephoneFill size={25} className="my-3"/>
                <h5 className="text-center"> Телефон</h5>
                </Container>
                <p className="text-center"> +7 (383) 330-84-60 </p>
              </Col>
              <Col xs= {6} md={4}>
              <Container  className="my-3">
              <BsFillEnvelopeFill size={25} className="my-3"/>
                <h5 className="text-center"> Email</h5>
                </Container>
                <p className="text-center"> info@covid19-modeling.ru </p>
              </Col>
            </Row>
          </Card.Body>
          </Card>

          <h3 className="text-center my-3 text-secondary">Публикации</h3>

          <Card border="secondary" className="my-1">
          <Container className="mx-1 my-1">
        <ListGroup as="ol" variant="flush" numbered>
          <ListGroup.Item as="li">
          <a href="https://arxiv.org/pdf/2112.05315.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">О. И. Криворотько, С. И. Кабанихин. Математические модели распространения COVID-19. Препринт 300 СО РАН, института математики им. С.Л.Соболева. 63с.</a>
          </ListGroup.Item>
          <ListGroup.Item as="li">
          <a href="https://arxiv.org/pdf/2112.12313.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">V. Petrakova and O. Krivorotko. Mean field game for modeling of COVID-19 spread. Journal of Mathematical Analysis and Applications. Volume 514, Issue 1, 1 October 2022, 126271. DOI: https://doi.org/10.1016/j.jmaa.2022.126271</a>

          </ListGroup.Item>
          <ListGroup.Item as="li">
          <a href="https://www.sciencedirect.com/science/article/pii/S2468042721000798?via%3Dihub" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">O. Krivorotko, M. Sosnovskaia, I. Vashchenko, C. Kerr, D. Lesnic. Agent-based modeling of COVID-19 outbreaks for New York state and UK: Parameter identification algorithm. doi: 10.1016/j.idm.2021.11.004</a>
          </ListGroup.Item>
          <ListGroup.Item as="li">
          <a href="https://covid19-modeling.ru/data/papers/1_Krivorotko_et_al_COVID-19_in_Moscow_and_NSO.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">  Криворотько О.И., Кабанихин С.И., Зятьков Н.Ю., Приходько А.Ю., Прохошин Н.М., Шишленин М.А. Математическое моделирование и прогнозирование COVID-19 в Москве и Новосибирской области // Сиб. журн. вычисл. математики / РАН. Сиб. отд-ние. – Новосибирск, 2020. – Т. 23, N4. – С. 395–414.</a>
          </ListGroup.Item>
          <ListGroup.Item as="li">

          <a href="https://covid19-modeling.ru/data/papers/2_Krivorotko_et_al_COVID-19_Identifiability.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">О.И. Криворотько, С.И. Кабанихин, М.И. Сосновская, Д.В. Андорная. Анализ чувствительности и идентифицируемости математических моделей распространения эпидемии COVID-19 // Вавиловский журнал генетики и селекции, 2021, 25(1), с. 1-10, DOI 10.18699/VJ21.010</a>
          </ListGroup.Item>
          <ListGroup.Item as="li">

          <a href="https://covid19-modeling.ru/data/papers/3_Kabanikhin&Krivorotko_COVID-19_in_Wuhan.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">S. I. Kabanikhin and O. I. Krivorotko. Mathematical Modeling of the Wuhan COVID-2019 Epidemic and Inverse Problems. Computational Mathematics and Mathematical Physics, 2020, Vol. 60, No. 11, pp. 1889–1899.</a>
          </ListGroup.Item>
          <ListGroup.Item as="li">

          <a href="https://ieeexplore.ieee.org/document/9588678/authors#authors" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">Nikolay Zyatkov and Olga Krivorotko. Forecasting Recessions in the US Economy Using Machine Learning Methods. doi: 10.1109/OPCS53376.2021.9588678</a>
          </ListGroup.Item>
        </ListGroup>
          </Container>
        </Card>

        <Card className="text-center bg-secondary text-white my-3">
          <Card.Title> <h3 className="my-1">Конференции</h3> </Card.Title>
        </Card>
        <Container className="my-3">
          <Row className="justify-content-md-center" style={{
                  width: "100%" }}>
            <Row style={{
                    width: "100%" }}>
              <Col >
                <Row style={{
                        width: "100%" }}>
                  <Col>
                  <a href="http://www.math.nsc.ru/conference/ds/2020/">
                    <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                    <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                    <Image variant="top"  className="my-5"
                    src="https://covid19-modeling.ru/wp-content/uploads/2020/11/conf_DynInSyb.png"
                    rounded
                    fluid
                    />
                    </Container>
                      <Card.Body>
                        <Card.Title className="text-center"><a href="http://www.math.nsc.ru/conference/ds/2020/" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">Dynamics in Siberia</a></Card.Title>
                      </Card.Body>
                    </Card>
                    </a>
                  </Col>
                  <Col>
                  <a href="https://bgrssb.icgbio.ru/2020/">
                  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                  <Image variant="top" className="my-5"
                  src="https://covid19-modeling.ru/wp-content/uploads/2020/11/conf_BGRS.png"
                  rounded
                  fluid
                  />
                  </Container>
                    <Card.Body>
                        <Card.Title className="text-center"><a href="https://bgrssb.icgbio.ru/2020/" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">BGRS/SB-2020</a></Card.Title>
                    </Card.Body>
                  </Card>
                  </a>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row style={{
                        width: "100%" }}>
                  <Col>
                  <a href="https://conf.icgbio.ru/sbb2020/">
                  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                  <Image variant="top" className="my-5" style={{ width: '6rem' }, {height: '6rem'}}
                  src="https://covid19-modeling.ru/wp-content/uploads/2020/11/conf_SBB.png"
                  roundedCircle
                  fluid
                  />
                  </Container>
                    <Card.Body>
                        <Card.Title className="text-center"><a href="https://conf.icgbio.ru/sbb2020/" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">SBB-2020</a></Card.Title>
                    </Card.Body>
                  </Card>
                  </a>
                  </Col>
                  <Col>
                  <a href="https://mdb2022.ru">
                  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                  <Image variant="top" className="my-5" style={{ width: '6rem' }, {height: '6rem'}}
                  src="https://covid19-modeling.ru/wp-content/uploads/2020/11/conf_MDB.png"
                  roundedCircle
                  fluid
                  />
                  </Container>
                    <Card.Body>
                      <Card.Title className="text-center"><a href="https://mdb2022.ru" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">МДБ-2020</a></Card.Title>
                    </Card.Body>
                  </Card>
                  </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Container>

        <Container className="my-5">
          <Row className="justify-content-md-center" style={{
                  width: "100%" }}>
            <Row style={{
                    width: "100%" }}>
              <Col>
                <Row style={{
                        width: "100%" }}>
                  <Col>
                  <a href="http://conf.nsc.ru/tcmiip2021">
                    <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                    <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                    <Image variant="top" className="my-5" style={{ width: '6rem' }, {height: '6rem'}}
                    src="https://covid19-modeling.ru/wp-content/uploads/2020/11/conf_ONZ.png"
                    rounded
                    fluid
                    />
                    </Container>
                      <Card.Body>
                        <Card.Title className="text-center"><a href="http://conf.nsc.ru/tcmiip2021" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">ОНЗ-2020, 2021</a></Card.Title>
                      </Card.Body>
                    </Card>
                    </a>
                  </Col>
                  <Col>
                  <a href="http://conf.nsc.ru/msr2020">
                  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                  <Image variant="top" className="my-5" style={{ width: '7rem' }, {height: '7rem'}}
                  src="https://covid19-modeling.ru/wp-content/uploads/2020/11/conf_ICMMG.png"
                  roundedCircle
                  fluid
                  />
                  </Container>
                    <Card.Body>
                      <Card.Title className="text-center"><a href="http://conf.nsc.ru/msr2020" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">МНЧ-2020</a></Card.Title>
                    </Card.Body>
                  </Card>
                  </a>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className="justify-content-md-center" style={{
                        width: "100%" }}>
                  <Col className="justify-content-md-center">
                  <a href="http://mim.rmc.math.tsu.ru">
                  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                  <Image variant="top" className="my-5" style={{ width: '6rem' }, {height: '6rem'}}
                  src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Tomsk_logo.png"
                  roundedCircle
                  fluid
                  />
                  </Container>
                    <Card.Body>
                      <Card.Title className="text-center"><a href="http://mim.rmc.math.tsu.ru" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">Томск-2021</a></Card.Title>
                    </Card.Body>
                  </Card>
                  </a>
                  </Col>
                  <Col>
                  <a href="https://conference.icc.ru/event/3/">
                  <Card border="light" style={{ width: '18rem' }} className="mx-auto">
                  <Container style={{ width: '9rem' }, {height: '9rem'}} className=" text-center">
                  <Image variant="top" className="my-5" style={{ width: '4rem' }, {height: '4rem'}}
                  src="https://covid19-modeling.ru/wp-content/uploads/2021/06/MOTOR_logo-1536x463.png"
                  rounded
                  fluid
                  />
                  </Container>
                    <Card.Body>

                      <Card.Title className="text-center"><a href="https://conference.icc.ru/event/3/" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">MOTOR-2021</a></Card.Title>
                    </Card.Body>
                  </Card>
                  </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
        </Container>
        <Container className="my-5">
          <Row className="justify-xs-center">
          <Col xs= {10} md={6} className="justify-xs-center">
          <a href="https://siriusmathcenter.ru/all-russian-conference">
          <Card border="light"  className="mx-auto align-center" style={{ minWidth: '20rem' }} >
          <Container  className=" text-center" style={{height: '9rem'}}>
          <Image variant="top" className="my-5" style={{ width: '5rem' }, {height: '5rem'}}
          src="https://covid19-modeling.ru/wp-content/uploads/2021/08/Sirius_conference.png"
          rounded
          fluid
          />
          </Container>
            <Card.Body>
                <Card.Title className="text-center"><a href="https://siriusmathcenter.ru/all-russian-conference" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">Конференция международных математических центров мирового уровня - 2021</a></Card.Title>
            </Card.Body>
          </Card>
          </a>
          </Col >
          <Col xs= {10} md={6}>
          <a href="https://qipa2021.mipt.ru/home">
          <Card border="light" className="mx-auto" style={{ minWidth: '20rem' }}>
          <Container  className=" text-center" style={{height: '9rem'}}>
          <Image variant="top" className="my-5" style={{ width: '4rem' }, {height: '4rem'}}
          src="https://covid19-modeling.ru/wp-content/uploads/2021/08/QIPA_conference.png"
          rounded
          fluid
          />
          </Container>
            <Card.Body>
              <Card.Title className="text-center"><a href="https://qipa2021.mipt.ru/home" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">Quasilinear Equations, Inverse Problems and Their Applications</a></Card.Title>
            </Card.Body>
          </Card>
          </a>
          </Col>
         </Row>
        </Container>

      </Container>
<Footer />
    </>
)
