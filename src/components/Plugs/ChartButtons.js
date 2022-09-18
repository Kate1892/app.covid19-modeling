import React from 'react'
import { BsZoomOut, BsInfo, BsZoomIn } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'
import { download_chart, zoom_chart } from '../../utils/ChartFun'
import { variantsY as variants, AnimationV } from '../Animation/Animation'
import {
  Container,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Popover,
  Spinner,
  Alert,
  Tab,
} from 'react-bootstrap'

export const ChartButtons = ({ chartId, onClFun }) => {
  return (
    <Row className='my-2'>
      <Col xs={12} sm={12} md={12} lg={8}></Col>
      <Col xs={12} sm={12} md={12} lg={4}>
        <AnimationV variants={variants} viewport={{ amount: 0.1, once: true }}>
          <OverlayTrigger
            placement='left'
            overlay={
              <Popover>
                <Popover.Body>
                  <small className='text-muted'>
                    Чтобы скрыть отображаемые данные - кликните по их названиям
                  </small>
                </Popover.Body>
              </Popover>
            }
          >
            <Button
              variant='outline-secondary'
              size='sm'
              className='align-right mx-1'
              onClick={e => zoom_chart(e)}
            >
              <BsInfo size={18} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement='left'
            overlay={
              <Popover>
                <Popover.Body>
                  <small className='text-muted'>
                    Для приближения - выделите необходимую область или
                    прокрутите колесо мыши.
                  </small>
                </Popover.Body>
              </Popover>
            }
          >
            <Button
              variant='outline-secondary'
              size='sm'
              className='align-right mx-1'
              onClick={e => zoom_chart(e)}
            >
              <BsZoomIn />
            </Button>
          </OverlayTrigger>
          <Button
            variant='outline-secondary'
            size='sm'
            className='mx-1'
            // onClick={onClFun}
          >
            <BsZoomOut />
          </Button>
          <Button
            variant='outline-secondary'
            size='sm'
            className=''
            onClick={e => download_chart(e, chartId)}
          >
            <FiDownload />
          </Button>
        </AnimationV>
      </Col>
    </Row>
  )
}
