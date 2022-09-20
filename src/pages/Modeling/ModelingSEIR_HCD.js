import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Card,
  Stack,
  Row,
  Col,
  Form,
  ListGroup,
  OverlayTrigger,
  Popover,
  Collapse,
} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { selectseirhcdData } from '../../redux/seirhcdBlock/selectors'
import { selectseirhcdChData } from '../../redux/seirhcdChangeBlock/selectors'
import { fetchCovData } from '../../redux/seirhcdBlock/asyncAction'
import { fetchChangeCovData } from '../../redux/seirhcdChangeBlock/asyncAction'
import { fetchBPCovData } from '../../redux/seirhcdBPblock/asyncAction'
import { selectseirhcdBPdata } from '../../redux/seirhcdBPblock/selectors'
import { setChartDataType } from '../../redux/seirhcdBPblock/slice'

import { Formik } from 'formik'
import { motion } from 'framer-motion'

import {
  Chart as ChartJS,
  PointElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import zoomPlugin from 'chartjs-plugin-zoom'

import {
  AnimationV,
  variantsX as variants,
  variantsY as variants2,
} from '../../components/Animation/Animation'

import { SEIRHCDHeader } from '../../components/SEIRHCDcontent/SEIRHCDHeader'
import { BlockHeader } from '../../components/SEIRHCDcontent/BlockHeader'
import { ChartButtons } from '../../components/Plugs/ChartButtons'
import { headers } from '../../components/SEIRHCDcontent/BlockHeaderInfo'
import { SubBlock } from '../../components/SEIRHCDcontent/SubBlock'
import { OptionItem } from './OptionItem'
import { SeirhcdBlock } from '../../components/SEIRHCDcontent/SeirhcdBlock'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
  PointElement,
  Filler
)
ChartJS.register(zoomPlugin)
let ldate

export const ModelingSEIR_HCD = () => {
  const lastDate2 = () => {
    axios.get('https://server.covid19-modeling.ru/datesSEIR').then(res => {
      // setLastsData(res.data.dates[res.data.dates.length - 1].data)

      for (const dataObj of res.data.dates) {
        dates.push({ date: dataObj.data })
      }
      dates.reverse()
      setdates2(dates)
      ldate = dates2[dates2.length - 1].date
    })
  }
  const dates = []
  const [dates2, setdates2] = useState(dates)
  const [lastData, setLastsData] = useState(0)

  // const ldate = dates2[dates2.length - 1].date

  const [openBS, setOpenBS] = useState(true)
  const [openM, setOpenM] = useState(false)
  const [openV, setOpenV] = useState(false)

  const [prognose_type, setPrognose_type] = useState(1)
  const [prognose_data, setPrognose_data] = useState(dates[0])

  //1 - новые выявленные случаи
  //2 - критически больные
  //3 - умершие

  const dispatch = useDispatch()

  const {
    status,
    chartData_tR0,
    chartData_vR0,
    chartOptions_R0,
    chartData_tP,
    chartData_vP,
    chartOptions_P,
  } = useSelector(selectseirhcdData)

  const { status2, chartData_T, chartData_V, chartOptions_ } =
    useSelector(selectseirhcdChData)

  const {
    chartData_BP,
    chartOptions_bp,
    params,
    chartData_bpR0,
    chartOptions_bpR0,
  } = useSelector(selectseirhcdBPdata)

  const chartOptions_bpR0_ = { ...chartOptions_bpR0 }
  const chartOptions = { ...chartOptions_ }
  const chartOptions_P_ = { ...chartOptions_P }
  const chartOptions_R0_ = { ...chartOptions_R0 }
  const chartOptions_bp_ = { ...chartOptions_bp }

  const fetchData = async () => {
    dispatch(fetchCovData('tR0'))
    dispatch(fetchCovData('vR0'))
    dispatch(fetchCovData('tP'))
    dispatch(fetchCovData('vP'))

    const obj = {
      mean: 'fk_mean',
      max: 'fk_max',
      min: 'fk_min',
      real_data: 'new_diagnoses',
    }
    dispatch(fetchChangeCovData({ ...obj, key: 'train' }))
    dispatch(fetchChangeCovData({ ...obj, key: 'valid' }))
  }

  const fetchSeirhcdData = async (mean, max, min, title, key) => {
    const obj = {
      mean: mean,
      max: max,
      min: min,
      real_data: title,
      key: key,
    }
    dispatch(fetchChangeCovData(obj))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    lastDate2()
  }, [])

  const fetchSeirhcdBPdata = async (num, ldate) => {
    dispatch(
      fetchBPCovData({
        stype: num,
        datatype: ldate,
      })
    )
  }

  useEffect(() => {
    lastDate2()
    setPrognose_data(ldate)
  }, [ldate])

  useEffect(() => {
    fetchSeirhcdBPdata(1, '2022-06-02')
  }, [])

  useEffect(() => {
    lastDate2()
  }, [ldate])

  return (
    <>
      <Card className=' mx-auto' border='light' bg='light'>
        <SEIRHCDHeader />

        {/* {headers.map((el) => (
          <SeirhcdBlock el = {el} />
        ))} */}

        <BlockHeader
          open={openBS}
          setOpen={setOpenBS}
          description={headers[0].description}
          title={'Базовый сценарий'}
        />

        <Collapse in={openBS}>
          <div id='example-collapse-text'>
            <Row>
              <Col xs={12} md={4}>
                <AnimationV variants={variants}>
                  <ListGroup className='mx-3 shadow1 my-1'>
                    <ListGroup.Item
                      align='left'
                      className='bg-secondary text-secondary'
                      style={{ height: '42px' }}
                    />
                    <ListGroup.Item variant='light'>
                      <Row>
                        <Col xs={12} md={12} sm={12} lg={4}>
                          <Stack gap={0}>
                            <div>
                              <p
                                align='left'
                                className='my-1 text-black text-small'
                              >
                                <small>Дата прогноза</small>
                              </p>
                            </div>
                            <div>
                              <p
                                align='left'
                                className='my-4 text-black text-small'
                              >
                                <small>Прогноз</small>
                              </p>
                            </div>
                          </Stack>
                        </Col>
                        <Col xs={12} md={12} sm={12} lg={8}>
                          <Formik>
                            {() => (
                              <Form noValidate>
                                <Stack gap={3}>
                                  <Form.Select
                                    key={1}
                                    aria-label='Default select example'
                                    type='number'
                                    name='data'
                                    onChange={e => {
                                      const selected = e.target.value
                                      setPrognose_data(selected)
                                      //forecasts_new(prognose_type, selected)
                                      dispatch(
                                        fetchBPCovData({
                                          stype: prognose_type,
                                          datatype: selected,
                                        })
                                      )
                                    }}
                                  >
                                    {dates2.map((dates, index) => (
                                      <OptionItem key={index} dates={dates} />
                                    ))}
                                  </Form.Select>
                                  <Form.Select
                                    key={2}
                                    aria-label='Default select example'
                                    type='number'
                                    name='type'
                                    onChange={e => {
                                      const selectedType = e.target.value
                                      let stype = Number(selectedType)
                                      setPrognose_type(stype, prognose_data)
                                      dispatch(setChartDataType(stype))
                                      //forecasts_new(stype, prognose_data)
                                    }}
                                  >
                                    <option value='1'>
                                      Новые выявленные случаи
                                    </option>
                                    <option value='2'>
                                      Критически больные, C
                                    </option>
                                    <option value='3'>Умершие, D</option>
                                  </Form.Select>
                                </Stack>
                              </Form>
                            )}
                          </Formik>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </AnimationV>
              </Col>
              <Col xs={12} md={8}>
                <ChartButtons chartId={'chart2'} />
                {/* forecasts_new(prognose_type, prognose_data) */}
                <div style={{ height: '20rem' }}>
                  <Bar
                    id='chart2'
                    options={chartOptions_bp_}
                    data={chartData_BP}
                    height='90%'
                  />
                </div>
              </Col>
            </Row>
            <AnimationV variants={variants2} cn={'mx-3'}>
              <hr />
              <h4 className='mx-5 text-secondary'>
                Текущие параметры модели и их доверительный интервал
              </h4>
            </AnimationV>
            <Row className='mx-5 my-3'>
              <Col xs={12} md={6} lg={3}>
                <motion.div
                  initial='hidden'
                  custom={2}
                  variants={variants2}
                  whileInView='visible'
                  viewport={{ amount: 0.1, once: true }}
                >
                  <Card border='light' className='shadow1'>
                    <Card.Body>
                      <OverlayTrigger
                        placement='bottom'
                        overlay={
                          <Popover>
                            <Popover.Body>
                              <div className='text-success'>
                                Параметр заражения между бессимптомной{' '}
                                <i>E(t)</i> и восприимчивой <i>S(t)</i> группами
                                населения
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Row>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Title className='text-success'>
                              <h1
                                align='center'
                                style={{ fontSize: '80px', align: 'left' }}
                              >
                                {'\u03B1'}
                                <sub style={{ fontSize: '25px' }}>e</sub>
                              </h1>
                            </Card.Title>
                          </Col>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Text className=''>
                              <Stack className=''>
                                <small>
                                  <div className='text-muted'>
                                    среднее{' '}
                                    <b className='text-black'>
                                      <h5>{params[0].ae_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{params[0].ae}</h5>
                                    </b>
                                  </div>{' '}
                                </small>
                              </Stack>
                            </Card.Text>
                          </Col>
                        </Row>
                      </OverlayTrigger>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <motion.div
                  initial='hidden'
                  custom={3}
                  variants={variants2}
                  whileInView='visible'
                  viewport={{ amount: 0.1, once: true }}
                >
                  <Card border='light' className='shadow1'>
                    <Card.Body>
                      <OverlayTrigger
                        placement='bottom'
                        overlay={
                          <Popover>
                            <Popover.Body>
                              <div className='text-success'>
                                Параметр заражения между инфицированным{' '}
                                <i>I(t)</i> и восприимчивым населением{' '}
                                <i>S(t)</i>, который связан с контагиозностью
                                вируса и социальными факторами
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Row>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Title className='text-success'>
                              <h1 align='center' style={{ fontSize: '80px' }}>
                                {'\u03B1'}
                                <sub style={{ fontSize: '25px' }}>i</sub>
                              </h1>
                            </Card.Title>
                          </Col>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Text className=''>
                              <Stack className=''>
                                <small>
                                  <div className='text-muted'>
                                    среднее{' '}
                                    <b className='text-black'>
                                      <h5>{params[1].ai_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{params[1].ai}</h5>
                                    </b>
                                  </div>{' '}
                                </small>
                              </Stack>
                            </Card.Text>
                          </Col>
                        </Row>
                      </OverlayTrigger>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <motion.div
                  initial='hidden'
                  custom={4}
                  variants={variants2}
                  whileInView='visible'
                  viewport={{ amount: 0.1, once: true }}
                >
                  <Card border='light' className='shadow1'>
                    <Card.Body>
                      <OverlayTrigger
                        placement='bottom'
                        overlay={
                          <Popover>
                            <Popover.Body>
                              <div className='text-success'>
                                Доля госпитализированных случаев <i>H(t)</i>,
                                находящихся в критическом состоянии и требующих
                                подключения аппарата ИВЛ
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Row>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Title className=' text-success'>
                              <h1
                                align='center'
                                className=''
                                style={{ fontSize: '80px' }}
                              >
                                {'\u03B5'}
                                <sub style={{ fontSize: '25px' }}>hc</sub>
                              </h1>
                            </Card.Title>
                          </Col>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Text className=''>
                              <Stack className=''>
                                <small>
                                  <div className='text-muted'>
                                    среднее{' '}
                                    <b className='text-black'>
                                      <h5>{params[2].ehc_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{params[2].ehc}</h5>
                                    </b>
                                  </div>{' '}
                                </small>
                              </Stack>
                            </Card.Text>
                          </Col>
                        </Row>
                      </OverlayTrigger>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <motion.div
                  initial='hidden'
                  custom={4}
                  variants={variants2}
                  whileInView='visible'
                  viewport={{ amount: 0.1, once: true }}
                >
                  <Card border='light' className='shadow1'>
                    <Card.Body>
                      <OverlayTrigger
                        placement='bottom'
                        overlay={
                          <Popover>
                            <Popover.Body>
                              <div className='text-success'>
                                Смертность в результате COVID-19
                              </div>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <Row>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Title className='text-success'>
                              <h1 align='center' style={{ fontSize: '80px' }}>
                                {'\u03BC'}
                              </h1>
                            </Card.Title>
                          </Col>
                          <Col sm={6} md={6} xs={6} lg={6}>
                            <Card.Text className=''>
                              <Stack className=''>
                                <small>
                                  <div className='text-muted'>
                                    среднее{' '}
                                    <b className='text-black'>
                                      <h5>{params[3].m_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{params[3].m}</h5>
                                    </b>
                                  </div>{' '}
                                </small>
                              </Stack>
                            </Card.Text>
                          </Col>
                        </Row>
                      </OverlayTrigger>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>

            <SubBlock
              title={
                'Базовый индекс репродукции COVID-19 в Новосибирской области и прогноз'
              }
              chartId={'chart9'}
              chartOptions={chartOptions_bpR0_}
              chartData={chartData_bpR0}
              height={'75%'}
            />
          </div>
        </Collapse>
        {/*  */}
        {/* SeirhcdBlock */}
        <BlockHeader
          open={openM}
          setOpen={setOpenM}
          description={headers[1].description}
          title={'Моделирование'}
        />

        <Collapse in={openM}>
          <div id='example-collapse-text'>
            <SubBlock
              title={'Кривые SEIRHCD и реальные данные'}
              navFun={fetchSeirhcdData}
              chartId={'chart4'}
              chartOptions={chartOptions}
              chartData={chartData_T}
              block={'train'}
            />

            {status === 'success' ? (
              <SubBlock
                title={
                  'Базовый индекс репродукции COVID-19 в Новосибирской области'
                }
                chartId={'chart5'}
                chartOptions={chartOptions_R0_}
                chartData={chartData_tR0}
              />
            ) : (
              ''
            )}
            {status === 'success' ? (
              <SubBlock
                title={
                  'Восстановленные параметры модели COVID-19 для Новосибирской области'
                }
                chartId={'chart8'}
                chartOptions={chartOptions_P_}
                chartData={chartData_tP}
              />
            ) : (
              ''
            )}
          </div>
        </Collapse>
        {/*  */}
        <BlockHeader
          open={openV}
          setOpen={setOpenV}
          description={headers[2].description}
          title={'Валидация модели'}
        />

        <Collapse in={openV}>
          <div id='example-collapse-text'>
            <SubBlock
              title={'Кривые SEIRHCD и реальные данные'}
              navFun={fetchSeirhcdData}
              chartId={'chart6'}
              chartOptions={chartOptions}
              chartData={chartData_V}
              block={'valid'}
            />

            {status === 'success' ? (
              <SubBlock
                title={
                  'Базовый индекс репродукции COVID-19 в Новосибирской области'
                }
                chartId={'chart3'}
                chartOptions={chartOptions_R0_}
                chartData={chartData_vR0}
              />
            ) : (
              ''
            )}
            {status === 'success' ? (
              <SubBlock
                title={
                  'Восстановленные параметры модели COVID-19 для Новосибирской области'
                }
                chartId={'chart7'}
                chartOptions={chartOptions_P_}
                chartData={chartData_vP}
              />
            ) : (
              ''
            )}
          </div>
        </Collapse>
      </Card>
    </>
  )
}
