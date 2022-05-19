import React, { useState, useEffect} from "react";
import axios from "axios";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, NavDropdown, Navbar, Button,
  Image, Tab, Nav, Dropdown, ButtonGroup, DropdownButton, CardGroup} from 'react-bootstrap';

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


  function Novosibirsk_nd() {

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
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res => {
        console.log(res);
        cov_last_nd.push(parseInt(res.data[res.data.length-1].new_diagnoses))
        cov_last_date.push(res.data[res.data.length-1].date)
        cov_last_ndeaths.push(parseInt(res.data[res.data.length-1].new_deaths))
        cov_last_nrec.push(parseInt(res.data[res.data.length-1].new_recoveries))

        for (const dataObj of res.data) {
          cov_nd.push(parseInt(dataObj.new_diagnoses));
          cov_data.push(dataObj.date);
          cov_ndeaths.push(parseInt(dataObj.cum_deaths)); //
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
              label: "летальные исходы, шк.2",
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
            borderColor: "rgb(255, 255, 0)",
            backgroundColor: "rgb(255, 255, 0)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            yAxisID: 'y'
          },
          {
          label: "заболеваемость детей, шк.2",
          data: cov_cumchild,
          borderColor: "rgb(255, 192, 203)",
          backgroundColor: "rgb(255, 192, 203)",
          tension: 0.9,
          borderWidth: 4,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          yAxisID: 'y'
        },
          {
          label: "cлучаи выздоровления, шк.2",
          data: cov_nrec,
          borderColor: "rgb(168,228,160)",
          backgroundColor: "rgb(168,228,160)",
          tension: 0.9,
          borderWidth: 4,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          yAxisID: 'y'
        },
        {
          label: "в критическом состоянии, шк.1",
          data: cov_ncrit,
          borderColor: "rgb(128, 0, 255)",
          backgroundColor: "rgb(128,0,255)",
          tension: 0.9,
          borderWidth: 4,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          yAxisID: 'quantity'
        },
          ],
        });

        setChartOptions({
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
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

      <Row>
    <Col xs= {10} md={4}>  <Card  border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2">
        <Card.Body>
        <Card.Title className="text-center text-info"><h3>{lastData}</h3></Card.Title>
        <Card.Text className="text-center">
        <small>случаев заражения</small>
        </Card.Text>
        </Card.Body>
      <Card.Footer className="bg-white">
      <small className="text-muted"><small className="text-center">По данным на {lastDatadate}</small></small>
      </Card.Footer>
      </Card>
      </Col>
    <Col xs= {10} md={4}>  <Card border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2">
        <Card.Body>
        <Card.Title className="text-center text-success"><h3>{last_nrec}</h3></Card.Title>
        <Card.Text className="text-center">
        <small>случаев выздоровления</small>
        </Card.Text>
        </Card.Body>
      <Card.Footer className="bg-white">
      <small className="text-muted"><small className="text-center">По данным на {lastDatadate}</small></small>
      </Card.Footer>
      </Card>
      </Col>
    <Col xs= {10} md={4}>  <Card  border="light" style={{ width: '5rem' }, {height: '8rem'}} className="mx-2">
        <Card.Body>
        <Card.Title className="text-center text-danger"><h3>{last_ndeaths}</h3></Card.Title>
        <Card.Text className="text-center">
        <small> летальных исходов </small>
        </Card.Text>
        </Card.Body>
      <Card.Footer className="bg-white">
      <small className="text-muted"><small className="text-center">По данным на {lastDatadate}</small></small>
      </Card.Footer>
      </Card>
      </Col>
  </Row>

      </Container>
      <Card align="center"  className ="my-4">
        <Line options={chartOptions} data={chartData} />
      </Card>
      </div>
    );
  };
  export default Novosibirsk_nd;
