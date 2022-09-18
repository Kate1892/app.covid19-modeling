import { useSelector } from 'react-redux'
import { Status } from '../../redux/types'

import { Container, Row, Spinner, Tab } from 'react-bootstrap'

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

import { Line } from 'react-chartjs-2'
import zoomPlugin from 'chartjs-plugin-zoom'
import scales from 'chartjs-plugin-zoom'

import { variantsY as variants, AnimationV } from '../Animation/Animation'
import { MSCDItem } from './StaticCovidDataItem'
import { download_chart, zoom_chart } from '../../utils/ChartFun'
import { Plugs } from '..'
import { ChartButtons } from '../Plugs/ChartButtons'

import { selectCovData } from '../../redux/covidDataPage/selectors'

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

ChartJS.register(zoomPlugin, scales)

export const StaticCovidData = ({ region }) => {
  const { status, lastData, chartData, chartOptions } =
    useSelector(selectCovData)

  const chartOptions2 = { ...chartOptions }

  return (
    <Tab.Pane eventKey={region.eventKey}>
      <div className='mx-3 my-3'>
        <div>
          <Container>
            <Row
              style={{
                width: '100%',
              }}
            >
              {lastData.map((last, index) => (
                <MSCDItem
                  status={status}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.05 }}
                  custom={index + 1}
                  variants={variants}
                  key={index}
                  last={last}
                />
              ))}
            </Row>
          </Container>
          <div align='center' className='my-4'>
            <ChartButtons chartId={'chart10'} />
            {/* chart */}
            {status === Status.ERROR ? (
              <Plugs />
            ) : status === Status.LOADING ? (
              <div
                style={{
                  height: '400px',
                }}
              >
                <Spinner
                  relative='true'
                  style={{ position: 'absolute', top: '50%' }}
                  animation='border'
                  variant='info'
                />
              </div>
            ) : (
              <div style={{ height: '25rem' }}>
                <Line
                  id='chart10'
                  data={chartData}
                  options={chartOptions2}
                  height='90%'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Tab.Pane>
  )
}
