import {Container, Card, ListGroup} from 'react-bootstrap';

const Main_publications = () => {
    return (
      <Card border="secondary" className="my-3 shadow1">
      <Container className="mx-1 my-1">
    <ListGroup as="ol" variant="flush" numbered >
      <ListGroup.Item as="li">
      <a href="https://arxiv.org/pdf/2112.05315.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">О. И. Криворотько, С. И. Кабанихин. Математические модели распространения COVID-19. Препринт 300 СО РАН, института математики им. С.Л.Соболева. 63с.</a>
      </ListGroup.Item>
      <ListGroup.Item as="li">
      <a href="https://arxiv.org/pdf/2112.12313.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">V. Petrakova and O. Krivorotko. Mean field game for modeling of COVID-19 spread. Journal of Mathematical Analysis and Applications. Volume 514, Issue 1, 1 October 2022, 126271. DOI: https://doi.org/10.1016/j.jmaa.2022.126271</a>

      </ListGroup.Item>
      <ListGroup.Item as="li">
      <a href="https://www.sciencedirect.com/science/article/pii/S2468042721000798?via%3Dihub" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">O. Krivorotko, M. Sosnovskaia, I. Vashchenko, C. Kerr, D. Lesnic. Agent-based modeling of COVID-19 outbreaks for New York state and UK: Parameter identification algorithm. doi: 10.1016/j.idm.2021.11.004</a>
      </ListGroup.Item>
      <ListGroup.Item as="li">
      <a href="https://covid19-modeling.ru/data/papers/1_Krivorotko_et_al_COVID-19_in_Moscow_and_NSO.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">  Криворотько О.И., Кабанихин С.И., Зятьков Н.Ю., Приходько А.Ю., Прохошин Н.М., Шишленин М.А. Математическое моделирование и прогнозирование COVID-19 в Москве и Новосибирской области // Сиб. журн. вычисл. математики / РАН. Сиб. отд-ние. – Новосибирск, 2020. – Т. 23, N4. – С. 395–414.</a>
      </ListGroup.Item>
      <ListGroup.Item as="li">

      <a href="https://covid19-modeling.ru/data/papers/2_Krivorotko_et_al_COVID-19_Identifiability.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">О.И. Криворотько, С.И. Кабанихин, М.И. Сосновская, Д.В. Андорная. Анализ чувствительности и идентифицируемости математических моделей распространения эпидемии COVID-19 // Вавиловский журнал генетики и селекции, 2021, 25(1), с. 1-10, DOI 10.18699/VJ21.010</a>
      </ListGroup.Item>
      <ListGroup.Item as="li">

      <a href="https://covid19-modeling.ru/data/papers/3_Kabanikhin&Krivorotko_COVID-19_in_Wuhan.pdf" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">S. I. Kabanikhin and O. I. Krivorotko. Mathematical Modeling of the Wuhan COVID-2019 Epidemic and Inverse Problems. Computational Mathematics and Mathematical Physics, 2020, Vol. 60, No. 11, pp. 1889–1899.</a>
      </ListGroup.Item>
      <ListGroup.Item as="li">

      <a href="https://ieeexplore.ieee.org/document/9588678/authors#authors" className="nav-link d-inline text-black" target="_blank" rel="noopener noreferrer">Nikolay Zyatkov and Olga Krivorotko. Forecasting Recessions in the US Economy Using Machine Learning Methods. doi: 10.1109/OPCS53376.2021.9588678</a>
      </ListGroup.Item>
    </ListGroup>
      </Container>
    </Card>

    )}

export default Main_publications;
