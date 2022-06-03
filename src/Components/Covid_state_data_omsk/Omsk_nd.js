import React, { useState, useEffect} from "react";
import axios from "axios";
import {FiDownload } from 'react-icons/fi'
import {Container, Row, Col, Card, ListGroup, ListGroupItem, NavDropdown, Navbar, Button,
  Image, Tab, Nav, Dropdown, ButtonGroup, DropdownButton, CardGroup, OverlayTrigger, Popover} from 'react-bootstrap';
import {BsZoomOut, BsInfo, BsZoomIn} from 'react-icons/bs'
  import {
    Chart as ChartJS,
    PointElement,
    Filler,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    SubTitle,
    Tooltip,
    Legend,
  } from 'chart.js';
  import {Bar, Line} from 'react-chartjs-2'
  import zoomPlugin from 'chartjs-plugin-zoom';
  import scales from 'chartjs-plugin-zoom';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    SubTitle,
    Tooltip,
    Legend,
    PointElement,
    Filler,
  );

  ChartJS.register(zoomPlugin,  scales);

// суммарное количтво заразившихся
function Omsk_nd() {

  const zoom_chart=(e) => {
    e.preventDefault()
    const img = document.getElementById('chart')
    img.plugins.scales.y.min = 80;
    img.plugins.scales.y.max = 100;
    img.update()
  }

  const download_chart2=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart2')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }

      const [lastData, setLastsData] = useState(0)
      const [lastDatadate, setLastsDatadate] = useState(0)
      const [last_ndeaths, setlast_ndeaths] = useState(0)
      const [last_nrec, setlast_nrec] = useState(0)
      const [chartData, setChartData] = useState({
        datasets: [],
      })

      const [chartOptions, setChartOptions] = useState({})

      const chart = () => {
        let cov_nd = [];
        let cov_data = [];
        let cov_last_nd = [];
        let cov_last_date = [];
        let cov_last_ndeaths = [];
        let cov_last_nrec = [];

        let cov_ndeaths = [];
        let cov_nd_all = [];
        let cov_nrec = [];
        let cov_ncrit = []
        let cov_cumchild = []
        axios
        .get("http://89.253.218.66:4000/api/csvCovid/omsk")
        .then(res => {
          console.log(res);
          cov_last_nd.push(parseInt(res.data[res.data.length-1].new_diagnoses))
          cov_last_date.push(res.data[res.data.length-1].date)
          cov_last_ndeaths.push(parseInt(res.data[res.data.length-1].new_deaths))
          cov_last_nrec.push(parseInt(res.data[res.data.length-1].new_recoveries))

          for (const dataObj of res.data) {
            cov_nd.push(parseInt(dataObj.new_diagnoses));
            cov_data.push(dataObj.date);
            cov_ndeaths.push(parseInt(dataObj.cum_deaths));
            cov_nd_all.push(parseInt(dataObj.cum_diagnoses));
            cov_nrec.push(parseInt(dataObj.cum_recoveries));
            cov_ncrit.push(parseInt(dataObj.n_critical));
            cov_cumchild.push(parseInt(dataObj.cum_children));
          }
          setChartData({
            labels: cov_data,
            datasets: [
              {
                label: "новые случаи, шк.1",
                data: cov_nd,
                fill: false,
                borderColor: "rgba(0, 191, 255, 1)",
                backgroundColor: "rgba(0, 191, 255, 1)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                yAxisID: 'quantity'
              },
              {
                label: "летальные исходы, шк2",
                data: cov_ndeaths,
                borderColor: "rgb(255,0,0)",
                backgroundColor: "rgb(255,0,0, 1)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                yAxisID: 'y'
              },
              {
              label: "суммарная заболеваемость, шк.2",
              data: cov_nd_all,
              borderColor: "rgb(0, 0, 0)",
              backgroundColor: "rgb(0, 0, 0)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              yAxisID: 'y'
            },
            {
            label: "cлучаи выздоровления, шк.2",
            data: cov_nrec,
            borderColor: "rgb(252,141,214)",
            backgroundColor: "rgb(252,141,214)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            yAxisID: 'y'
          },

            ],
          });

          setChartOptions({
            responsive: true,
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'xy',
                },
               zoom: {
                 wheel: {
                   enabled: true,
                   speed: 0.1,
                 },
                 drag: {
                  enabled: true,
                },
                 pan: {enabled: true},
                 pinch: {
                   enabled: true
                 },
                 mode: 'xy',
               },
            },
              legend: {
                maxWidth: 250,
                position: "left",
              },
              title: {
                display: true,
                text: "Статистические данные",
              },
            },
            scales: {
              quantity: {
                title: {
                  display: true,
                  text: 'шкала 1'
                },
                position:'left',
                type: 'linear',
              },
              y: {
                title: {
                  display: true,
                  text: 'шкала 2'
                },
                position:'right',
                beginAtZero: true,
                type: 'linear',
                grid: {
                  drawOnChartArea: false
                }
              }
            }
          });
          setLastsData(cov_last_nd)
          setLastsDatadate(cov_last_date)
          setlast_ndeaths(cov_last_ndeaths)
          setlast_nrec(cov_last_nrec)
        })
        .catch(err => {
          console.log(err);
        });
        console.log(cov_ncrit);

      };

      useEffect(() => {
        chart();

      }, [])

      return (
        <div>
        <Container>
        <Row style={{
                width: "100%" }}>
    <Col xs= {12} md={4}><Card border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2">
      <Card.Body>
      <Card.Title className="text-center text-info"><h3>{lastData}</h3></Card.Title>
      <Card.Text className="text-center">
      <small>случаев заражения</small>
      </Card.Text>
      </Card.Body>
    <Card.Footer className="bg-white">
    <small className="text-muted"><small className="text-center">По данным на {lastDatadate}</small></small>
    </Card.Footer>
    </Card></Col>
    <Col xs= {12} md={4}><Card border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2">
      <Card.Body>
      <Card.Title className="text-center text-success"><h3>{last_nrec}</h3></Card.Title>
      <Card.Text className="text-center">
      <small>случаев выздоровления</small>
      </Card.Text>
      </Card.Body>
    <Card.Footer className="bg-white">
    <small className="text-muted"><small className="text-center">По данным на {lastDatadate}</small></small>
    </Card.Footer>
    </Card></Col>
    <Col xs= {12} md={4}>    <Card border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2">
          <Card.Body>
          <Card.Title className="text-center text-danger"><h3>{last_ndeaths}</h3></Card.Title>
          <Card.Text className="text-center">
          <small> летальных исходов </small>
          </Card.Text>
          </Card.Body>
        <Card.Footer className="bg-white">
        <small className="text-muted"><small className="text-center">По данным на {lastDatadate}</small></small>
        </Card.Footer>
        </Card></Col>
  </Row>
        </Container>
        <div align="center" style={{ width: '80rem' }} className ="my-4">
        <Row className="my-2">
        <Col  xs={12} sm={9}>
       </Col>
        <Col xs={12} sm={3}>
        <OverlayTrigger
         placement="left"
         overlay={
           <Popover>
             <Popover.Body>
              <small className="text-muted">Чтобы скрыть отображаемые данные - кликните по их названиям</small>
             </Popover.Body>
           </Popover>
         }
         >
          <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsInfo size = {18} /></Button>
          </OverlayTrigger>
        <OverlayTrigger
         placement="left"
         overlay={
           <Popover>
             <Popover.Body>
              <small className="text-muted">Для приближения - выделите необходимую область или прокрутите колесо мыши.</small>
             </Popover.Body>
           </Popover>
         }
         >
          <Button variant="outline-secondary" size="sm"  className="align-right mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
          </OverlayTrigger>
           <Button variant="outline-secondary" size="sm" className="mx-1" onClick={chart}><BsZoomOut/></Button>
          <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart2(e)}><FiDownload/></Button>
        </Col>
        </Row>
          <Line id="chart2"options={chartOptions} data={chartData} height="90%" />
        </div>
        </div>
      );
    };
export default Omsk_nd;
