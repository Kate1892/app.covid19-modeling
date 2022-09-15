import conf_ONZ from '../../images/conf/conf_ONZ.png'
import Tomsk_logo from '../../images/conf/Tomsk_logo.png'
import MOTOR_logo from '../../images/conf/MOTOR_logo.png'
import Sirius_conference from '../../images/conf/Sirius_conference.png'
import QIPA_conference from '../../images/conf/QIPA_conference.png'

export const confs = [
  {
    id: 5,
    name: 'ОНЗ-2021',
    image: conf_ONZ,
    hreff: 'http://conf.nsc.ru/tcmiip2021',
    width: '6rem',
    height: '6rem',
    rounded: true,
  },
  {
    id: 7,
    name: 'Томск-2021',
    image: Tomsk_logo,
    hreff: 'http://rmc.math.tsu.ru/matematika-v-meditsine/',
    width: '6rem',
    height: '6rem',
    rounded: false,
  },
  {
    id: 8,
    name: 'MOTOR-2021',
    image: MOTOR_logo,
    hreff: 'https://conference.icc.ru/event/3/',
    width: '4rem',
    height: '4rem',
    rounded: false,
  },
]

export const conf2 = [
  {
    id: 1,
    name: 'Конференция международных математических центров мирового уровня - 2021',
    image: Sirius_conference,
    hreff: 'https://siriusmathcenter.ru/all-russian-conference',
    width: '5rem',
    height: '5rem',
    rounded: false,
  },
  {
    id: 2,
    name: 'Quasilinear Equations, Inverse Problems and Their Applications',
    image: QIPA_conference,
    hreff: 'https://qipa2021.mipt.ru/home',
    width: '4rem',
    height: '4rem',
    rounded: true,
  },
]
