import React, {useState, useEffect} from "react";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Form, ListGroup, FormControl, Stack,
OverlayTrigger, Popover, InputGroup, ProgressBar, Spinner, Tabs, Tab, Collapse, Carousel} from 'react-bootstrap';
import { CLoadingButton } from '@coreui/react-pro'
import axios from "axios"
import FileDownload from "js-file-download"
import CollapseParamCSV from './Components/CollapseParamCSV'
import NavModeling from './Components/NavModeling'
import CollapseModelSettings from './Components/CollapseModelSettings'
import { Formik } from "formik";
import * as yup from "yup";
import {FiDownload } from 'react-icons/fi'
import {BsFillFileEarmarkPdfFill, BsFillArrowUpRightSquareFill} from 'react-icons/bs'

import Novosibirsk_nd from './Components/Covid_state_data_novosibirsk/Novosibirsk_nd'
import CovidNewD_plot from './Components/CovidNewD_plot'

import { DownloadCount } from 'axios-progress-bar'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
);

const download_article=(e)=>{
   e.preventDefault()
   axios({
     url:"http://localhost:4000/article",
     method: "GET",
     responseType:"blob"
   }).then((resA)=>{
     console.log(resA);
     FileDownload(resA.data, "article.pdf")
   })
}

const schema = yup.object().shape({
  //population: yup.number().max(10).typeError("требуется числовое значение").required("обязательное поле"),
  population: yup.number().typeError("требуется числовое значение").required("обязательное поле"),
  lastName: yup.number().required(),
});

export function Modeling(){

  const [population_data, setPopulation_data] = useState(2798170)
  const [region_data, setRegion_data] = useState(1)
  const [region_name, setRegion_name] = useState("Новосибирск")

  const download_chart=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }

  const run_msim_ = (e) => {
    e.preventDefault()
    setWithspinner(true)
    console.log(region_name)
    //console.log(population_data)
    //console.log(region_data)
    console.log(region_name)
    let data = {
        population_d: population_data,
        region_d: region_data
    }
    console.log(data);
  axios({
      url:'http://localhost:4000/data',
      method: "POST",
      responseType:"blob",
      data: {population_data, region_data}
    }).then((res)=>{
      axios({
        url:"http://localhost:4000/api/try2",
        method: "GET",
        responseType:"blob"
    })
       .then((res)=>{
         setWithspinner(false)
         initchart()
        //window.location.reload();
      })
    })
 }



  useEffect(() => {
    const data = window.localStorage.getItem("population_data")
    if (data) {
      setPopulation_data(JSON.parse(data))
      console.log(population_data)
    }

}, []);

  useEffect(() => {
    window.localStorage.setItem("population_data", JSON.stringify(population_data));
  })

    const [chartData_all, setChartData_all] = useState({
      datasets: [],
    })
    const [initchartData_all, setINITChartData_all] = useState({
      datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})

    let cov_data = [];
    let cov_nd = [];
    let cov_nd_high = []
    let cov_nd_state=[];
    let cov_data_state=[];
    const [data, setData] = useState(cov_data)
    const [data_cov_nd_high, setData_cov_nd_high] = useState(cov_nd_high)
    const [data_cov_nd, setData_cov_nd] = useState(cov_nd)

    const real_data=(e)=>{
      axios
      .get("http://localhost:4000/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_diagnoses));
          cov_data_state.push(dataObj.date);
        }

        setChartData_all({
          labels: data,
          datasets: [

            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 0, 0)",
            backgroundColor: "rgb(255, 0, 0, 1)"
          },
          {
          label: "cредний прогноз",
          data: data_cov_nd,
          borderColor: "rgb(0, 0, 0)",
          backgroundColor: "rgb(53, 162, 235, 1)"
        },
          {
          label: "максимальный прогноз",
          data: data_cov_nd_high,
          borderColor: "rgb(128, 0, 255)",
          backgroundColor: "rgb(128, 0, 255, 1)"
        },
        ],
        });
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Прогноз новых случаев заболевания",
            },
            subtitle: {
              display: true,
              align: 'end',
              text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Латентный период " + population_data],
            },
          }
        });
      }).catch(err => {
          console.log(err);
        });
    }

    const real_data_no=(e)=>{ chart() }


    const chart = () => {
      axios
        .get("http://localhost:4000/getMsim")
        .then(res => {
            console.log(res.data)

          for (const dataObj of res.data.results.new_diagnoses) {
            cov_nd.push(parseInt(dataObj));
          //  cov_data.push(dataObj.date);
            setData_cov_nd(cov_nd)
          }

          for (const dataObj of res.data.results.date) {
            //cov_nd.push(parseInt(dataObj));
            cov_data.push(dataObj);
            setData(cov_data)
          }

          for (const dataObj of res.data.results.new_diagnoses_high) {
            //cov_nd.push(parseInt(dataObj));
            cov_nd_high.push(dataObj);
            setData_cov_nd_high(cov_nd_high)
          }

          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_nd,
              borderColor: "rgb(0, 0, 0)",
              backgroundColor: "rgb(53, 162, 235, 1)"
            },
              {
              label: "максимальный прогноз",
              data: cov_nd_high,
              borderColor: "rgb(128, 0, 255)",
              backgroundColor: "rgb(128, 0, 255, 1)"
            },
          ],
          });
          setChartOptions({
            responsive: true,
            plugins: {
              legend: {
                //position: 'right'
                position: "top",
              },
              title: {
                display: true,
                text: "Прогноз новых случаев заболевания",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Латентный период " + population_data],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
      console.log(cov_nd, cov_data);
    };


    const initchart = () => {

      axios
        .get("http://localhost:4000/getUMsim")
        .then(res => {
            console.log(res.data)

          for (const dataObj of res.data.results.new_diagnoses) {
            cov_nd.push(parseInt(dataObj));
          //  cov_data.push(dataObj.date);
            setData_cov_nd(cov_nd)
          }

          for (const dataObj of res.data.results.date) {
            //cov_nd.push(parseInt(dataObj));
            cov_data.push(dataObj);
            setData(cov_data)
          }

          for (const dataObj of res.data.results.new_diagnoses_high) {
            //cov_nd.push(parseInt(dataObj));
            cov_nd_high.push(dataObj);
            setData_cov_nd_high(cov_nd_high)
          }

          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_nd,
              borderColor: "rgb(0, 0, 0)",
              backgroundColor: "rgb(53, 162, 235, 1)"
            },
              {
              label: "максимальный прогноз",
              data: cov_nd_high,
              borderColor: "rgb(128, 0, 255)",
              backgroundColor: "rgb(128, 0, 255, 1)"
            },
          ],
          });

          setChartOptions({
            responsive: true,
            plugins: {
              legend: {
                //position: 'right'
                position: "top",
              },
              title: {
                display: true,
                text: "Прогноз новых случаев заболевания",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Латентный период " + population_data],
              },
            }
          });
          setnewChart(false)
        })
        .catch(err => {
          console.log(err);
        });
      console.log(cov_nd, cov_data);
    };

    useEffect(() => {
      real_data();
    }, [])

    useEffect(() => {
      chart();
    }, [])



const [withspinner, setWithspinner] = useState(false)
const [newChart, setnewChart] = useState(true)
const [open, setOpen] = useState(false);
const [reset, setReset] = useState(true);
  return(
  <>
      <Container>
      <Card className="text-center bg-secondary text-white my-3">
        <Card.Title> <h3 className="my-1">Модели</h3></Card.Title>
      </Card>

        <Tabs justify defaultActiveKey="AOM" id="uncontrolled-tab-example" >

          <Tab eventKey="AOM" title="Агентная модель">
          <Card className="text-center mx-auto" border="light">
          <Row>
            <Col md={2}>

              <Button
                variant="outline-primary"
                className="bg-white my-2 mx-2"
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
              Описание модели
              </Button>
              <Button variant="link" onClick={(e)=>download_article(e)}><BsFillFileEarmarkPdfFill size={30}/></Button>
                <a href="https://www.sciencedirect.com/science/article/pii/S2468042721000798"><Button variant="link"><BsFillArrowUpRightSquareFill size={30}/></Button></a>
          </Col>
          <Col md={10}>
          <p align="justify" className="mx-3 my-1"><small>Моделирование производится посредством агентной модели расчета сценариев динамики выявленных случаев
COVID-19, в основе которой лежат обработка неполных эпидемиологических данных и решение обратной задачи восстановления параметров агентной
модели по совокупности доступных эпидемиологических данных. Основным инструментом построения модели является открытая библиотека <a href="https://docs.idmod.org/projects/covasim/en/latest/index.html" >COVASIM</a>. </small></p>
      </Col>
        </Row>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <Container className="my-1">

              </Container>
            </div>
          </Collapse>
          <Row>
            <Col sm={4}>
              <ListGroup className = "mx-3 my-1">
                <ListGroup.Item className="bg-secondary text-white" >Параметры моделирования</ListGroup.Item>
                <ListGroup.Item variant="light">
                <Row>
                  <Col sm={7}>
                  <Stack gap={3}>
                  <div>
                  <Stack direction="horizontal" gap={2}>
                <div > <p align="left" className="my-1 text-black text-small"><small>Регион</small></p></div>

                <div>
                <OverlayTrigger
                 placement="right"
                 overlay={
                   <Popover>
                     <Popover.Body>
                       Регион для построения сценария развития заболевания.
                     </Popover.Body>
                   </Popover>
                 }
                 >
                    <Button size="sm" variant="link" className="text-success">?</Button>
                  </OverlayTrigger>
                </div>

              </Stack>
                  </div>
                    <div>
                    <Stack direction="horizontal" gap={2}>
                  <div > <p align="left" className="my-3 text-black text-small"><small>Численность популяции</small></p></div>

                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                         Количество агентов - людей, восприимчивых к заболеванию.
                       </Popover.Body>
                     </Popover>
                   }
                   >
                      <Button size="sm" variant="link" className="text-success">?</Button>
                    </OverlayTrigger>
                  </div>

                </Stack>
                    </div>
                    <div>
                    <Stack direction="horizontal" gap={2}>
                    <div > <p align="left" className="my-2 text-black"><small>Латентный период [дни]</small></p></div>

                    <div>
                    <OverlayTrigger
                    placement="right"
                    overlay={
                     <Popover>
                       <Popover.Body>
                         <strong>Описание параметра</strong> Check this info.
                       </Popover.Body>
                     </Popover>
                    }
                    >
                      <Button size="sm" variant="link" className="text-success">?</Button>
                    </OverlayTrigger>
                    </div>

                    </Stack>
                    </div>

                  </Stack>

              </Col>

                  <Col sm={5}>
                  <Formik
                        validationSchema={schema}
                        onChange={(e) => setPopulation_data(e.target.values.population)}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                           alert(JSON.stringify(values, null, 2));
                           actions.setSubmitting(false);
                         }, 1000);
                       }}
                        initialValues={{
                          population:  population_data,
                          lastName: '3',
                        }}
                      >
                        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, }) => (
                <Form noValidate >
                  <Stack gap={4}>
                      <Form.Select aria-label="Default select example"
                        type="number"
                        name="region"
                        isValid={true}
                        onChange={(e) => {
                          const selectedRegion = e.target.value;
                          let sregion = Number(selectedRegion)
                          setRegion_data(sregion)
                          //{region_data == 1 ? (region_data == 2 ? setRegion_name("Алтайский край") : setRegion_name("Омская область")) : setRegion_name("Новосибирск") }
                          if(sregion == 1){
                            console.log("работает1")
                            setRegion_name("Новосибирск")
                          } else if(sregion == 2) {
                            console.log("работает2")
                            setRegion_name("Омская область")
                            setPopulation_data(578698)
                            setReset(true)
                          } else if(sregion == 3) {
                            console.log("работае3")
                            setRegion_name("Алтайский край")
                          }
                        //  {region_data == 1 ?   console.log("") : setRegion_name("Новосибирск") }
                        //  {region_data == 2 ?   console.log("") : setRegion_name("Новосибирск")}
                        //  {region_data == 3 ?   console.log("") : setRegion_name("Новосибирск")}
                          //console.log(region_name)
                        }}>
                            <option value="1">Новосибирск</option>
                            <option value="2">Омская область</option>
                            <option value="3">Алтайский край</option>
                      </Form.Select>
                      <Form.Group as={Col} controlId="validationFormik01">
                        <Form.Control
                          type="number"
                          name="population"
                          value={values.population}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={!errors.population}
                          isInvalid={!!errors.population}
                          onSubmit={setPopulation_data(values.population)}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="validationFormik02">
                        <Form.Control
                          type="number"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          isValid={!errors.lastName}
                          isInvalid={!!errors.lastName}
                        />
                      </Form.Group>

                        <Button  type="submit"  variant="success"
                          disabled={!isValid}
                          onSubmit={handleSubmit}
                          onClick={(e) => run_msim_(e)}
                        >
                        {withspinner ? <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        /> : null }
                        Submit</Button>
                  </Stack>
                  </Form>
                )}
              </Formik>
                </Col>
            </Row>
            </ListGroup.Item>
        </ListGroup>
        <CollapseModelSettings />
            </Col>
            <Col sm={8}>
            <Container>
              <Button  className="my-1" onClick={(e)=>real_data(e)}>Показать реальные данные</Button>
              <Button variant="outline-primary" className="my-1 mx-1" onClick={(e)=>real_data_no(e)}>Скрыть</Button>

              {newChart? <Bar id="chart"options={chartOptions} data={chartData_all}/> : <Bar id="chart"options={chartOptions} data={initchartData_all}/>}

              <Button variant="secondary" size="sm" className="my-3" onClick={(e)=>download_chart(e)}>Cкачать <FiDownload/></Button>
            </Container>
            </Col>
          </Row>
        </Card>
          </Tab>
          <Tab eventKey="SEIR-HCD" title="SEIR-HCD">
          <Card className="text-center mx-auto" border="light">
          <h3>Модель</h3>
          </Card>

          </Tab>
        </Tabs>

      <Card className="text-center bg-secondary my-3">
        <Card.Title> <h3 className="text-white my-1">Данные</h3> </Card.Title>
      </Card>
    < NavModeling/>
    </Container>

  </>
)}
