import React from "react";
import {Container, Card, Image, Col, Row} from 'react-bootstrap';
import MConferenseItem from './ConferenseItem'
import { motion } from "framer-motion"
import conf_DynInSyb from ".././images/conf/conf_DynInSyb.png"
import conf_BGRS from ".././images/conf/conf_BGRS.png"
import conf_SBB from ".././images/conf/conf_SBB.png"
import conf_MDB from ".././images/conf/conf_MDB.png"
import conf_ONZ from ".././images/conf/conf_ONZ.png"
import conf_ICMMG from ".././images/conf/conf_ICMMG.png"
import Tomsk_logo from ".././images/conf/Tomsk_logo.png"
import MOTOR_logo from ".././images/conf/MOTOR_logo.png"
import Sirius_conference from ".././images/conf/Sirius_conference.png"
import QIPA_conference from ".././images/conf/QIPA_conference.png"

const Main_conferences = () => {
  const confs = [
    {id: 1, name: 'Dynamics in Siberia', image: conf_DynInSyb,
      href: "http://www.math.nsc.ru/conference/ds/2020/", width: '', height:'', rounded: false},
    {id: 2, name: 'BGRS/SB-2020', image: conf_BGRS,
      href: "https://bgrssb.icgbio.ru/2020/", width: '',height: '', rounded: true},
    {id: 3, name: 'SBB-2020', image: conf_SBB,
      href: "https://conf.icgbio.ru/sbb2020/", width: '6rem',height: '6rem', rounded: true},
    {id: 4, name: 'МДБ-2020', image: conf_MDB,
      href: "https://mdb2022.ru", width: '6rem', height: '6rem', rounded: true},
    {id: 5, name: 'ОНЗ-2020, 2021', image: conf_ONZ,
      href: "http://conf.nsc.ru/tcmiip2021", width: '6rem', height: '6rem', rounded: true},
    {id: 6, name: 'МНЧ-2020', image: conf_ICMMG,
      href: "http://conf.nsc.ru/msr2020", width: '7rem', height: '7rem', rounded: true},
    {id: 7, name: 'Томск-2021', image: Tomsk_logo,
      href: "http://mim.rmc.math.tsu.ru",  width: '6rem', height: '6rem', rounded: true},
    {id: 8, name: 'MOTOR-2021', image:  MOTOR_logo,
          href: "https://conference.icc.ru/event/3/", width: '4rem' , height: '4rem', rounded: false},
    //{id: 9, name: 'Конференция международных математических центров мирового уровня - 2021', image:  "https://covid19-modeling.ru/wp-content/uploads/2021/08/Sirius_conference.png",
    //            href: "https://conference.icc.ru/event/3/", width: '5rem' , height: '5rem', rounded: false},
    //{id: 10, name: 'Quasilinear Equations, Inverse Problems and Their Applications', image:  "https://covid19-modeling.ru/wp-content/uploads/2021/08/QIPA_conference.png",
    //                  href: "https://qipa2021.mipt.ru/home", width: '4rem' , height: '4rem', rounded: false}
  ]

  const variants = {
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

    return (
      <>
      <Container className="my-3 mx-2">
        <Row className="justify-content-md-center" style={{
                width: "100%" }}>
              {confs.map((conf,index) =>
                  <MConferenseItem initial="hidden" whileInView="visible" viewport={{amount: 0.05, once: true}}
                     custom={index + 1}
                    variants={variants}conf = {conf}/>
              )}
        </Row>
      </Container>
      <motion.div  initial="hidden"
         custom={3}
        variants={variants} whileInView="visible" viewport={{amount: 0.5, once: true}}>
      <Container className="my-2">
        <Row className="justify-xs-center">
        <Col xs= {12} md={6} className="justify-xs-center">
        <a href="https://siriusmathcenter.ru/all-russian-conference">
        <Card border="light"  className="mx-auto my-2 align-center shadow1" style={{ minWidth: '20rem' }} >
        <Container  className=" text-center" style={{height: '9rem'}}>
        <Image variant="top" className="my-5" style={{ width: '5rem' }, {height: '5rem'}}
        src={Sirius_conference}
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
        <Col xs= {12} md={6}>
        <a href="https://qipa2021.mipt.ru/home">
        <Card border="light" className="mx-auto my-2 shadow1" style={{ minWidth: '20rem' }}>
        <Container  className=" text-center" style={{height: '9rem'}}>
        <Image variant="top" className="my-5" style={{ width: '4rem' }, {height: '4rem'}}
        src={QIPA_conference}
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
      </motion.div>
      </>
    )}

export default Main_conferences;
