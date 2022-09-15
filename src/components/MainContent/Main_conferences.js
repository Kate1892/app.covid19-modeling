import { Container, Card, Image, Col, Row } from 'react-bootstrap'
import { MConferenseItem, MCitem2 } from './ConferenseItem'
import { motion } from 'framer-motion'
import { confs, conf2 } from './MCinfo'

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
      <motion.div
        initial='hidden'
        custom={3}
        variants={variants}
        whileInView='visible'
        viewport={{ amount: 0.5, once: true }}
      >
        <Container className='my-2'>
          <Row className='justify-xs-center'>
            {conf2.map(conf => (
              <MCitem2 key={conf.key} {...conf} />
            ))}
          </Row>
        </Container>
      </motion.div>
    </>
  )
}
