import { motion } from 'framer-motion'

export const variantsY = {
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

export const variantsX = {
  visible: custom => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
}

export const AnimationV = props => {
  return (
    <motion.div
      initial='hidden'
      custom={2}
      variants={props.variants}
      whileInView='visible'
      viewport={{ amount: 0.05, once: true }}
      className={props.cn ? props.ch : ''}
    >
      {props.children}
    </motion.div>
  )
}
