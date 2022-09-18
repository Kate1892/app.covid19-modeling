import { useState } from 'react'
import { Card, Image, Col, Row, Modal, Stack } from 'react-bootstrap'

import { BsFillPersonLinesFill } from 'react-icons/bs'
import { filesAOM } from './AOM_infoFiles'

import fblok from '../../images/fblok.png'
import model from '../../images/model.png'
import sblok from '../../images/sblok.png'

import { CovidDataFiles, CollapseParamCSV } from '../../components'

import { variantsY as variants, AnimationV } from '../Animation/Animation'
import { AOM_agParams } from './AOM_agParams'

export const Description_AOM = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)

  return (
    <>
      <Row>
        <Col sm={12} xs={12} md={12} lg={6}>
          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border mx-3 my-1 shadow1'>
              <Card.Header className='text-success'>
                1. Инициация популяции
              </Card.Header>
              <Card.Body>
                <p align='justify'>
                  <small>
                    Формируются четыре структуры контактов, в которых могут
                    находиться агенты в зависимости от возраста 0-9,10-19, …,
                    80+ лет.
                  </small>
                </p>
                <Image src={fblok} rounded fluid onClick={handleShow1} />
                <Modal show={show1} onHide={handleClose1} animation={true}>
                  <Image src={fblok} rounded fluid />
                </Modal>
              </Card.Body>
            </Card>{' '}
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border mx-3 my-1 shadow1'>
              <Card.Header className='text-white bg-success'>
                2. Заражение
              </Card.Header>
              <Card.Body align='justify'>
                <div>
                  <small>
                    {' '}
                    Предполагается, что вирус передается между агентами,
                    соединенными ребром графа. Заражение при близком контакте
                    описывается кусочно-постоянным параметром{' '}
                    <i className='text-danger'>{'\u03B2'}</i>.
                  </small>
                </div>
                <div className='my-3'>
                  <Image src={sblok} rounded fluid />
                </div>
                <div>
                  <small>
                    <div className='text-success'>Пример:</div> Домохозяйства -
                    заполняются агентами согласно статистическим данным о
                    среднем размере семьи в регионе.
                  </small>
                </div>
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 my-1 mx-3'>
              <Card.Header className='text-center text-white bg-success'>
                Данные
              </Card.Header>
              <Card.Body align='center'>
                <Stack gap={3}>
                  {filesAOM.map(file => (
                    <CovidDataFiles key={file.id} file={file} />
                  ))}
                  <CollapseParamCSV />
                </Stack>
              </Card.Body>
            </Card>
          </AnimationV>
        </Col>
        <Col sm={12} xs={12} md={12} lg={6}>
          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border my-1 mx-3 shadow1'>
              <Card.Header className='text-white bg-success'>
                <BsFillPersonLinesFill size={30} /> Параметры агентов
              </Card.Header>
              <Card.Body align='left'>
                <AOM_agParams />
                <div align='justify'>
                  <small>
                    В зависимости от возраста агенты контактируют друг с другом
                    в контактных сетях, представляющие собой полносвязные графы.
                  </small>
                </div>
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 my-1 mx-3'>
              <Card.Header className='text-success'>
                3. Прогрессирование заболевания
              </Card.Header>
              <Card.Body>
                <Image src={model} rounded fluid onClick={handleShow} />
                <Modal show={show} onHide={handleClose} animation={true}>
                  <Image src={model} rounded fluid />
                </Modal>
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border my-1 shadow1 mx-3'>
              <Card.Header className='text-success bg-light'>
                4. Тестирование агентов
              </Card.Header>
              <Card.Body align='justify'>
                <div>
                  <small>
                    Проводится согласно ежедневным статистическим данным о
                    количестве проведенных тестов в регионе. Шанс быть
                    протестированным на COVID-19 <i>{'\u03C1'}</i> зависит от
                    эпидемиологического статуса агента и определяется в ходе
                    решения обратной задачи. Положительный результат могут
                    получить агенты, статус которых обведен в оранжевую рамку. В
                    модели предполагается, что вероятность тестирования агентов
                    с симптомами выше, чем у бессимптомных больных.
                  </small>
                </div>
              </Card.Body>
            </Card>
          </AnimationV>

          <AnimationV variants={variants} custom={1} viewport={{ amount: 0.1 }}>
            <Card className='border shadow1 my-1 mx-3'>
              <Card.Header className='text-white bg-success'>
                5. Введение сдерживающих эпидемию мер
              </Card.Header>
              <Card.Body align='justify'>
                <div>
                  <small>
                    В модели возможно введение карантинных мер как для всех
                    контактных слоев, так и для каждого в отдельности. Это может
                    быть сделано двумя способами: либо изменением значения
                    параметра контагиозности вируса{' '}
                    <i className='text-danger'>{'\u03B2'}</i> (в случае введения
                    обязательной меры ношения масок или социального
                    дистанцирования), либо удалением ребер в графах сетей
                    контактов (в случае введения самоизоляции и дистанционной
                    работы).
                  </small>
                </div>
              </Card.Body>
            </Card>
          </AnimationV>
        </Col>
      </Row>
    </>
  )
}
