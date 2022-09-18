import { Container, Card, ListGroup } from 'react-bootstrap'
import { MPitem } from './MPitem'
import { publications } from './MPInfo'

export const Main_publications = () => {
  return (
    <Card border='secondary' className='my-3 shadow1'>
      <Container className='mx-1 my-1'>
        <ListGroup as='ol' variant='flush' numbered>
          {publications.map(pub => (
            <MPitem
              key={pub.id}
              href={pub.href}
              description={pub.description}
            />
          ))}
        </ListGroup>
      </Container>
    </Card>
  )
}
