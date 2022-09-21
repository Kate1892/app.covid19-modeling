import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import * as yup from 'yup'
import {
  Col,
  Button,
  Form,
  ListGroup,
  Stack,
  OverlayTrigger,
  Popover,
  Spinner,
  Alert,
  Row,
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchAomData } from '../../redux/aomBlcok/asyncAction'
import { AnimationV, variantsX as variants } from '../Animation/Animation'
import { BsExclamationLg } from 'react-icons/bs'

const schema = yup.object().shape({
  population: yup
    .number()
    .min(1000000)
    .max(8000000)
    .typeError('требуется числовое значение')
    .required('обязательное поле'),
  n_future: yup
    .number()
    .min(10)
    .max(100)
    .typeError('требуется числовое значение')
    .required('обязательное поле'),
  init_infected: yup
    .number()
    .min(10)
    .max(100)
    .typeError('требуется числовое значение')
    .required('обязательное поле'),
})

export const AomForm = ({
  population_data,
  setPopulation_data,
  region_data,
  setRegion_data,
  n_future_day,
  setN_future_day,
  init_inf,
  setInit_inf,
}) => {
  const dispatch = useDispatch()

  const cancelToken = useRef()

  const run_msim_ = e => {
    e.preventDefault()
    setWithspinner(true)
    setIsrunning(true)
    cancelToken.current = axios.CancelToken.source()
    axios({
      url: 'https://server.covid19-modeling.ru/data',
      method: 'POST',
      responseType: 'blob',
      data: { population_data, region_data, n_future_day, init_inf },
      cancelToken: cancelToken.current.token,
    }).then(res => {
      setWithspinner(false)
      setIsrunning(false)

      dispatch(
        fetchAomData({
          population_data: population_data,
          region_data: region_data,
          n_future_day: n_future_day,
          init_inf: init_inf,
          key: 'usersCharts',
        })
      )
    })
  }
  const break_get = () => {
    setWithspinner(false)
    setIsrunning(false)
    cancelToken.current.cancel()
  }

  const [isrunning, setIsrunning] = useState(false)
  const [withspinner, setWithspinner] = useState(false)
  return (
    <>
      <AnimationV variants={variants} custom={1}>
        <ListGroup className='mx-3 my-1 shadow1'>
          <OverlayTrigger
            placement='right'
            overlay={
              <Alert variant='danger'>
                <h6>Пожалуйста, не обновляйте станицу</h6>
                <small>при введении параметров и после запуска модели, </small>
                <div>
                  <small>в противном случае расчёты будут прерваны</small>
                </div>
              </Alert>
            }
          >
            <ListGroup.Item align='left' className='bg-secondary text-white'>
              Параметры моделирования
              <BsExclamationLg />
            </ListGroup.Item>
          </OverlayTrigger>
          <ListGroup.Item variant='light'>
            <Row>
              <Col sm={12} xs={12} md={12} lg={7}>
                <Stack gap={0}>
                  <div>
                    <Stack direction='horizontal' gap={3}>
                      <div>
                        <p align='left' className='my-3 text-black text-small'>
                          <small>Регион</small>
                        </p>
                      </div>

                      <div>
                        <OverlayTrigger
                          placement='right'
                          overlay={
                            <Popover>
                              <Popover.Body>
                                Регион для построения сценария развития
                                заболевания.
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button
                            size='sm'
                            variant='link'
                            className='text-success'
                          >
                            ?
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </Stack>
                  </div>
                  <div>
                    <Stack direction='horizontal' gap={2}>
                      <div>
                        <p align='left' className='my-2 text-black text-small'>
                          <small>Численность популяции</small>
                        </p>
                      </div>

                      <div>
                        <OverlayTrigger
                          placement='right'
                          overlay={
                            <Popover>
                              <Popover.Body>
                                Количество агентов - людей, восприимчивых к
                                заболеванию.
                                <hr />
                                <small className='text-muted'>
                                  от 1 000 000 до 8 000 000
                                </small>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button
                            size='sm'
                            variant='link'
                            className='text-success'
                          >
                            ?
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </Stack>
                  </div>
                  <div>
                    <Stack direction='horizontal' gap={0}>
                      <div>
                        <p align='left' className=' text-black text-small'>
                          <small>Начально инфицированных</small>
                        </p>
                      </div>

                      <div>
                        <OverlayTrigger
                          placement='right'
                          overlay={
                            <Popover>
                              <Popover.Body>
                                Количество начально инфицированных человек.
                                <hr />
                                <small className='text-muted'>
                                  от 10 до 100 человек
                                </small>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button
                            size='sm'
                            variant='link'
                            className='text-success'
                          >
                            ?
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </Stack>
                  </div>
                  <div>
                    <Stack direction='horizontal' gap={3}>
                      <div>
                        <p align='left' className=' my-2 text-black text-small'>
                          <small>Дней прогнозирования</small>
                        </p>
                      </div>
                      <div>
                        <OverlayTrigger
                          placement='right'
                          overlay={
                            <Popover>
                              <Popover.Body>
                                На сколько дней вперед строится сценарий
                                развития заболевания.
                                <hr />
                                <small className='text-muted'>
                                  от 10 до 100 дней
                                </small>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <Button
                            size='sm'
                            variant='link'
                            className='text-success'
                          >
                            ?
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </Stack>
                    <Row>
                      <Col sm={6}></Col>
                      <Col sm={6}>
                        {' '}
                        <Button
                          variant='secondary'
                          align='end'
                          className=' my-3 text-white shadow1'
                          disabled={!isrunning}
                          onClick={break_get}
                        >
                          Прервать
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Stack>
              </Col>
              <Col sm={12} xs={12} md={12} lg={5}>
                <Formik
                  validationSchema={schema}
                  onChange={e => setPopulation_data(e.target.values.population)}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2))
                      actions.setSubmitting(false)
                    }, 1000)
                  }}
                  initialValues={{
                    population: population_data,
                    init_infected: init_inf,
                    n_future: n_future_day,
                    lastName: '3',
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    isValid,
                    errors,
                    setFieldValue,
                  }) => (
                    <Form noValidate>
                      <Stack gap={3}>
                        <Form.Select
                          aria-label='Default select example'
                          type='number'
                          name='region'
                          isValid={true}
                          onChange={e => {
                            const selectedRegion = e.target.value
                            let sregion = Number(selectedRegion)
                            setRegion_data(sregion)
                            if (sregion === 1) {
                              setPopulation_data(2798170)
                              setFieldValue('population', 2798170)
                            } else if (sregion === 2) {
                              setPopulation_data(578698)
                              setFieldValue('population', 1879548)
                            } else if (sregion === 3) {
                              setPopulation_data(2268179)
                              setFieldValue('population', 2268179)
                            }
                          }}
                        >
                          <option value='1'>Новосибирская область</option>
                          <option value='2'>Омская область</option>
                          <option value='3'>Алтайский край</option>
                        </Form.Select>
                        <Form.Group
                          key={1}
                          as={Col}
                          controlId='validationFormik01'
                        >
                          <Form.Control
                            type='number'
                            name='population'
                            value={values.population}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={!errors.population}
                            isInvalid={!!errors.population}
                            onSubmit={setPopulation_data(values.population)}
                          />
                        </Form.Group>
                        <Form.Group
                          key={2}
                          as={Col}
                          controlId='validationFormik04'
                        >
                          <Form.Control
                            type='number'
                            name='init_infected'
                            value={values.init_infected}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={!errors.init_infected}
                            isInvalid={!!errors.init_infected}
                            onSubmit={setInit_inf(values.init_infected)}
                          />
                        </Form.Group>
                        <Form.Group
                          key={3}
                          as={Col}
                          controlId='validationFormik02'
                        >
                          <Form.Control
                            type='number'
                            name='n_future'
                            value={values.n_future}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={!errors.n_future}
                            isInvalid={!!errors.n_future}
                            onSubmit={setN_future_day(values.n_future)}
                          />
                        </Form.Group>

                        <Button
                          type='submit'
                          variant='success'
                          className='shadow1'
                          disabled={!isValid || isrunning}
                          onSubmit={handleSubmit}
                          onClick={e => run_msim_(e)}
                        >
                          {withspinner ? (
                            <Spinner
                              as='span'
                              animation='border'
                              size='sm'
                              role='status'
                              aria-hidden='true'
                            />
                          ) : null}{' '}
                          Запустить
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>
              </Col>
              {withspinner ? (
                <small className='text-muted'>
                  <small> ...ожидаемое время расчёта: 1 минута </small>
                </small>
              ) : null}
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </AnimationV>
    </>
  )
}
