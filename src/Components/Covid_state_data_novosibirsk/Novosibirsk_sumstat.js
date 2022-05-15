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


function Novosibirsk_sumstat() {

  const [lastData, setLastsData] = useState(0)
  const [lastDatadate, setLastsDatadate] = useState(0)
  const [chartData_all, setChartData_all] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})

  const chart = () => {
    let cov_nd_all = [];
    let cov_data = [];
    let cov_last_nd = [];
    let cov_last_date = [];
    axios
      .get("http://localhost:4000/api/csvCovid/nd")
      .then(res => {
        console.log(res);
        cov_last_nd.push(parseInt(res.data[res.data.length-1].cum_diagnoses_article))
        cov_last_date.push(res.data[res.data.length-1].date)
        for (const dataObj of res.data) {

          cov_nd_all.push(parseInt(dataObj.cum_diagnoses_article));
          cov_data.push(dataObj.date);
        }
        setChartData_all({
          labels: cov_data,
          datasets: [
            {
            label: "выявленные случаи",
            data: cov_nd_all,
            borderColor: "rgb(168,228,160)",
            backgroundColor: "rgb(168,228,160)"
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
              text: "Суммарная статистика",
            }
          }
        });
        setLastsData(cov_last_nd)
        setLastsDatadate(cov_last_date)
      })
      .catch(err => {
        console.log(err);
      });
    console.log(cov_nd_all, cov_data, cov_last_nd);

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
      <Col xs={20} sm={4}>
      <Card border="light" style={{ width: '17rem' }} className="mx-2">
        <Card.Body>
          <Card.Title className="text-center text-secondary"><h6></h6></Card.Title>

          <Card.Title className="text-center text-secondary"><h1>{lastData}</h1></Card.Title>
          <Card.Text className="text-center">
            официальное общее число выявленных случаев заражения коронавирусом за всё время пандемии
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
export default Novosibirsk_sumstat;
