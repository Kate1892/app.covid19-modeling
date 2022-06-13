import React from "react";
import {Container, Card, Image, Col, Row, Table} from 'react-bootstrap';
import sfblok from "./../images/sfblok.png"
import sfifblok from "./../images/sfifblok.png"
import firdblok from "./../images/firdblok.png"
import blokd from "./../images/blokd.png"

const Description_SEIRHCD = () => {
    return (
      <>
      <Row >
         <Col sm={12} xs={12} md={12} lg={6}><Card className="border mx-3 my-1">
           <Card.Header className=" text-center text-success">Структура модели</Card.Header>
           <Card.Body>
           <Image
           src={sfblok}
           rounded
           fluid
           />
           </Card.Body></Card>
           <Card className="border mx-3 my-1">
             <Card.Header className=" text-center text-white bg-success">Математическая модель</Card.Header>
             <Card.Body align="justify">
             <div><small>Описывается системой 7 обыкновенных дифференциальных уравнений, удовлетворяющих закону баланса масс:</small></div>
             <div className="my-3">
             <Image
             src={blokd}
             rounded
             fluid
             />
             </div>
             </Card.Body></Card>
           </Col>
         <Col sm={12} xs={12} md={12}  lg={6}><Card className="border my-1 mx-3">
           <Card.Header className=" text-center text-white bg-success">Параметры модели</Card.Header>
           <Card.Body align="left">
           <small>
           <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Параметр</th>
        <th>Описание</th>
        <th>Границы</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><i>{'\u03B1'}(t)</i></td>
        <td>Индекс самоизоляции (<a href="https://yandex.ru/company/researches/2020/podomam">данные Яндекса</a>)</td>
        <td>(0, 5)</td>
      </tr>
      <tr>
        <td>2</td>
        <td><i>{'\u03B1'}<sub>E</sub>(t)</i></td>
        <td>Параметр заражения между бессимптомной <i>E(t)</i> и восприимчивой <i>S(t)</i> группами населения (<i>{'\u03B1'}<sub>E</sub>>>{'\u03B1'}<sub>I</sub></i>)</td>
        <td>(0, 1)</td>
      </tr>
      <tr>
        <td>3</td>
        <td><i>{'\u03B1'}<sub>I</sub>(t)</i></td>
        <td>Параметр заражения между инфицированным <i>I(t)</i> и восприимчивым <i>S(t)</i> населением</td>
        <td>(0, 1)</td>
      </tr>
      <tr>
        <td>4</td>
        <td><i>{'\u03B2'}(t)</i></td>
        <td>Доля инфицированных, имеющая антитела IgG к SARS-CoV-2</td>
        <td><a href="https://away.vk.com/away.php">Инвитро</a></td>
      </tr>
      <tr>
        <td>5</td>
        <td><i>{'\u03B5'}<sub>hc</sub>(t)</i></td>
        <td>Доля госпитализированных случаев <i>H(t)</i>, которым требуется подключение ИВЛ</td>
        <td>(0, 1)</td>
      </tr>
      <tr>
        <td>6</td>
        <td><i>{'\u03BC'}(t)</i></td>
        <td>Доля смертельных случаев</td>
        <td>(0, 0.5)</td>
      </tr>
      <tr>
        <td>7</td>
        <td><i>{'\u03C4'}</i></td>
        <td>Латентный период</td>
        <td>2 дня</td>
      </tr>
      <tr>
        <td>8</td>
        <td><i>t<sub>inc</sub></i></td>
        <td>Длительность инкубационного периода</td>
        <td>2-14 дней</td>
      </tr>
      <tr>
        <td>9</td>
        <td><i>t<sub>inf</sub></i></td>
        <td>Длительность периода инфицирования</td>
        <td>2,5-14 дней</td>
      </tr>
      <tr>
        <td>10</td>
        <td><i>t<sub>hosp</sub></i></td>
        <td>Длительность периода госпитализации</td>
        <td>4-5 дней</td>
      </tr>
      <tr>
        <td>11</td>
        <td><i>t<sub>crit</sub></i></td>
        <td>Длительность использования ИВЛ</td>
        <td>10-20 дней</td>
      </tr>
      <tr>
        <td>12</td>
        <td><i>t<sub>imm</sub></i></td>
        <td>Средняя продолжительность гуморального иммунитета после выздоровления</td>
        <td>180 дней</td>
      </tr>
      </tbody>
      </Table>
      </small>
           </Card.Body></Card>
           <Card className="border  my-1 mx-3">
             <Card.Header className="text-center text-success">Обратная задача</Card.Header>
             <Card.Body>
             <small>
             Для каждого временного промежутка (14 дней) уточняются параметры задачи </small><div><i>q(t) = ({'\u03B1'}<sub>E</sub>(t),{'\u03B1'}<sub>I</sub>(t), {'\u03B5'}<sub>hc</sub>(t),{'\u03BC'}(t), E<sub>0</sub>, I<sub>0</sub>) </i>
             <small>
             путем минимизации целевого функционала </small></div>
             <Image
             src={firdblok}
             rounded
             fluid
             style={{ width: '3rem' }, {height: '3rem'}}
             />
             <small>
  методом глобальной оптимизации на основе древовидных оценок Парзена <a href="https://optuna.org">OPTUNA</a>.
  <div className="text-success">Реальные данные:</div>
   <div><i>f<sub>k</sub></i> – количество выявленных случаев COVID-19 в день <i>k</i>,</div>
  <div><i>b<sub>k</sub></i> – процент бессимптомных выявленных в день <i>k</i>,</div>
   <div><i>C<sub>k</sub></i> – количество критических случаев COVID-19 в день <i>k</i>, нуждающихся в подключении аппарата ИВЛ,</div>
  <div><i>g<sub>k</sub></i> – количество умерших в результате COVID-19 в день <i>k</i>.</div></small>
             </Card.Body></Card>
             <Card className="border my-1 mx-3">
               <Card.Header className="text-center text-success bg-light">Алгоритм усвоения данных</Card.Header>
               <Card.Body align="center">
               <Image
               src={sfifblok}
               rounded
               fluid
               />
               </Card.Body></Card>
           </Col>
       </Row>
      </>
    )}

export default Description_SEIRHCD;