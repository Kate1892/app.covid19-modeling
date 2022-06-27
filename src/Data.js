import React, {useState} from "react";
import axios from "axios";
import NaviBarv2 from './Components/NaviBarv2';
import {Container, Row, Col, Card, Stack, Popover, OverlayTrigger, Image} from 'react-bootstrap';
import { motion } from "framer-motion"
import CollapseParamCSV from './Components/CollapseParamCSV'
import AltayG from "./images/gerbs/Altay_region_gerb.png"
import OmskG from "./images/gerbs/Omsk_region_gerb.png"
import HSKG from "./images/gerbs/Novosibirsk_region_gerb.png"
import {BsDownload} from 'react-icons/bs'


export function Data (){
  const [open, setOpen] = useState(false);
  const variants2 = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2}
    }),
    hidden: {
      opacity: 0,
      y: 100,
   },
  }

  return(
    <>
      <NaviBarv2 />
      <Container className="my-3"   style={{
              height: "120%" }}>
              <motion.div initial="hidden"
                   custom={2}
                  variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3 my-3">
                  <Stack direction="horizontal" gap={3}>
      <div ><h4 className="mx-5 text-secondary">Данные по Новосибирской области</h4></div>
      <div className=" ms-auto">
      <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
      src={HSKG}
      rounded
      fluid
      />
      </div>
    </Stack>
    </motion.div>
      <Row className="mx-5 my-3">
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1 datacardcol">
        <Card.Body>
          <Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  Полные</h5></Card.Title>
        </Card.Body>
      </Card></motion.div></Col>
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={3}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1 datacardcol">
        <Card.Body>
<Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  Сокращенные</h5></Card.Title>
        </Card.Body>
      </Card></motion.div></Col>
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={4}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1 datacardcol">
        <Card.Body>
<Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  Вакцинация</h5></Card.Title>
        </Card.Body>
      </Card></motion.div></Col>
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={4}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1 datacardcol">
        <Card.Body>
<Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  Смертность</h5></Card.Title>
        </Card.Body>
      </Card></motion.div></Col>
     </Row>
     <motion.div initial="hidden"
          custom={2}
         variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3"><hr />
      <Stack direction="horizontal" gap={3}>
         <div ><h4 className="mx-5 text-secondary">Данные по Омской области</h4></div>
         <div className=" ms-auto">
         <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
         src={OmskG}
         rounded
         fluid
         />
         </div>
         </Stack></motion.div>
      <Row className="mx-5 my-3">
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1 datacardcol">
        <Card.Body>
<Card.Title><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  Полные</h5></Card.Title>
        </Card.Body>
      </Card></motion.div></Col>
     </Row>
     <motion.div initial="hidden"
          custom={2}
         variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-3"><hr />
         <Stack direction="horizontal" gap={3}>
            <div ><h4 className="mx-5 text-secondary">Данные по Алтайскому краю</h4></div>
            <div className=" ms-auto">
            <Image variant="top" style={{ width: '4rem' }, {height: '4rem'}} className="mx-5"
            src={AltayG}
            rounded
            fluid
            />
            </div>
            </Stack></motion.div>
      <Row className="mx-5 my-3">
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={2}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1 datacardcol">
        <Card.Body>
<Card.Title ><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  Полные</h5></Card.Title>
        </Card.Body>
      </Card></motion.div></Col>
      <Col xs= {12} md={6} lg={3}>
      <motion.div initial="hidden"
           custom={3}
          variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}}>
      <Card className="shadow1 my-1 datacardcol">
        <Card.Body>
<Card.Title><h5 align='center' style={{fontSize:"20px", align:"left"}}><BsDownload />  Сглаженные</h5></Card.Title>
        </Card.Body>
      </Card></motion.div></Col>
     </Row>

     <motion.div initial="hidden"
          custom={2}
         variants={variants2} whileInView="visible" viewport={{amount: 0.1, once: true}} className="mx-auto my-5">
         <Container><CollapseParamCSV/></Container></motion.div>
      </Container>

    </>
  )
}
