import { Card, Image, Col, Row } from 'react-bootstrap'

import sfblok from '../../images/sfblok.png'
import sfifblok from '../../images/sfifblok.png'
import firdblok from '../../images/firdblok.png'
import blokd from '../../images/blokd.png'

import { variantsY as variants, AnimationV } from '../Animation/Animation'
import { SEIRHCD_table } from './SEIRHCD_table'
import { SEIRHCD_realDataDesc } from './SEIRHCD_realDataDesc'

export const Description_SEIRHCD = () => {
  return (
    <>
      <Row>
        <Col sm={12} xs={12} md={12} lg={6}>
          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 mx-3 my-1'>
              <Card.Header className=' text-center text-success'>
                Структура модели
              </Card.Header>
              <Card.Body>
                <Image src={sfblok} rounded fluid />
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 mx-3 my-1'>
              <Card.Header className=' text-center text-white bg-success'>
                Математическая модель
              </Card.Header>
              <Card.Body align='justify'>
                <div>
                  <small>
                    Описывается системой 7 обыкновенных дифференциальных
                    уравнений, удовлетворяющих закону баланса масс:
                  </small>
                </div>
                <div className='my-3'>
                  <Image src={blokd} rounded fluid />
                </div>
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 my-1 mx-3'>
              <Card.Header className='text-center text-success bg-light'>
                Алгоритм усвоения данных
              </Card.Header>
              <Card.Body align='center'>
                <Image src={sfifblok} rounded fluid />
              </Card.Body>
            </Card>
          </AnimationV>
        </Col>
        <Col sm={12} xs={12} md={12} lg={6}>
          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 my-1 mx-3'>
              <Card.Header className=' text-center text-white bg-success'>
                Параметры модели
              </Card.Header>
              <Card.Body>
                <SEIRHCD_table />
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 my-1 mx-3'>
              <Card.Header className='text-center text-success'>
                Обратная задача
              </Card.Header>
              <Card.Body>
                <small>
                  Для каждого временного промежутка (14 дней) уточняются
                  параметры задачи{' '}
                </small>
                <div>
                  <i>
                    q(t) = ({'\u03B1'}
                    <sub>E</sub>(t),{'\u03B1'}
                    <sub>I</sub>(t), {'\u03B5'}
                    <sub>hc</sub>(t),{'\u03BC'}(t), E<sub>0</sub>, I<sub>0</sub>
                    ){' '}
                  </i>
                  <small>путем минимизации целевого функционала </small>
                </div>
                <Image
                  src={firdblok}
                  rounded
                  fluid
                  style={({ width: '3rem' }, { height: '3rem' })}
                />
                <small>
                  методом глобальной оптимизации на основе древовидных оценок
                  Парзена <a href='https://optuna.org'>OPTUNA</a>.
                </small>
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 my-1 mx-3'>
              <Card.Header className='text-center text-white bg-success'>
                Реальные данные
              </Card.Header>
              <Card.Body align=''>
                <SEIRHCD_realDataDesc />
              </Card.Body>
            </Card>
          </AnimationV>
        </Col>
      </Row>
    </>
  )
}
