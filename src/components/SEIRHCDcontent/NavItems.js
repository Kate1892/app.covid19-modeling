import React from 'react'
import { NavItem, OverlayTrigger, Popover, Nav, Button } from 'react-bootstrap'

export const NavItems = ({ description, title, eKey, fun, params, block }) => {
  return (
    <Nav.Item>
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Popover>
            <Popover.Body>
              <div align='center' className='text-info'>
                {description}
              </div>
            </Popover.Body>
          </Popover>
        }
      >
        <Button
          size='sm'
          variant='outline-info'
          onClick={e => {
            fun(params.mean, params.max, params.min, params.title, block)
          }}
          className='mx-1'
        >
          <Nav.Link eventKey={eKey}>
            <b>{title}</b>
          </Nav.Link>
        </Button>
      </OverlayTrigger>
    </Nav.Item>
  )
}
