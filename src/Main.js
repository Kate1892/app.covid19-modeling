import React, {useMemo} from "react";
import {Container, Card, CardGroup, Image, Row, Col, ListGroup, NavLink, Button} from 'react-bootstrap';
import Footer from './Components/Footer'
import TeamItem from './Components/TeamItem'
import Main_picture from './Components/Main_picture'
import Main_contacts from './Components/Main_contacts'
import Main_publications from './Components/Main_publications'
import Main_conferences from './Components/Main_conferences'


export function Main() {

  const posts = [
    {id: 1, name: 'Криворотько Ольга', institution: 'к.ф.-м.н., c.н.с. ИВМиМГ СО РАН', image: "https://covid19-modeling.ru/wp-content/uploads/2020/11/Krivorotko.png"},
    {id: 2, name: 'Зятьков Николай', institution: 'к.т.н., м.н.с. ИВМиМГ СО РАН', image: "https://covid19-modeling.ru/wp-content/uploads/2022/02/Zyatkov1.png"},
    {id: 3, name: 'Звонарева Татьяна', institution: 'аспирант НГУ, инженер ИВМиМГ СО РАН', image: "https://covid19-modeling.ru/wp-content/uploads/2020/11/Zvonareva.png"},
    {id: 4, name: 'Сосновская Мария', institution: 'инженер ЛМСИИММЕ НГУ', image: "https://covid19-modeling.ru/wp-content/uploads/2020/11/Sosnovskaya.png"},
    {id: 5, name: 'Неверов Андрей', institution: 'магистрант НГУ, инженер ИВМиМГ СО РАН', image: "https://covid19-modeling.ru/wp-content/uploads/2020/11/Neverov.png"},
    {id: 6, name: 'Петракова Виктория', institution: 'к.ф.-м.н., м.н.с. ИВМ СО РАН', image:  "https://covid19-modeling.ru/wp-content/uploads/2022/02/Petrakova1.jpg"}
  ]
  return(
      <>
      <Main_picture />
        <Container >
            <div>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Команда</h4> </Card.Title>
          </Card>
          <Container>
            <Row xs={1} md={2} className="justify-content-md-center" >
              {posts.map(post =>
                  <TeamItem post = {post}/>
              )}
            </Row>
          </Container>
          </div>
          <div className="my-3"><hr /></div>
          <h4 className="text-left mx-5 text-secondary">Kонтакты</h4>
            <Main_contacts />
            <div className="my-3"><hr /></div>
          <h4 className="text-left mx-5 text-secondary">Публикации</h4>
            <Main_publications />

        <Card className="text-center bg-secondary text-white my-3">
          <Card.Title> <h4 className="my-1 ">Конференции</h4> </Card.Title>
        </Card>
            <Main_conferences />
      </Container>
    </>
)
}
