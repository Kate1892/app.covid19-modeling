import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { CollapseParamCSV } from './CollapseParamCSV'
import { BsDownload } from 'react-icons/bs'
import { AnimationV } from '../Animation/Animation'

export const DataCard = ({ name, href, dataArray, strInfo, variants }) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <AnimationV variants={variants}>
        <Card className='shadow1 my-1'>
          <a href={href} style={{ textDecoration: 'none' }} className=''>
            <Card.Body className='datacardcol'>
              <Card.Title>
                <h5 align='center' style={{ fontSize: '20px', align: 'left' }}>
                  <BsDownload /> {name}
                </h5>
              </Card.Title>
            </Card.Body>
          </a>
          <Card.Footer>
            <CollapseParamCSV dataArray={dataArray} strInfo={strInfo} />
          </Card.Footer>
        </Card>
      </AnimationV>
    </Col>
  )
}
