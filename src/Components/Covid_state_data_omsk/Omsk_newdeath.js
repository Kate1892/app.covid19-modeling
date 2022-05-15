import React, { useState, useEffect} from "react";
import axios from "axios";
import {Container, Row, Col, Card, ListGroup, ListGroupItem, NavDropdown, Navbar, Button,
  Image, Tab, Nav, Dropdown, ButtonGroup, DropdownButton} from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);


function Omsk_newdeath() {

  const [lastData, setLastsData] = useState(0)
  const [lastDatadate, setLastsDatadate] = useState(0)
  const [chartData_all, setChartData_all] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  const chart = () => {
    let cov_data = [];
    let cov_ndeaths = [];
    let cov_last_nd = [];
    let cov_last_date = [];
    axios
      .get("http://localhost:4000/api/csvCovid/omsk")
      .then(res => {
        console.log(res);
        cov_last_nd.push(parseInt(res.data[res.data.length-1].new_deaths))
        cov_last_date.push(res.data[res.data.length-1].date)

        for (const dataObj of res.data) {
          cov_data.push(dataObj.date);
          cov_ndeaths.push(parseInt(dataObj.new_deaths));
        }
        setChartData_all({
          labels: cov_data,
          datasets: [
            {
            label: "новых случаев смерти",
            data: cov_ndeaths,
            borderColor: "rgb(255,0,0)",
            backgroundColor: "rgb(255,0,0, 0.4)"
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
              text: "Ежедневная статистика",
            }
          }
        });
        setLastsData(cov_last_nd)
        setLastsDatadate(cov_last_date)
      })
      .catch(err => {
        console.log(err);
      });
    console.log(cov_data, cov_last_nd);

  };

  useEffect(() => {
    chart();

  }, [])

  return (
    <Row>
      <Col sm={8}>

        <Container>
        <Container className ="my-3 mx-5">
          <Bar options={chartOptions} data={chartData_all}/>
        </Container>
        </Container>
      </Col>
      <Col sm={4}>
      <Card border="light" style={{ width: '17rem' }} className="mx-2">
        <Card.Body>
          <Card.Title className="text-center text-secondary"><h6></h6></Card.Title>

          <Card.Title className="text-center text-secondary"><h1>{lastData}</h1></Card.Title>
          <Card.Text className="text-center">
            новых смертей от коронавируса
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <small className="text-muted"><p className="text-center">По данным на {lastDatadate}</p></small>
        </Card.Footer>
      </Card>
      </Col>
    </Row>
  );
};
export default Omsk_newdeath;
