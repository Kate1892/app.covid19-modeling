import { forwardRef } from 'react'
import { Container, Card, Image, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const TeamItem = forwardRef((props, ref) => {
  return (
    <Col xs={12} md={6} lg={4} className='my-1' ref={ref}>
      <Card
        border='light'
        style={{ height: '15rem' }}
        className='mx-auto shadow1'
      >
        <Container
          style={({ width: '10rem' }, { height: '10rem' })}
          className='my-1 text-center'
        >
          <Image
            variant='bottom'
            src={props.post.image}
            roundedCircle
            fluid
            style={{ maxWidth: props.post.wid }}
          />
        </Container>
        <Card.Body>
          <Card.Title className='text-center'>{props.post.name}</Card.Title>
          <Card.Text className='text-center'>
            {props.post.institution}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
})
const MTeamItem = motion(TeamItem)
export default MTeamItem
export { TeamItem }
