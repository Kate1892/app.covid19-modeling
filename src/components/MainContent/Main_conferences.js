import { Container, Row } from 'react-bootstrap'
import { MConferenseItem, MCitem2 } from './ConferenseItem'
import { confs, conf2 } from './MCinfo'
import { AnimationV } from '../Animation/Animation'

export const Main_conferences = () => {
  const variants = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
      },
    }),
    hidden: {
      opacity: 0,
      y: 100,
    },
  }

  return (
    <>
      <Container className='my-3 mx-2'>
        <Row
          className='justify-content-md-center'
          style={{
            width: '100%',
          }}
        >
          {confs.map((conf, index) => (
            <MConferenseItem
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.05, once: true }}
              custom={index + 1}
              variants={variants}
              key={conf.id}
              conf={conf}
            />
          ))}
        </Row>
      </Container>
      <AnimationV variants={variants}>
        <Container className='my-2'>
          <Row className='justify-xs-center'>
            {conf2.map(conf => (
              <MCitem2 key={conf.id} {...conf} />
            ))}
          </Row>
        </Container>
      </AnimationV>
    </>
  )
}
