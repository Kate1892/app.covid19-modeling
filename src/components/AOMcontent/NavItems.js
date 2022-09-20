import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setNewChartData } from '../../redux/aomBlcok/slice'

export const NavItems = ({ key, prType, title }) => {
  const dispatch = useDispatch()
  return (
    <Nav.Item>
      <Button
        size='sm'
        variant='outline-info'
        onClick={() => dispatch(setNewChartData(prType))}
        className='mx-1 shadow3'
      >
        <Nav.Link className='hoverWhite' eventKey={key}>
          {title}
        </Nav.Link>
      </Button>
    </Nav.Item>
  )
}
