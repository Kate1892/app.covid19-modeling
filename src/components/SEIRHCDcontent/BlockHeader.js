import React from 'react'
import { BsFillCaretRightFill, BsFillCaretDownFill } from 'react-icons/bs'

import { Button, OverlayTrigger, Popover } from 'react-bootstrap'

export const BlockHeader = ({ open, setOpen, description, title }) => {
  return (
    <OverlayTrigger
      placement='bottom'
      overlay={
        <Popover>
          <Popover.Body>
            <div align='justify' className='text-black'>
              <small>{description}</small>
            </div>
          </Popover.Body>
        </Popover>
      }
    >
      <Button
        variant='outline-info'
        className='mx-3 my-2 bg-white'
        onClick={() => setOpen(!open)}
        aria-controls='example-fade-text'
        aria-expanded={open}
      >
        {open ? (
          <BsFillCaretDownFill size={15} />
        ) : (
          <BsFillCaretRightFill size={15} />
        )}{' '}
        {title}
      </Button>
    </OverlayTrigger>
  )
}
