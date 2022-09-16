import { Container, Row } from 'react-bootstrap'

import { NaviBar } from '../../components'
import {
  AltayData,
  NskData,
  OmskData,
} from '../../components/DataContent/DataInfo'

import AltayG from '../../images/gerbs/Altay_region_gerb.png'
import OmskG from '../../images/gerbs/Omsk_region_gerb.png'
import NskG from '../../images/gerbs/Novosibirsk_region_gerb.png'

import { AnimationV, variantsY } from '../../components/Animation/Animation'
import { DataHeader } from '../../components/DataContent/DataHeader'
import { DataCard } from '../../components/DataContent/DataCard'

export function Data() {
  return (
    <>
      <NaviBar expand={'lg'} bg={'dark'} variant='dark' />
      <Container
        className='my-3'
        style={{
          height: '120%',
        }}
      >
        <DataHeader
          name={'Данные по Новосибирской области'}
          image={NskG}
          variantsY={variantsY}
        />

        <Row className='mx-5 my-3'>
          {NskData.map(el => (
            <DataCard
              kay={el.key}
              name={el.title}
              href={el.href}
              dataArray={el.dataArray}
              strInfo={el.strInfo}
              variants={variantsY}
            />
          ))}
        </Row>

        <AnimationV variants={variantsY}>
          <hr />
        </AnimationV>

        <DataHeader
          name={'Данные по Омской области'}
          image={OmskG}
          variantsY={variantsY}
        />

        <Row className='mx-5 my-3'>
          {OmskData.map(el => (
            <DataCard
              kay={el.key}
              name={el.title}
              href={el.href}
              dataArray={el.dataArray}
              strInfo={el.strInfo}
              variants={variantsY}
            />
          ))}
        </Row>

        <AnimationV variants={variantsY}>
          <hr />
        </AnimationV>

        <DataHeader
          name={'Данные по Алтайскому краю'}
          image={AltayG}
          variantsY={variantsY}
        />

        <Row className='mx-5 my-3'>
          {AltayData.map(el => (
            <DataCard
              kay={el.key}
              name={el.title}
              href={el.href}
              dataArray={el.dataArray}
              strInfo={el.strInfo}
              variants={variantsY}
            />
          ))}
        </Row>
      </Container>
    </>
  )
}
