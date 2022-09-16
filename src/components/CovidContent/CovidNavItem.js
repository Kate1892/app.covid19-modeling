import React from 'react'
import { AnimationV } from '../Animation/Animation'
import { Button, Nav, OverlayTrigger, Popover } from 'react-bootstrap'
import { forwardRef } from 'react'

const MainButton = forwardRef((props, ref) => {
  return (
    <AnimationV variants={props.variants} ref={ref}>
      <Button
        className='mx-1 shadow3'
        size='sm'
        variant='outline-info'
        style={{ color: '#FFFFFF' }}
      >
        <Nav.Link eventKey={props.eventKey}>{props.title}</Nav.Link>
      </Button>
    </AnimationV>
  )
})

export const CovidNavItem = ({
  k,
  desc,
  charact,
  title,
  eventKey,
  variants,
}) => {
  const ref = React.createRef()
  return (
    <Nav.Item key={k}>
      <OverlayTrigger
        ref={ref}
        placement='bottom'
        overlay={
          <Popover>
            <Popover.Body>
              <div align='start' className='text-black'>
                {desc}
              </div>
              <div style={{ fontSize: '10px' }}>
                <div>Население: {charact.popul} ч.</div>
                <div>Площадь: {charact.area} км²</div>
                <div>Плотность: {charact.density} чел./км²</div>
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <MainButton title={title} eventKey={eventKey} variants={variants} />
      </OverlayTrigger>
    </Nav.Item>
  )
}
