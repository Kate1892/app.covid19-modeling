import { Container, Card, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

import MTeamItem from '../../components/MainContent/TeamItem'

import {
  Main_picture,
  Main_contacts,
  Main_publications,
  Main_conferences,
} from '../../components'

import {
  AnimationV,
  variantsY as variants,
} from '../../components/Animation/Animation'
import { posts } from './TeamInfo'

export function Main() {
  return (
    <>
      <Main_picture />

      <Container>
        <AnimationV variants={variants}>
          <Card className='text-center bg-secondary text-white my-3'>
            <Card.Title>
              {' '}
              <h4 className='my-1 '>Команда</h4>{' '}
            </Card.Title>
          </Card>
        </AnimationV>

        <motion.div initial='hidden' animate='visible'>
          <Container>
            <Row xs={1} md={2} className='justify-content-md-center'>
              {posts.map((post, index) => (
                <MTeamItem
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amount: 0.05, once: true }}
                  custom={index + 1}
                  variants={variants}
                  key={post.id}
                  post={post}
                />
              ))}
            </Row>
          </Container>
        </motion.div>

        <AnimationV variants={variants} cn={'my-3'}>
          <hr />
          <h4 className='text-left mx-5 text-secondary'>Kонтакты</h4>
        </AnimationV>

        <AnimationV variants={variants}>
          <Main_contacts />
        </AnimationV>

        <AnimationV variants={variants} cn={'my-3'}>
          <hr />
          <h4 className='text-left mx-5 text-secondary'>Публикации</h4>
        </AnimationV>

        <AnimationV variants={variants}>
          <Main_publications />
        </AnimationV>

        <AnimationV variants={variants}>
          <Card className='text-center bg-secondary text-white my-3'>
            <Card.Title>
              {' '}
              <h4 className='my-1 '>Конференции</h4>{' '}
            </Card.Title>
          </Card>
        </AnimationV>

        <AnimationV variants={variants}>
          <Main_conferences />
        </AnimationV>
      </Container>
    </>
  )
}
