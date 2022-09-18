import React from 'react'
import { AnimationV } from '../Animation/Animation'
import {
  variantsX as variants,
  variantsY as variants2,
} from '../../components/Animation/Animation'
import { NavItemsInfo } from './NavItemsInfo'
import { NavItems } from './NavItems'
import { Line } from 'react-chartjs-2'
import { Container, Nav, Button } from 'react-bootstrap'
import { ChartButtons } from '../Plugs/ChartButtons'

export const SubBlock = ({
  title,
  navFun,
  chartId,
  chartOptions,
  chartData,
  height,
  block,
}) => {
  return (
    <>
      {' '}
      <AnimationV variants={variants2}>
        <h4 className='mx-5 my-2 text-secondary'>{title}</h4>
      </AnimationV>
      {navFun ? (
        <AnimationV variants={variants2}>
          <Nav variant='pills' defaultActiveKey='1' className='my-2'>
            <Nav.Item>
              <Button
                className='mx-3'
                size='sm'
                variant='outline-info'
                onClick={e => {
                  navFun('fk_mean', 'fk_max', 'fk_min', 'new_diagnoses', block)
                }}
                style={{ color: '#FFFFFF' }}
              >
                <Nav.Link eventKey='1'>Новые выявленные случаи</Nav.Link>
              </Button>
            </Nav.Item>
            {NavItemsInfo.map(el => (
              <NavItems
                key={el.id}
                description={el.description}
                title={el.title}
                eKey={el.key}
                fun={navFun}
                params={el.params}
                block={block}
              />
            ))}
          </Nav>
        </AnimationV>
      ) : (
        ''
      )}
      <AnimationV variants={variants2}>
        <ChartButtons chartId={chartId} />
        {/* не было - */}
        <Container style={{ height: '20rem' }}>
          <Line
            id={chartId}
            options={chartOptions}
            data={chartData}
            height={height ? height : '90%'}
          />
        </Container>
      </AnimationV>
    </>
  )
}
