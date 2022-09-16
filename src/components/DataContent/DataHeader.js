import React from 'react'
import { AnimationV } from '../Animation/Animation'
import { Row, Col, Image } from 'react-bootstrap'

export const DataHeader = ({ name, image, variantsY }) => {
  return (
    <AnimationV variants={variantsY} cn={'mx-3 my-3'}>
      <Row>
        <Col xs={8} md={10} lg={10}>
          <div>
            <h4 className='mx-5 text-secondary'>{name}</h4>
          </div>
        </Col>
        <Col xs={4} md={2} lg={2}>
          <div>
            <Image
              variant='top'
              style={({ width: '4rem' }, { height: '4rem' })}
              className='mx-5'
              src={image}
              rounded
              fluid
            />
          </div>
        </Col>
      </Row>
    </AnimationV>
  )
}
