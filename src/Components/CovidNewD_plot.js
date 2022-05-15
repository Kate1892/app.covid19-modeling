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
import {Bar, Line} from 'react-chartjs-2'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);


function CovidNewD_plot() {


  const [chartData_all, setChartData_all] = useState({
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
          label: "наиб предс",
          data: cov_nd_state,
          borderColor: "rgb(255, 0, 0)",
          backgroundColor: "rgb(255, 0, 0, 1)"
        },
        {
        label: "cценарий новых диагнозов",
        data: data_cov_nd,
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(53, 162, 235, 1)"
      },
        {
        label: "наиб предс",
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
            text: "Прогноз",
          }
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }

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
            label: "cценарий новых диагнозов",
            data: cov_nd,
            borderColor: "rgb(0, 0, 0)",
            backgroundColor: "rgb(53, 162, 235, 1)"
          },
            {
            label: "наиб предс",
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
              position: "top",
            },
            title: {
              display: true,
              text: "Прогноз",
            }
          }
        });
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

  return (
          <Container className ="my-1">
          <Button  onClick={(e)=>real_data(e)}>Показать реальные данные</Button>
            <Bar options={chartOptions} data={chartData_all}/>
          </Container>
  );
};


export default CovidNewD_plot;
