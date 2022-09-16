import { Container, Tab, Nav } from 'react-bootstrap'

import { NaviBar, StaticCovidData } from '../../components'

import {
  variantsY as variants,
  AnimationV,
} from '../../components/Animation/Animation'
import { CovidNavItem } from '../../components/CovidContent/CovidNavItem'
import { descItems } from './CovidRegInfo'

export function Covid() {
  return (
    <>
      <NaviBar expand={'lg'} bg={'dark'} variant='dark' />
      <Container
        className='my-3'
        style={
          ({
            height: '120%',
          },
          { width: '100%' })
        }
      >
        <Container>
          <AnimationV variants={variants} cn={'my-3 text-secondary'}>
            <div>
              <h4 className='mx-5 text-secondary'>Коронавирус</h4>
            </div>
            <hr />
          </AnimationV>
        </Container>
        <Tab.Container
          style={{
            width: '100%',
          }}
          id='left-tabs-example'
          defaultActiveKey='novosibirsk'
        >
          <Nav variant='pills'>
            {descItems.map(el => (
              <CovidNavItem
                key={el.k}
                k={el.k}
                desc={el.desc}
                charact={el.charact}
                title={el.title}
                variants={variants}
                eventKey={el.eventKey}
              />
            ))}
          </Nav>

          <Tab.Content>
            {descItems.map(region => (
              <StaticCovidData key={region.id} region={region} />
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </>
  )
}
