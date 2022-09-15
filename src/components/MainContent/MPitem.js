import React from 'react'
import { ListGroup } from 'react-bootstrap'

export const MPitem = ({ href, description }) => {
  return (
    <>
      <ListGroup.Item as='li'>
        <a
          href={href}
          className='nav-link d-inline text-black'
          target='_blank'
          rel='noopener noreferrer'
        >
          {description}
        </a>
      </ListGroup.Item>
    </>
  )
}
