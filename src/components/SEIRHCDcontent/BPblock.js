// import React from 'react'

// export const BPblock = () => {
//   return (
//     <>
//       <Collapse in={openBS}>
//         <div id='example-collapse-text'>
//           <Row>
//             <Col xs={12} md={4}>
//               <motion.div
//                 initial='hidden'
//                 custom={2}
//                 variants={variants}
//                 whileInView='visible'
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <ListGroup className='mx-3 shadow1 my-1'>
//                   <ListGroup.Item
//                     align='left'
//                     className='bg-secondary text-secondary'
//                   >
//                     .
//                   </ListGroup.Item>
//                   <ListGroup.Item variant='light'>
//                     <Row>
//                       <Col xs={12} md={12} sm={12} lg={4}>
//                         <Stack gap={0}>
//                           <div>
//                             {' '}
//                             <p
//                               align='left'
//                               className='my-1 text-black text-small'
//                             >
//                               <small>Дата прогноза</small>
//                             </p>
//                           </div>
//                           <div>
//                             {' '}
//                             <p
//                               align='left'
//                               className='my-4 text-black text-small'
//                             >
//                               <small>Прогноз</small>
//                             </p>
//                           </div>
//                         </Stack>
//                       </Col>
//                       <Col xs={12} md={12} sm={12} lg={8}>
//                         <Formik>
//                           {({
//                             handleSubmit,
//                             handleChange,
//                             handleBlur,
//                             values,
//                             touched,
//                             isValid,
//                             errors,
//                             resetForm,
//                             setFieldValue,
//                           }) => (
//                             <Form noValidate>
//                               <Stack gap={3}>
//                                 <Form.Select
//                                   key={1}
//                                   aria-label='Default select example'
//                                   type='number'
//                                   name='data'
//                                   onChange={e => {
//                                     const selected = e.target.value
//                                     setPrognose_data(selected)
//                                     forecasts_new(prognose_type, selected)
//                                     forecasts_R0(selected)
//                                   }}
//                                 >
//                                   {dates2.map((dates, index) => (
//                                     <OptionItem key={index} dates={dates} />
//                                   ))}
//                                 </Form.Select>
//                                 <Form.Select
//                                   key={2}
//                                   aria-label='Default select example'
//                                   type='number'
//                                   name='type'
//                                   onChange={e => {
//                                     const selectedType = e.target.value
//                                     let stype = Number(selectedType)
//                                     setPrognose_type(stype, prognose_data)
//                                     forecasts_new(stype, prognose_data)
//                                   }}
//                                 >
//                                   <option value='1'>
//                                     Новые выявленные случаи
//                                   </option>
//                                   <option value='2'>
//                                     Критически больные, C
//                                   </option>
//                                   <option value='3'>Умершие, D</option>
//                                 </Form.Select>
//                               </Stack>
//                             </Form>
//                           )}
//                         </Formik>
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>
//                 </ListGroup>
//               </motion.div>
//             </Col>
//             <Col xs={12} md={8}>
//               <ChartButtons chartId={'chart2'} />
//               {/* forecasts_new(prognose_type, prognose_data) */}
//               <div style={{ height: '20rem' }}>
//                 <Bar
//                   id='chart2'
//                   options={chartOptions_pred}
//                   data={chartData_pred}
//                   height='90%'
//                 />
//               </div>
//             </Col>
//           </Row>
//           <motion.div
//             initial='hidden'
//             custom={2}
//             variants={variants2}
//             whileInView='visible'
//             viewport={{ amount: 0.1, once: true }}
//             className='mx-3'
//           >
//             <hr />
//             <h4 className='mx-5 text-secondary'>
//               Текущие параметры модели и их доверительный интервал
//             </h4>
//           </motion.div>
//           <Row className='mx-5 my-3'>
//             <Col xs={12} md={6} lg={3}>
//               <motion.div
//                 initial='hidden'
//                 custom={2}
//                 variants={variants2}
//                 whileInView='visible'
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <Card border='light' className='shadow1'>
//                   <Card.Body>
//                     <OverlayTrigger
//                       placement='bottom'
//                       overlay={
//                         <Popover>
//                           <Popover.Body>
//                             <div className='text-success'>
//                               Параметр заражения между бессимптомной <i>E(t)</i>{' '}
//                               и восприимчивой <i>S(t)</i> группами населения
//                             </div>
//                           </Popover.Body>
//                         </Popover>
//                       }
//                     >
//                       <Row>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Title className='text-success'>
//                             <h1
//                               align='center'
//                               style={{ fontSize: '80px', align: 'left' }}
//                             >
//                               {'\u03B1'}
//                               <sub style={{ fontSize: '25px' }}>e</sub>
//                             </h1>
//                           </Card.Title>
//                         </Col>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Text className=''>
//                             <Stack className=''>
//                               <small>
//                                 <div className='text-muted'>
//                                   среднее{' '}
//                                   <b className='text-black'>
//                                     <h5>{ae_mean}</h5>
//                                   </b>
//                                 </div>
//                                 <div className='text-muted'>
//                                   std{' '}
//                                   <b className='text-black'>
//                                     <h5>{ae}</h5>
//                                   </b>
//                                 </div>{' '}
//                               </small>
//                             </Stack>
//                           </Card.Text>
//                         </Col>
//                       </Row>
//                     </OverlayTrigger>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//             <Col xs={12} md={6} lg={3}>
//               <motion.div
//                 initial='hidden'
//                 custom={3}
//                 variants={variants2}
//                 whileInView='visible'
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <Card border='light' className='shadow1'>
//                   <Card.Body>
//                     <OverlayTrigger
//                       placement='bottom'
//                       overlay={
//                         <Popover>
//                           <Popover.Body>
//                             <div className='text-success'>
//                               Параметр заражения между инфицированным{' '}
//                               <i>I(t)</i> и восприимчивым населением <i>S(t)</i>
//                               , который связан с контагиозностью вируса и
//                               социальными факторами
//                             </div>
//                           </Popover.Body>
//                         </Popover>
//                       }
//                     >
//                       <Row>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Title className='text-success'>
//                             <h1 align='center' style={{ fontSize: '80px' }}>
//                               {'\u03B1'}
//                               <sub style={{ fontSize: '25px' }}>i</sub>
//                             </h1>
//                           </Card.Title>
//                         </Col>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Text className=''>
//                             <Stack className=''>
//                               <small>
//                                 <div className='text-muted'>
//                                   среднее{' '}
//                                   <b className='text-black'>
//                                     <h5>{ai_mean}</h5>
//                                   </b>
//                                 </div>
//                                 <div className='text-muted'>
//                                   std{' '}
//                                   <b className='text-black'>
//                                     <h5>{ai}</h5>
//                                   </b>
//                                 </div>{' '}
//                               </small>
//                             </Stack>
//                           </Card.Text>
//                         </Col>
//                       </Row>
//                     </OverlayTrigger>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//             <Col xs={12} md={6} lg={3}>
//               <motion.div
//                 initial='hidden'
//                 custom={4}
//                 variants={variants2}
//                 whileInView='visible'
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <Card border='light' className='shadow1'>
//                   <Card.Body>
//                     <OverlayTrigger
//                       placement='bottom'
//                       overlay={
//                         <Popover>
//                           <Popover.Body>
//                             <div className='text-success'>
//                               Доля госпитализированных случаев <i>H(t)</i>,
//                               находящихся в критическом состоянии и требующих
//                               подключения аппарата ИВЛ
//                             </div>
//                           </Popover.Body>
//                         </Popover>
//                       }
//                     >
//                       <Row>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Title className=' text-success'>
//                             <h1
//                               align='center'
//                               className=''
//                               style={{ fontSize: '80px' }}
//                             >
//                               {'\u03B5'}
//                               <sub style={{ fontSize: '25px' }}>hc</sub>
//                             </h1>
//                           </Card.Title>
//                         </Col>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Text className=''>
//                             <Stack className=''>
//                               <small>
//                                 <div className='text-muted'>
//                                   среднее{' '}
//                                   <b className='text-black'>
//                                     <h5>{ehc_mean}</h5>
//                                   </b>
//                                 </div>
//                                 <div className='text-muted'>
//                                   std{' '}
//                                   <b className='text-black'>
//                                     <h5>{ehc}</h5>
//                                   </b>
//                                 </div>{' '}
//                               </small>
//                             </Stack>
//                           </Card.Text>
//                         </Col>
//                       </Row>
//                     </OverlayTrigger>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//             <Col xs={12} md={6} lg={3}>
//               <motion.div
//                 initial='hidden'
//                 custom={4}
//                 variants={variants2}
//                 whileInView='visible'
//                 viewport={{ amount: 0.1, once: true }}
//               >
//                 <Card border='light' className='shadow1'>
//                   <Card.Body>
//                     <OverlayTrigger
//                       placement='bottom'
//                       overlay={
//                         <Popover>
//                           <Popover.Body>
//                             <div className='text-success'>
//                               Смертность в результате COVID-19
//                             </div>
//                           </Popover.Body>
//                         </Popover>
//                       }
//                     >
//                       <Row>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Title className='text-success'>
//                             <h1 align='center' style={{ fontSize: '80px' }}>
//                               {'\u03BC'}
//                             </h1>
//                           </Card.Title>
//                         </Col>
//                         <Col sm={6} md={6} xs={6} lg={6}>
//                           <Card.Text className=''>
//                             <Stack className=''>
//                               <small>
//                                 <div className='text-muted'>
//                                   среднее{' '}
//                                   <b className='text-black'>
//                                     <h5>{m_mean}</h5>
//                                   </b>
//                                 </div>
//                                 <div className='text-muted'>
//                                   std{' '}
//                                   <b className='text-black'>
//                                     <h5>{m}</h5>
//                                   </b>
//                                 </div>{' '}
//                               </small>
//                             </Stack>
//                           </Card.Text>
//                         </Col>
//                       </Row>
//                     </OverlayTrigger>
//                   </Card.Body>
//                 </Card>
//               </motion.div>
//             </Col>
//           </Row>

//           <SubBlock
//             title={
//               'Базовый индекс репродукции COVID-19 в Новосибирской области и прогноз'
//             }
//             chartId={'chart9'}
//             chartOptions={chartOptions_bsR0}
//             chartData={chartData_bsR0}
//             height={'75%'}
//           />
//         </div>
//       </Collapse>
//     </>
//   )
// }
