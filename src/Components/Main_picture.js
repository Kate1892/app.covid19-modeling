import {Container, Card, Image, Col, Row, Button} from 'react-bootstrap';
import NaviBar from './NaviBar';
import { motion } from "framer-motion"

import { variantsX as variants } from "./Animation"

const Main_picture = () => {
    return (
      <Card  border="light"  style={{
        backgroundImage: `url("https://ega.ee/wp-content/uploads/2020/08/corona_1.jpg")`,
        height:'680px',

      }}>
      <NaviBar />
      <div align="left" className="my-auto mx-auto">
        <b>
        <motion.div initial="hidden"
          animate="visible" custom={1}
          variants={variants}>
          <h1 className="text-white mp_info"><b>Математическое моделирование</b></h1>
          <h1 className="text-white mp_info"><b>распространения инфекционных заболеваний</b></h1>
        </motion.div>
        <motion.div initial="hidden"
          animate="visible" custom={2}
          variants={variants}>
          <div className="text-white mp_info"><i>Суперкомпьютерный анализ, математическое моделирование и</i></div>
          <div className="text-white mp_info"><i>построение сценариев социально-экономического развития</i></div>
          <div className="text-white mp_info"><i>Новосибирской области в условиях пандемии COVID-19</i></div>
        </motion.div>
        </b>

        <motion.div initial="hidden"
          animate="visible" custom={3}
          variants={variants}>
          <Button href="/modeling" className="text-white shadow4 my-3 py-2 mp_info" variant="info" size="sm">
            <div style={{fontSize: 16}}><b>Перейти к моделированию</b></div></Button>
        </motion.div>
      </div>
      <Container>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className="support text-white" align="center"><i><b><h6>Проект поддержан Российским научным фондом (проект № 18-71-10044), Российским фондом фундаментальных исследований (проекты № 18-31-20019, № 21-51-10003) и Правительством города Новосибирска.</h6></b></i></motion.div>
      </Container>
    </Card>
    )
}

export default Main_picture;
