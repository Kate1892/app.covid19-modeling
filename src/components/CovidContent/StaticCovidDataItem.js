import { forwardRef } from 'react'
import { Card, Col, Spinner } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Status } from '../../redux/types'

const StaticCovidDataItem = forwardRef((props, ref) => {
  return (
    <Col xs={12} md={4} ref={ref}>
      <Card
        border='light'
        style={({ width: '5rem' }, { height: '8rem' })}
        className='mx-2 my-2 shadow1'
      >
        <Card.Body>
          <Card.Title className='text-center text-info'>
            {props.status === Status.ERROR ? (
              <div></div>
            ) : props.status === Status.LOADING ? (
              <Spinner
                style={{ position: 'absolute', top: '10%' }}
                size='sm'
                animation='border'
                variant='info'
              />
            ) : (
              <div>
                {isNaN(props.last.value) ? (
                  <p>нет данных</p>
                ) : (
                  <h3>{props.last.value}</h3>
                )}
              </div>
            )}
          </Card.Title>
          <Card.Text className='text-center'>
            <small>{props.last.name}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer
          className='bg-white shadow1 mx-3 '
          style={{ width: '12rem' }}
        >
          <small className='text-muted'>
            <small className='text-center'>
              По данным на {props.last.date ? props.last.date : <div></div>}
            </small>
          </small>
        </Card.Footer>
      </Card>
    </Col>
  )
})
export const MSCDItem = motion(StaticCovidDataItem)
export { StaticCovidDataItem }
