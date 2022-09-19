// const [openBS, setOpenBS] = useState(true)
// const [openM, setOpenM] = useState(false)
// const [openV, setOpenV] = useState(false)

export const headers = [
  {
    id: 1,
    // open: { openBS },
    // setOpen: { setOpenBS },
    block: 'BaseProg',
    title: 'Базовый сценарий',
    description:
      'Cценарий распространения COVID-19 в регионе на 7 дней при условии сохранения текущих ограничений и уровня вакцинации на день моделрования.',
  },
  {
    id: 2,
    // open: { openM },
    // setOpen: { setOpenM },
    block: 'Modeling',
    title: 'Моделирование',
    description:
      'Результат реализации SEIR-HCD модели распространения COVID-19 в регионе при откалиброванных параметрах модели на каждому 14-дневном интервале по времени.',
  },
  {
    id: 3,
    // open: { openV },
    // setOpen: { setOpenV },
    block: 'Validation',
    title: 'Валидация модели',
    description:
      'Результат валидации SEIR-HCD модели распространения COVID-19 в регионе: по откалиброванным параметрам за предыдущий 14-дневный период реализуется базовый сценарий на 7 дней, который сравненивается с реальными данными.',
  },
]
