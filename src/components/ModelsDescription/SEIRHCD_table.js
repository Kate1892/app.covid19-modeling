import React from 'react'
import { Table } from 'react-bootstrap'

export const SEIRHCD_table = () => {
  return (
    <small>
      <Table striped bordered size='sm' responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Параметр</th>
            <th>Описание</th>
            <th>Границы</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <i>{'\u03B1'}(t)</i>
            </td>
            <td>
              Индекс самоизоляции (
              <a href='https://yandex.ru/company/researches/2020/podomam'>
                данные Яндекса
              </a>
              )
            </td>
            <td>(0, 5)</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <i>
                {'\u03B1'}
                <sub>E</sub>(t)
              </i>
            </td>
            <td>
              Параметр заражения между бессимптомной <i>E(t)</i> и восприимчивой{' '}
              <i>S(t)</i> группами населения (
              <i>
                {'\u03B1'}
                <sub>E</sub>>>{'\u03B1'}
                <sub>I</sub>
              </i>
              )
            </td>
            <td>(0, 1)</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <i>
                {'\u03B1'}
                <sub>I</sub>(t)
              </i>
            </td>
            <td>
              Параметр заражения между инфицированным <i>I(t)</i> и
              восприимчивым <i>S(t)</i> населением
            </td>
            <td>(0, 1)</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <i>{'\u03B2'}(t)</i>
            </td>
            <td>Доля инфицированных, имеющая антитела IgG к SARS-CoV-2</td>
            <td>
              <a href='https://covid19-modeling.ru/data/novosibirsk-invitro.csv'>
                Инвитро
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <i>
                {'\u03B5'}
                <sub>hc</sub>(t)
              </i>
            </td>
            <td>
              Доля госпитализированных случаев <i>H(t)</i>, которым требуется
              подключение ИВЛ
            </td>
            <td>(0, 1)</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <i>{'\u03BC'}(t)</i>
            </td>
            <td>Доля смертельных случаев</td>
            <td>(0, 0.5)</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <i>{'\u03C4'}</i>
            </td>
            <td>Латентный период</td>
            <td>2 дня</td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <i>
                t<sub>inc</sub>
              </i>
            </td>
            <td>Длительность инкубационного периода</td>
            <td>2-14 дней</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <i>
                t<sub>inf</sub>
              </i>
            </td>
            <td>Длительность периода инфицирования</td>
            <td>2,5-14 дней</td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <i>
                t<sub>hosp</sub>
              </i>
            </td>
            <td>Длительность периода госпитализации</td>
            <td>4-5 дней</td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              <i>
                t<sub>crit</sub>
              </i>
            </td>
            <td>Длительность использования ИВЛ</td>
            <td>10-20 дней</td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <i>
                t<sub>imm</sub>
              </i>
            </td>
            <td>
              Средняя продолжительность гуморального иммунитета после
              выздоровления
            </td>
            <td>180 дней</td>
          </tr>
        </tbody>
      </Table>
    </small>
  )
}
