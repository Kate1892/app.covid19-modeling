export const NavItemsInfo = [
  {
    id: 1,
    description: 'Восприимчивые',
    title: 'S',
    eventKey: '2',
    params: {
      mean: 'S_mean',
      max: 'S_max',
      min: 'S_min',
      title: '',
    },
  },
  {
    id: 2,
    description: 'Больные без симптомов',
    title: 'E',
    eventKey: '3',
    params: {
      mean: 'E_mean',
      max: 'E_max',
      min: 'E_min',
      title: 'new_diagnoses',
    },
  },
  {
    id: 3,
    description: 'Больные с симптомами',
    title: 'I',
    eventKey: '4',
    params: {
      mean: 'I_mean',
      max: 'I_max',
      min: 'I_min',
      title: 'new_diagnoses',
    },
  },
  {
    id: 4,
    description: 'Вылеченные',
    title: 'R',
    eventKey: '5',
    params: {
      mean: 'R_mean',
      max: 'R_max',
      min: 'R_min',
      title: 'cum_recoveries',
    },
  },
  {
    id: 5,
    description: 'Госпитализированные',
    title: 'H',
    eventKey: '6',
    params: {
      mean: 'H_mean',
      max: 'H_max',
      min: 'H_min',
      title: 'hospitalised',
    },
  },
  {
    id: 6,
    description: 'Критически больные',
    title: 'C',
    eventKey: '7',
    params: {
      mean: 'C_mean',
      max: 'C_max',
      min: 'C_min',
      title: 'n_critical',
    },
  },
  {
    id: 7,
    description: 'Умершие',
    title: 'D',
    eventKey: '8',
    params: {
      mean: 'D_mean',
      max: 'D_max',
      min: 'D_min',
      title: 'cum_deaths',
    },
  },
]