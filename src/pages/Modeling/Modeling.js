import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAomData } from '../../redux/aomBlcok/asyncAction'
import { selectAomdData } from '../../redux/aomBlcok/selectors'
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Nav,
  Stack,
  OverlayTrigger,
  Popover,
  Spinner,
  Tabs,
  Tab,
} from 'react-bootstrap'
import { BsInfo, BsZoomIn } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'

import {
  Chart as ChartJS,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import zoomPlugin from 'chartjs-plugin-zoom'

import { NaviBar, Plugs } from '../../components'
import { ModelingSEIR_HCD } from '../../pages'

import {
  AnimationV,
  variantsX as variants,
  variantsY as variants2,
} from '../../components/Animation/Animation'
import { download_chart, zoom_chart } from '../../utils/ChartFun'
import { AomHeader } from '../../components/AOMcontent/AomHeader'
import { navItemsInfo } from '../../components/AOMcontent/NavItemsInfo'
import { NavItems } from '../../components/AOMcontent/NavItems'
import { Status } from '../../redux/types'
import { AomForm } from '../../components/AOMcontent/AomForm'

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

export function Modeling() {
  const [population_data, setPopulation_data] = useState(2798170)
  const [region_data, setRegion_data] = useState(1)
  const [n_future_day, setN_future_day] = useState(45)
  const [init_inf, setInit_inf] = useState(20)

  const dispatch = useDispatch()
  const { status, chartData, chartOptions_ } = useSelector(selectAomdData)
  const chartOptions_copy = { ...chartOptions_ }

  useEffect(() => {
    dispatch(
      fetchAomData({
        population_data: population_data,
        region_data: region_data,
        n_future_day: n_future_day,
        init_inf: init_inf,
        key: 'defaultCharts',
      })
    )
  }, [])

  return (
    <>
      <NaviBar expand={'lg'} bg={'dark'} variant='dark' />
      <Container
        className='my-3'
        style={{
          height: '120%',
        }}
      >
        <Tabs justify defaultActiveKey='AOM' id='uncontrolled-tab-example'>
          <Tab eventKey='AOM' title='Агентная модель'>
            <Card className='text-center mx-auto' border='light' bg='light'>
              <AomHeader />
              <Row>
                <Col sm={12} xs={12} md={12} lg={4}>
                  <AnimationV variants={variants} custom={1}>
                    <AomForm
                      population_data={population_data}
                      setPopulation_data={setPopulation_data}
                      region_data={region_data}
                      setRegion_data={setRegion_data}
                      n_future_day={n_future_day}
                      setN_future_day={setN_future_day}
                      init_inf={init_inf}
                      setInit_inf={setInit_inf}
                    />
                  </AnimationV>
                </Col>
                <Col sm={12} xs={12} md={12} lg={8}>
                  <Container>
                    <Stack>
                      <div className='ms-auto'>
                        <AnimationV variants={variants} custom={1}>
                          <Button
                            variant='outline-danger'
                            size='sm'
                            // onClick={}
                          >
                            Показать данные
                          </Button>
                          <OverlayTrigger
                            placement='left'
                            overlay={
                              <Popover>
                                <Popover.Body>
                                  <small className='text-muted'>
                                    Чтобы скрыть отображаемые данные - кликните
                                    по их названиям
                                  </small>
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <Button
                              variant='outline-secondary'
                              size='sm'
                              className='align-right mx-1'
                              onClick={e => zoom_chart(e)}
                            >
                              <BsInfo size={18} />
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            placement='left'
                            overlay={
                              <Popover>
                                <Popover.Body>
                                  <small className='text-muted'>
                                    Для приближения - выделите необходимую
                                    область или прокрутите колесо мыши.
                                  </small>
                                </Popover.Body>
                              </Popover>
                            }
                          >
                            <Button
                              variant='outline-secondary'
                              size='sm'
                              className=' mx-1'
                              onClick={e => zoom_chart(e)}
                            >
                              <BsZoomIn />
                            </Button>
                          </OverlayTrigger>
                          <Button
                            variant='outline-secondary'
                            size='sm'
                            className=''
                            onClick={e => download_chart(e, 'chart')}
                          >
                            <FiDownload />
                          </Button>
                        </AnimationV>
                      </div>
                    </Stack>

                    <div style={{ height: '25rem' }}>
                      {status === Status.ERROR ? (
                        <Plugs />
                      ) : status === Status.LOADING ? (
                        <div
                          style={{
                            height: '400px',
                          }}
                        >
                          <Spinner
                            style={{ position: 'absolute', top: '50%' }}
                            animation='border'
                            variant='info'
                          />
                        </div>
                      ) : (
                        <Line
                          id='chart'
                          data={chartData}
                          options={chartOptions_copy}
                          height='150%'
                        />
                      )}
                    </div>

                    <AnimationV variants={variants2}>
                      <Nav
                        variant='pills'
                        defaultActiveKey='1'
                        className='my-2'
                      >
                        {navItemsInfo.map(el => (
                          <NavItems
                            id={el.id}
                            key={el.id}
                            title={el.title}
                            prType={el.prType}
                            population_data={population_data}
                            region_data={region_data}
                            n_future_day={n_future_day}
                            init_inf={init_inf}
                          />
                        ))}
                      </Nav>
                    </AnimationV>
                  </Container>
                </Col>
              </Row>
            </Card>
          </Tab>
          <Tab eventKey='SEIR-HCD' title='SEIR-HCD'>
            <ModelingSEIR_HCD />
          </Tab>
        </Tabs>
      </Container>
    </>
  )
}
