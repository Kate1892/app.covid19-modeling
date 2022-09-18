import React from 'react'
import { Col, Row, Button, Popover, OverlayTrigger } from 'react-bootstrap'

export const AOM_agParams = () => {
  return (
    <Row>
      <Col>
        <div>Не зависят от времени:</div>
        <small>
          <div>• возраст</div>
          <div>• пол</div>
          <div>• социальный статус</div>
          <div>• прогрессирование заболевания</div>
        </small>
      </Col>
      <Col>
        <div>Зависят от времени:</div>
        <small>
          <div>• эпид. статус:</div>
          <div>
            𝑆, 𝐸, 𝐼, 𝑅, 𝐻, 𝐶, 𝐷, 𝐴, 𝑀
            <OverlayTrigger
              placement='bottom'
              overlay={
                <Popover>
                  <Popover.Body>
                    <small className='text-success'>
                      <div>S – восприимчивые к заражению</div>
                      <div>E – зараженные незаразные</div>
                      <div>𝐼 – инфицированные</div>
                      <div>R – вылечившиеся</div>
                      <div>H – госпитализированные</div>
                      <div>C – больные в критическом состоянии</div>
                      <div>D – умершие</div>
                      <div>A - бессимптомные больные</div>
                      <div>M - больные в легкой форме</div>{' '}
                    </small>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button size='sm' variant='link' className='text-success'>
                ?
              </Button>
            </OverlayTrigger>
          </div>
          <div>• шанс быть протестированным</div>
        </small>
      </Col>
    </Row>
  )
}
