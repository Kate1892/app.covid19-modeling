import React, { useState } from 'react'
import {
  Card,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
  Collapse,
} from 'react-bootstrap'
import { Description_SEIRHCD } from '../ModelsDescription/Description_SEIRHCD'

import {
  BsFillArrowUpRightSquareFill,
  BsFillCaretRightFill,
  BsFillCaretDownFill,
} from 'react-icons/bs'

export const SEIRHCDHeader = () => {
  const [openSEIRHCD, setOpenSEIRHCD] = useState(false)

  return (
    <>
      <Row>
        <Col md={2} className='text-center'>
          <Row>
            <Col xs={12} lg={12}>
              {' '}
              <Button
                variant='outline-primary'
                className='bg-white text-primary  shadow1 my-2 mx-2'
                onClick={() => setOpenSEIRHCD(!openSEIRHCD)}
              >
                {' '}
                {openSEIRHCD ? (
                  <BsFillCaretDownFill size={15} />
                ) : (
                  <BsFillCaretRightFill size={15} />
                )}{' '}
                Описание модели
              </Button>
            </Col>
            <Col xs={12} lg={12} className='mx-2'>
              <OverlayTrigger
                rootClose={true}
                placement='bottom'
                ref={ref => (this.overlay = ref)}
                overlay={
                  <Popover className='shadow1'>
                    <Popover.Body>
                      <div align='center' className='text-black'>
                        Математическое моделирование и прогнозирование COVID-19
                        в Москве и Новосибирской области
                      </div>
                      <small align='center' className='text-success'>
                        <div>О.И. Криворотько</div>
                        <div>С.И. Кабанихин</div>
                        <div>Н.Ю. Зятьков</div>
                        <div>А.Ю. Приходько</div>
                        <div>Н.М. Прохошин</div>
                        <div>М.А. Шишленин</div>
                      </small>
                    </Popover.Body>
                  </Popover>
                }
              >
                <a href='https://covid19-modeling.ru/data/papers/1_Krivorotko_et_al_COVID-19_in_Moscow_and_NSO.pdf'>
                  <Button
                    variant='link'
                    onClick={e => {
                      document.body.click(e)
                      this.overlay.hide()
                    }}
                  >
                    <BsFillArrowUpRightSquareFill size={30} />
                  </Button>
                </a>
              </OverlayTrigger>
              <OverlayTrigger
                rootClose={true}
                placement='bottom'
                ref={ref => (this.overlay = ref)}
                overlay={
                  <Popover className='shadow1'>
                    <Popover.Body>
                      <div align='center' className='text-black'>
                        Анализ чувствительности и идентифицируемости
                        математических моделей распространения эпидемии COVID-19
                      </div>
                      <small align='center' className='text-success'>
                        <div>О.И. Криворотько</div>
                        <div>С.И. Кабанихин</div>
                        <div>М.И. Сосновская</div>
                        <div>Д.В. Андорная.</div>
                      </small>
                    </Popover.Body>
                  </Popover>
                }
              >
                <a href='https://covid19-modeling.ru/data/papers/2_Krivorotko_et_al_COVID-19_Identifiability.pdf'>
                  <Button
                    variant='link'
                    onClick={e => {
                      document.body.click(e)
                      this.overlay.hide()
                    }}
                  >
                    <BsFillArrowUpRightSquareFill size={30} />
                  </Button>
                </a>
              </OverlayTrigger>
              <OverlayTrigger
                rootClose={true}
                placement='bottom'
                ref={ref => (this.overlay = ref)}
                overlay={
                  <Popover className='shadow1'>
                    <Popover.Body>
                      <div align='center' className='text-black'>
                        Forecasting Recessions in the US Economy Using Machine
                        Learning Methods
                      </div>
                      <small align='center' className='text-success'>
                        <div>Nikolay Zyatkov</div>
                        <div>Olga Krivorotko</div>
                      </small>
                    </Popover.Body>
                  </Popover>
                }
              >
                <a href='https://ieeexplore.ieee.org/document/9588678/authors#authors'>
                  <Button
                    variant='link'
                    onClick={e => {
                      document.body.click(e)
                      this.overlay.hide()
                    }}
                  >
                    <BsFillArrowUpRightSquareFill size={30} />
                  </Button>
                </a>
              </OverlayTrigger>
            </Col>
          </Row>
        </Col>
        <Col md={10}>
          <Card className='my-3 shadow1'>
            <p align='justify' className='mx-3 my-1'>
              <small></small>
            </p>{' '}
          </Card>
          <div className='mx-2'>
            <hr />
          </div>
        </Col>
      </Row>

      <Collapse in={openSEIRHCD}>
        <div id='example-collapse-text' className='my-2'>
          <Description_SEIRHCD />
        </div>
      </Collapse>
    </>
  )
}
