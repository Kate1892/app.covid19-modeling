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
import { OptionItem } from './OptionItem'

import {
  variantsX as variants,
  variantsY as variants2,
} from '../../components/Animation/Animation'

import { SEIRHCDHeader } from '../../components/SEIRHCDcontent/SEIRHCDHeader'
import { BlockHeader } from '../../components/SEIRHCDcontent/BlockHeader'
import { ChartButtons } from '../../components/Plugs/ChartButtons'
import { headers } from '../../components/SEIRHCDcontent/BlockHeaderInfo'
import { SubBlock } from '../../components/SEIRHCDcontent/SubBlock'

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

export const ModelingSEIR_HCD = () => {
  const lastDate2 = () => {
    axios.get('https://server.covid19-modeling.ru/datesSEIR').then(res => {
      setLastsData(res.data.dates[res.data.dates.length - 1].data)
    })
  }

  const dates = []
  const [dates2, setdates2] = useState(dates)
  const [lastData, setLastsData] = useState(0)

  const datesOption = () => {
    axios.get('https://server.covid19-modeling.ru/datesSEIR').then(res => {
      for (const dataObj of res.data.dates) {
        dates.push({ date: dataObj.data })
      }
      dates.reverse()
      setdates2(dates)
    })
  }

  const [openBS, setOpenBS] = useState(true)
  const [openM, setOpenM] = useState(false)
  const [openV, setOpenV] = useState(false)

  const [chartData_bsR0, setChartData_bsR0] = useState({
    datasets: [],
  })
  const [chartOptions_bsR0, setChartOptions_bsR0] = useState({})

  const forecasts_R0 = selected => {
    let data = []
    let mean = []
    let max = []
    let min = []
    let tr = []
    let tr_min = []
    let tr_max = []
    let datatype = selected
    let dataT = selected
    axios({
      url: 'https://server.covid19-modeling.ru/api/forecasts_train/',
      method: 'POST',
      data: { dataT },
    })
      .then(res => {
        for (const dataObj of res.data) {
          data.push(dataObj.Date)
          tr.push(dataObj.R0_mean)
          tr_min.push(dataObj.R0_min)
          tr_max.push(dataObj.R0_max)
          mean.push(dataObj.R0_mean)
          max.push(dataObj.R0_max)
          min.push(dataObj.R0_min)
        }
        axios({
          url: 'https://server.covid19-modeling.ru/api/forecasts/',
          method: 'POST',
          data: { datatype },
        }).then(res => {
          for (const dataObj of res.data) {
            data.push(dataObj.Date)
            mean.push(dataObj.R0_mean)
            max.push(dataObj.R0_max)
            min.push(dataObj.R0_min)
          }
          setChartData_bsR0({
            labels: data,
            datasets: [
              {
                label: 'реальные данные',
                data: tr_min,
                fill: false,
                borderColor: 'rgba(2, 117, 216, 0.1)',
                backgroundColor: 'rgba(2, 117, 216, 0.1)',
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
              {
                label: 'реальные данные',
                data: tr_max,
                fill: '-1',
                borderColor: 'rgba(2, 117, 216, 0.1)',
                backgroundColor: 'rgba(2, 117, 216, 0.1)',
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
              {
                label: 'реальные данные',
                data: tr,
                fill: false,
                borderColor: 'rgba(2, 117, 216, 1)',
                backgroundColor: 'rgba(2, 117, 216, 1)',
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
              {
                label: 'модель',
                data: min,
                fill: false,
                borderColor: 'rgba(217, 83, 79, 0.1)',
                backgroundColor: 'rgba(217, 83, 79, 0.1)',
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
              {
                label: 'модель',
                data: max,
                fill: '-1',
                borderColor: 'rgba(217, 83, 79, 0.1)',
                backgroundColor: 'rgba(217, 83, 79, 0.1)',
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
              {
                label: 'модель',
                data: mean,
                fill: false,
                borderColor: 'rgba(217, 83, 79, 1)',
                backgroundColor: 'rgba(217, 83, 79, 1)',
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
            ],
          })
          setChartOptions_bsR0({
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'xy',
                },
                zoom: {
                  wheel: {
                    enabled: true,
                    speed: 0.1,
                  },
                  drag: {
                    enabled: true,
                  },
                  pan: { enabled: true },
                  pinch: {
                    enabled: true,
                  },
                  mode: 'xy',
                },
              },
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                align: 'start',
                text: '',
              },
            },
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  const [chartData_pred, setChartData_pred] = useState({
    datasets: [],
  })
  const [chartOptions_pred, setChartOptions_pred] = useState({})

  const forecasts_new = (stype, datatype) => {
    let data = []
    let mean = []
    let max = []
    let min = []
    let tr = []
    let name = 'Новые выявленные случаи'
    axios({
      url: 'https://server.covid19-modeling.ru/api/forecasts_true/',
      method: 'POST',
      data: { datatype },
    })
      .then(res => {
        for (const dataObj of res.data) {
          data.push(dataObj.Date)
          if (stype === 1) {
            name = 'Новые выявленные случаи'
            tr.push(dataObj.new_diagnoses)
          } else if (stype === 2) {
            name = 'Критически больные, С'
            tr.push(dataObj.ventilation)
          } else if (stype === 3) {
            name = 'Умершие, D'
            tr.push(dataObj.cum_deaths)
          }
          mean.push(0)
        }
        axios({
          url: 'https://server.covid19-modeling.ru/api/forecasts',
          method: 'POST',
          data: { datatype },
        }).then(res => {
          setAE(
            Math.round(
              parseFloat(res.data[res.data.length - 1].alpha_e_std) * 1000
            ) / 1000
          )
          setAI(
            Math.round(
              parseFloat(res.data[res.data.length - 1].alpha_i_std) * 1000
            ) / 1000
          )
          setEhc(
            Math.round(
              parseFloat(res.data[res.data.length - 1].eps_hc_std) * 1000
            ) / 1000
          )
          setM(
            Math.round(
              parseFloat(res.data[res.data.length - 1].mu_std) * 1000
            ) / 1000
          )
          setAE_mean(
            Math.round(
              parseFloat(res.data[res.data.length - 1].alpha_e_mean) * 1000
            ) / 1000
          )
          setAI_mean(
            Math.round(
              parseFloat(res.data[res.data.length - 1].alpha_i_mean) * 1000
            ) / 1000
          )
          setEhc_mean(
            Math.round(
              parseFloat(res.data[res.data.length - 1].eps_hc_mean) * 1000
            ) / 1000
          )
          setM_mean(
            Math.round(
              parseFloat(res.data[res.data.length - 1].mu_mean) * 1000
            ) / 1000
          )
          for (const dataObj of res.data) {
            data.push(dataObj.Date)
            if (stype === 1) {
              mean.push(dataObj.fk_mean)
              max.push(dataObj.fk_max)
              min.push(dataObj.fk_min)
            } else if (stype === 2) {
              mean.push(dataObj.C_mean)
              max.push(dataObj.C_max)
              min.push(dataObj.C_min)
            } else if (stype === 3) {
              mean.push(dataObj.D_mean)
              max.push(dataObj.D_max)
              min.push(dataObj.D_min)
            }
          }
          setChartData_pred({
            labels: data,
            datasets: [
              {
                label: 'реальные данные',
                data: tr,
                fill: false,
                borderColor: 'rgba(2, 117, 216, 1)',
                backgroundColor: 'rgba(2, 117, 216, 1)',
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
              {
                label: 'модель',
                data: mean,
                fill: false,
                borderColor: 'rgba(217, 83, 79, 1)',
                backgroundColor: 'rgba(217, 83, 79, 1)',
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2,
              },
            ],
          })
          setChartOptions_pred({
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'xy',
                },
                zoom: {
                  wheel: {
                    enabled: true,
                    speed: 0.1,
                  },
                  drag: {
                    enabled: true,
                  },
                  pan: { enabled: true },
                  pinch: {
                    enabled: true,
                  },
                  mode: 'xy',
                },
              },
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                align: 'start',
                text: name,
              },
            },
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const [prognose_type, setPrognose_type] = useState(1)
  const [prognose_data, setPrognose_data] = useState(dates[0])

  //1 - новые выявленные случаи
  //2 - критически больные
  //3 - умершие

  const [ae, setAE] = useState()
  const [ai, setAI] = useState()
  const [ehc, setEhc] = useState()
  const [m, setM] = useState()
  const [ae_mean, setAE_mean] = useState()
  const [ai_mean, setAI_mean] = useState()
  const [ehc_mean, setEhc_mean] = useState()
  const [m_mean, setM_mean] = useState()

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

  const chartOptions = { ...chartOptions_ }
  const chartOptions_P_ = { ...chartOptions_P }
  const chartOptions_R0_ = { ...chartOptions_R0 }

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
    datesOption()
  }, [])

  useEffect(() => {
    lastDate2()
  }, [])

  useEffect(() => {
    lastDate2()
    setPrognose_data(lastData)
    forecasts_new(1, lastData)
  }, [lastData])

  useEffect(() => {
    lastDate2()
    forecasts_R0(lastData)
  }, [lastData])

  return (
    <>
      <Card className=' mx-auto' border='light' bg='light'>
        <SEIRHCDHeader />

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
                <motion.div
                  initial='hidden'
                  custom={2}
                  variants={variants}
                  whileInView='visible'
                  viewport={{ amount: 0.1, once: true }}
                >
                  <ListGroup className='mx-3 shadow1 my-1'>
                    <ListGroup.Item
                      align='left'
                      className='bg-secondary text-secondary'
                    >
                      .
                    </ListGroup.Item>
                    <ListGroup.Item variant='light'>
                      <Row>
                        <Col xs={12} md={12} sm={12} lg={4}>
                          <Stack gap={0}>
                            <div>
                              {' '}
                              <p
                                align='left'
                                className='my-1 text-black text-small'
                              >
                                <small>Дата прогноза</small>
                              </p>
                            </div>
                            <div>
                              {' '}
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
                            {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              touched,
                              isValid,
                              errors,
                              resetForm,
                              setFieldValue,
                            }) => (
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
                                      forecasts_new(prognose_type, selected)
                                      forecasts_R0(selected)
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
                                      forecasts_new(stype, prognose_data)
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
                </motion.div>
              </Col>
              <Col xs={12} md={8}>
                <ChartButtons chartId={'chart2'} />
                {/* forecasts_new(prognose_type, prognose_data) */}
                <div style={{ height: '20rem' }}>
                  <Bar
                    id='chart2'
                    options={chartOptions_pred}
                    data={chartData_pred}
                    height='90%'
                  />
                </div>
              </Col>
            </Row>
            <motion.div
              initial='hidden'
              custom={2}
              variants={variants2}
              whileInView='visible'
              viewport={{ amount: 0.1, once: true }}
              className='mx-3'
            >
              <hr />
              <h4 className='mx-5 text-secondary'>
                Текущие параметры модели и их доверительный интервал
              </h4>
            </motion.div>
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
                                      <h5>{ae_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{ae}</h5>
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
                                      <h5>{ai_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{ai}</h5>
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
                                      <h5>{ehc_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{ehc}</h5>
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
                                      <h5>{m_mean}</h5>
                                    </b>
                                  </div>
                                  <div className='text-muted'>
                                    std{' '}
                                    <b className='text-black'>
                                      <h5>{m}</h5>
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
              chartOptions={chartOptions_bsR0}
              chartData={chartData_bsR0}
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
