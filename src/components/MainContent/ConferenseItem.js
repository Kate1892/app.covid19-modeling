import { forwardRef } from 'react'
import { Container, Card, Image, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

export const ConferenseItem = forwardRef((props, ref) => {
  return (
    <Col className='my-3' ref={ref}>
      <a href={props.conf.hreff}>
        <Card
          border='light'
          style={({ width: '24rem' }, { minWidth: '20rem' })}
          className='mx-auto shadow1 align-center'
        >
          <Container
            style={({ width: '9rem' }, { height: '9rem' })}
            className=' text-center'
          >
            <Image
              variant='top'
              className='my-5'
              style={
                ({ width: props.conf.width }, { height: props.conf.height })
              }
              src={props.conf.image}
              roundedCircle={props.conf.rounded}
              fluid
            />
          </Container>
          <Card.Body>
            <Card.Title className='text-center'>
              <a
                href={props.conf.hreff}
                className='nav-link d-inline text-black'
                target='_blank'
                rel='noopener noreferrer'
              >
                {props.conf.name}
              </a>
            </Card.Title>
          </Card.Body>
        </Card>
      </a>
    </Col>
  )
})

export const MConferenseItem = motion(ConferenseItem)

export const MCitem2 = ({ name, image, hreff, width, height, rounded }) => {
  return (
    <>
      <Col xs={12} md={6} className='justify-xs-center'>
        <a href={hreff}>
          <Card
            border='light'
            className='mx-auto my-2 align-center shadow1'
            style={{ minWidth: '20rem' }}
          >
            <Container className=' text-center' style={{ height: '9rem' }}>
              <Image
                variant='top'
                className='my-5'
                style={({ width: width }, { height: height })}
                src={image}
                roundedCircle={rounded}
                fluid
              />
            </Container>
            <Card.Body>
              <Card.Title className='text-center'>
                <a
                  href={hreff}
                  className='nav-link d-inline text-black'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {name}
                </a>
              </Card.Title>
            </Card.Body>
          </Card>
        </a>
      </Col>
    </>
  )
}
