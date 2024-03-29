import { Container, Card, Col, Row } from 'react-bootstrap'
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
} from 'react-icons/bs'

export const Main_contacts = () => {
  return (
    <Card
      border='light'
      className='text-center bg-secondary text-white my-3 shadow1'
    >
      <Card.Body>
        <Row
          className='justify-content-md-center'
          style={{
            width: '100%',
          }}
        >
          <Col xs={6} md={4}>
            <Container className=''>
              <BsFillGeoAltFill size={25} className='my-1' />
              <h5 className='text-center'> Адрес</h5>
            </Container>
            <p className='text-center'>
              {' '}
              ул.Лавреньтева 6, ком.2-431, ИВМиМГ СО РАН, г.Новосибирск{' '}
            </p>
          </Col>
          <Col xs={6} md={4}>
            <Container className=''>
              <BsFillTelephoneFill size={25} className='my-1' />
              <h5 className='text-center'> Телефон</h5>
            </Container>
            <p className='text-center'> +7 (383) 330-84-60 </p>
          </Col>
          <Col xs={6} md={4}>
            <Container className=''>
              <BsFillEnvelopeFill size={25} className='my-1' />
              <h5 className='text-center'> Email</h5>
            </Container>
            <p className='text-center'> info@covid19-modeling.ru </p>
          </Col>
        </Row>
      </Card.Body>

      <YMaps>
        <div>
          <Map
            defaultState={{
              center: [54.85136, 83.102482],
              zoom: 15,
              controls: [],
            }}
            width='100%'
          >
            <ZoomControl options={{ float: 'right' }} />
            <Placemark geometry={[54.85136, 83.102482]} />
          </Map>
        </div>
      </YMaps>
    </Card>
  )
}
