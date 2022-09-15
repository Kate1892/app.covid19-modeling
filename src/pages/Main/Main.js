import { Container, Card, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

import MTeamItem from '../../components/MainContent/TeamItem'

import {
  Main_picture,
  Main_contacts,
  Main_publications,
  Main_conferences,
} from '../../components'

import { variantsY as variants } from '../../components/Animation/Animation'
import { posts } from './TeamInfo'

export function Main() {
  return (
    <>
      <Main_picture />
      <Container>
        <motion.div
          initial='hidden'
          custom={2}
          variants={variants}
          whileInView='visible'
          viewport={{ amount: 0.05, once: true }}
        >
          <Card className='text-center bg-secondary text-white my-3'>
            <Card.Title>
              {' '}
              <h4 className='my-1 '>Команда</h4>{' '}
            </Card.Title>
          </Card>
        </motion.div>
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
        <motion.div
          initial='hidden'
          custom={2}
          variants={variants}
          whileInView='visible'
          viewport={{ amount: 0.05, once: true }}
          className='my-3'
        >
          <hr />
          <h4 className='text-left mx-5 text-secondary'>Kонтакты</h4>
        </motion.div>
        <motion.div
          initial='hidden'
          custom={2}
          variants={variants}
          whileInView='visible'
          viewport={{ amount: 0.05, once: true }}
        >
          <Main_contacts />
        </motion.div>
        <motion.div
          initial='hidden'
          custom={2}
          variants={variants}
          whileInView='visible'
          viewport={{ amount: 0.05, once: true }}
          className='my-3'
        >
          <hr />
          <h4 className='text-left mx-5 text-secondary'>Публикации</h4>
        </motion.div>
        <motion.div
          initial='hidden'
          custom={2}
          variants={variants}
          whileInView='visible'
          viewport={{ amount: 0.05, once: true }}
        >
          <Main_publications />
        </motion.div>
        <motion.div
          initial='hidden'
          custom={2}
          variants={variants}
          whileInView='visible'
          viewport={{ amount: 0.05, once: true }}
        >
          <Card className='text-center bg-secondary text-white my-3'>
            <Card.Title>
              {' '}
              <h4 className='my-1 '>Конференции</h4>{' '}
            </Card.Title>
          </Card>
        </motion.div>
        <motion.div
          initial='hidden'
          custom={2}
          variants={variants}
          whileInView='visible'
          viewport={{ amount: 0.05, once: true }}
        >
          <Main_conferences />{' '}
        </motion.div>
      </Container>
    </>
  )
}
