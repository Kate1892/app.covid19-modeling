import {Container, Card, Row } from 'react-bootstrap'
import { motion } from "framer-motion"

import MTeamItem from './Components/TeamItem'
import Main_picture from './Components/Main_picture'
import Main_contacts from './Components/Main_contacts'
import Main_publications from './Components/Main_publications'
import Main_conferences from './Components/Main_conferences'
import Zvonareva from "./images/team/Zvonareva.jpg"
import Krivorotko from "./images/team/Krivorotko.png"
import Zyatkov from "./images/team/Zyatkov.png"
import Sosnovskaya from "./images/team/Sosnovskaya.png"
import Neverov from "./images/team/Neverov.png"
import Petrakova from "./images/team/Petrakova.jpg"
import { variantsY as variants } from "./Components/Animation"


export function Main() {

  const posts = [
    {id: 1, wid: '9rem', name: 'Криворотько Ольга', institution: 'к.ф.-м.н., c.н.с. ИВМиМГ СО РАН', image: Krivorotko},
    {id: 2, wid: '9rem', name: 'Зятьков Николай', institution: 'к.т.н., м.н.с. ИВМиМГ СО РАН', image: Zyatkov},
    {id: 3, wid: '8rem', name: 'Звонарева Татьяна', institution: 'аспирант НГУ, инженер ИВМиМГ СО РАН', image: Zvonareva},
    {id: 4, wid: '9rem', name: 'Сосновская Мария', institution: 'инженер ЛМСИИММЕ НГУ', image: Sosnovskaya},
    {id: 5, wid: '9rem', name: 'Неверов Андрей', institution: 'магистрант НГУ, инженер ИВМиМГ СО РАН', image: Neverov},
    {id: 6, wid: '9rem', name: 'Петракова Виктория', institution: 'к.ф.-м.н., м.н.с. ИВМ СО РАН', image: Petrakova}
  ]

  return(
      <>
      <Main_picture />
        <Container >
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
          <Card className="text-center bg-secondary text-white my-3" >
            <Card.Title> <h4 className="my-1 ">Команда</h4> </Card.Title>
          </Card>
          </motion.div>
          <motion.div  initial="hidden"
            animate="visible">
          <Container>
            <Row xs={1} md={2} className="justify-content-md-center" >
              {posts.map((post, index) =>
                  <MTeamItem  initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants} key = {post.id} post = {post}/>
              )}
            </Row>
          </Container>
          </motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Kонтакты</h4>
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_contacts />
          </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}} className="my-3"><hr />
          <h4 className="text-left mx-5 text-secondary">Публикации</h4></motion.div>
          <motion.div initial="hidden"
             custom={2}
            variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_publications />
            </motion.div>
            <motion.div initial="hidden"
               custom={2}
              variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
        <Card className="text-center bg-secondary text-white my-3">
          <Card.Title> <h4 className="my-1 ">Конференции</h4> </Card.Title>
        </Card></motion.div>
        <motion.div initial="hidden"
           custom={2}
          variants={variants} whileInView="visible" viewport={{amount: 0.05, once: true}}>
            <Main_conferences /> </motion.div>
      </Container>
    </>
)
}
