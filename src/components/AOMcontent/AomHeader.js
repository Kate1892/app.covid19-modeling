import React, { useState } from 'react'
import axios from 'axios'
import {
  BsFillFileEarmarkPdfFill,
  BsFillArrowUpRightSquareFill,
  BsFillCaretRightFill,
  BsFillCaretDownFill,
} from 'react-icons/bs'
import {
  Card,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
  Collapse,
} from 'react-bootstrap'
import { Description_AOM } from '../ModelsDescription/Description_AOM'
import FileDownload from 'js-file-download'

const download_article = e => {
  e.preventDefault()
  axios({
    url: 'https://server.covid19-modeling.ru/article',
    method: 'GET',
    responseType: 'blob',
  }).then(resA => {
    FileDownload(resA.data, 'article.pdf')
  })
}

export const AomHeader = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Row>
        <Col md={2}>
          <Row>
            <Col xs={12} lg={12}>
              {' '}
              <Button
                variant='outline-primary'
                className='bg-white shadow1 text-primary my-2 mx-2'
                onClick={() => setOpen(!open)}
                aria-controls='example-fade-text'
                aria-expanded={open}
              >
                {' '}
                {open ? (
                  <BsFillCaretDownFill size={15} />
                ) : (
                  <BsFillCaretRightFill size={15} />
                )}{' '}
                Описание модели
              </Button>
            </Col>
            <Col xs={12} lg={12}>
              <OverlayTrigger
                rootClose={true}
                placement='bottom'
                ref={ref => (this.overlay = ref)}
                overlay={
                  <Popover className='shadow1'>
                    <Popover.Body>
                      <div align='center' className='text-black'>
                        Моделирование сценариев распространения Covid-19 в
                        Республике Казахстан на основе регуляризации агентной
                        модели.
                      </div>
                      <small align='center' className='text-success'>
                        <div>О.И. Криворотько</div>
                        <div>С.И. Кабанихин</div>
                        <div>М.А. Бектемесов</div>
                        <div>М.И. Сосновская</div>
                        <div>А.В.Неверов</div>
                      </small>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button
                  variant='link'
                  onClick={e => {
                    download_article(e)
                    document.body.click(e)
                    this.overlay.hide()
                  }}
                >
                  <BsFillFileEarmarkPdfFill size={30} />
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                rootClose={true}
                placement='bottom'
                ref={ref => (this.overlay = ref)}
                overlay={
                  <Popover className='shadow1'>
                    <Popover.Body>
                      <div align='center' className='text-success'>
                        <div>
                          <small>
                            Публикация в журнале Моделирование инфекционных
                            заболеваний.
                          </small>
                        </div>
                        <div className='text-black'>
                          Агентное моделирование вспышек COVID-19 в штате
                          Нью-Йорк и Великобритании: алгоритм идентификации
                          параметров
                        </div>
                        <div>
                          <small>О.И. Криворотько</small>
                        </div>
                        <div>
                          <small>М.И. Сосновская</small>
                        </div>
                        <div>
                          <small>И.А. Ващенко</small>
                        </div>
                        <div>
                          <small>CliffKerr</small>
                        </div>
                        <div>
                          <small>DanielLesnic</small>
                        </div>
                      </div>
                    </Popover.Body>
                  </Popover>
                }
              >
                <a href='https://www.sciencedirect.com/science/article/pii/S2468042721000798'>
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
                ref={ref => (this.overlay = ref)}
                placement='bottom'
                overlay={
                  <Popover className='shadow1'>
                    <Popover.Body>
                      <div align='center' className='text-success'>
                        <div>
                          <small>
                            Препринт 300 СО РАН, института математики им.
                            С.Л.Соболева.
                          </small>
                        </div>
                        <div className='text-black'>
                          Математические модели распространения COVID-19.
                        </div>
                        <div>
                          <small>О.И. Криворотько</small>
                        </div>
                        <div>
                          <small>С.И. Кабанихин</small>
                        </div>
                      </div>
                    </Popover.Body>
                  </Popover>
                }
              >
                <a href='https://arxiv.org/pdf/2112.05315.pdf'>
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
            {' '}
            <p align='justify' className='mx-3 my-1'>
              <small>
                Прогнозирование производится посредством агентной модели расчета
                сценариев динамики выявленных случаев COVID-19, в основе которой
                лежат обработка неполных эпидемиологических данных и решение
                обратной задачи восстановления параметров агентной модели по
                совокупности доступных эпидемиологических данных. Основным
                инструментом построения модели является открытая библиотека{' '}
                <a href='https://docs.idmod.org/projects/covasim/en/latest/index.html'>
                  COVASIM
                </a>
                .{' '}
              </small>
            </p>
          </Card>
          <div className='mx-2'>
            <hr />
          </div>
        </Col>
      </Row>
      <Collapse in={open}>
        <div id='example-collapse-text' className='my-2'>
          <Description_AOM />
        </div>
      </Collapse>
    </>
  )
}
