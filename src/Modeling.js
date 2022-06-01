import React, {useState, useEffect, useRef} from "react";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Form, ListGroup, FormControl, Stack,
OverlayTrigger, Popover, InputGroup, ProgressBar, Spinner, Tabs, Tab, Collapse, Carousel, Alert, Modal, ButtonGroup,
DropdownButton, Dropdown} from 'react-bootstrap';
import { CLoadingButton } from '@coreui/react-pro'
import axios from "axios"
import FileDownload from "js-file-download"
import CollapseParamCSV from './Components/CollapseParamCSV'
import NavModeling from './Components/NavModeling'
import CollapseModelSettings from './Components/CollapseModelSettings'
import { Formik } from "formik";
import * as yup from "yup";
import {FiDownload } from 'react-icons/fi'
import {BsFillFileEarmarkPdfFill, BsFillArrowUpRightSquareFill, BsFillCaretRightFill, BsFillCaretDownFill,
BsFillPersonLinesFill, BsExclamationLg, BsInfo} from 'react-icons/bs'
import {FcSearch} from 'react-icons/fc'
import NaviBarv2 from './Components/NaviBarv2';
import {BsZoomIn} from 'react-icons/bs'

import Novosibirsk_nd from './Components/Covid_state_data_novosibirsk/Novosibirsk_nd'
import CovidNewD_plot from './Components/CovidNewD_plot'

import { DownloadCount } from 'axios-progress-bar'

import ModelingSEIR_HCD from './ModelingSEIR_HCD'

import fblok from "./images/fblok.png"
import model from "./images/model.png"
import sblok from "./images/sblok.png"
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';

import Footer from './Components/Footer'

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

ChartJS.register(zoomPlugin);


const download_article=(e)=>{
   e.preventDefault()
   axios({
     url:"http://89.253.218.66:4000/article",
     method: "GET",
     responseType:"blob"
   }).then((resA)=>{
     console.log(resA);
     FileDownload(resA.data, "article.pdf")
   })
}

const schema = yup.object().shape({
  //population: yup.number().max(10).typeError("требуется числовое значение").required("обязательное поле"),
  population: yup.number().min(1000000).max(8000000).typeError("требуется числовое значение").required("обязательное поле"),
  n_future: yup.number().min(10).max(100).typeError("требуется числовое значение").required("обязательное поле"),
  init_infected: yup.number().min(10).max(100).typeError("требуется числовое значение").required("обязательное поле"),
});

export function Modeling(){



  const [population_data, setPopulation_data] = useState(2798170)
  const [region_data, setRegion_data] = useState(1)
  const [region_name, setRegion_name] = useState("Новосибирская область")
  const [n_future_day, setN_future_day] = useState(45)
  const [init_inf, setInit_inf] = useState(20)

  const download_chart=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }

  const zoom_chart=(e) => {
    e.preventDefault()
    const img = document.getElementById('chart')
    img.plugins.scales.y.min = 80;
    img.plugins.scales.y.max = 100;
    img.update()
  }

  const cancelToken = useRef();

  const run_msim_ = (e) => {
    e.preventDefault()
    var now = new Date().toLocaleDateString();
    console.log(now)
    setWithspinner(true)
    setIsrunning(true)
    cancelToken.current = axios.CancelToken.source();
  axios({
      url:'http://89.253.218.66:4000/data',
      method: "POST",
      responseType:"blob",
      data: {population_data, region_data, n_future_day, init_inf},
      cancelToken: cancelToken.current.token
    }).then((res)=>{
         setWithspinner(false)
         setIsrunning(false)
         initchart()
      })
  }

  const run_msim_1 = (e) => {
    e.preventDefault()
    setWithspinner(true)
    setIsrunning(true)
  axios({
      url:'http://89.253.218.66:4000/data',
      method: "POST",
      responseType:"blob",
      data: {population_data, region_data, n_future_day, init_inf},
    }).then((res)=>{
      cancelToken.current = axios.CancelToken.source();
      axios({
        url:"http://89.253.218.66:4000/api/try2",
        method: "GET",
        responseType:"blob",
        cancelToken: cancelToken.current.token
    })
       .then((res)=>{
         setWithspinner(false)
         setIsrunning(false)
         initchart()
      })
    })
 }

 const break_get = () => {
   setWithspinner(false)
   setIsrunning(false)
   cancelToken.current.cancel();
 }

    const [chartData_all, setChartData_all] = useState({
      datasets: [],
    })
    const [initchartData_all, setINITChartData_all] = useState({
      datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})
    const [isrunning, setIsrunning] = useState(false)

    let cov_data = [];
    let cov_nd = [];
    let cov_nd_high = []
    let cov_nd_state=[];
    let cov_data_state=[];
    const [data, setData] = useState(cov_data)
    const [data_cov_nd_high, setData_cov_nd_high] = useState(cov_nd_high)
    const [data_cov_nd, setData_cov_nd] = useState(cov_nd)

    let cov_cum_diag = [];
    let cov_cum_diag_high = [];
    const [data_cov_cum_diag_high, setData_cov_cum_diag_high] = useState(cov_cum_diag_high)
    const [data_cov_cum_diag, setData_cov_cum_diag] = useState(cov_cum_diag)

    let cov_new_death= [];
    let cov_new_death_high = [];
    const [data_cov_new_death_high, setData_cov_new_death_high] = useState(cov_new_death_high)
    const [data_new_death, setData_cov_new_death] = useState(cov_new_death)

    let cov_new_rec= [];
    let cov_new_rec_high = [];
    const [data_cov_new_rec_high, setData_cov_new_rec_high] = useState(cov_new_rec_high)
    const [data_new_rec, setData_cov_new_rec] = useState(cov_new_rec)

    let cov_new_crit= [];
    let cov_new_crit_high = [];
    const [data_cov_new_crit_high, setData_cov_new_crit_high] = useState(cov_new_crit_high)
    const [data_new_crit, setData_cov_new_crit] = useState(cov_new_crit)


    const [someerrors, setSomeerrors] = useState(true)
    const [chartnum, setChartnum] = useState(1)
    //1-5 - chart
    //6-10 - init chart

    const real_data1=(e)=>{
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
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
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
          label: "cредний прогноз",
          data: data_cov_nd,
          fill: false,
          borderColor: "rgba(0, 191, 255, 1)",
          backgroundColor: "rgba(0, 191, 255, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1
        },
          {
          label: "максимальный прогноз",
          data: data_cov_nd_high,
          fill: true,
          backgroundColor: "rgba(135, 206, 250, 0.2)",
          borderColor: "rgba(135, 206, 250, 0.8)",
          tension: 0.9,
          borderWidth: 0.5,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
        },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data2=(e)=>{
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.cum_diagnoses));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.001,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_cov_cum_diag,
            fill: false,
            borderColor: "rgba(0, 0, 0, 1)",
            backgroundColor: "rgba(0, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_cum_diag_high,
            fill: true,
            borderColor: "rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data3=(e)=>{
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_deaths));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_new_death,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_new_death_high,
            fill: true,
            borderColor: "rgba(255, 0, 0, 0.1)",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data4=(e)=>{
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_recoveries));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
                label: "cредний прогноз",
                data: data_new_rec,
                fill: false,
                borderColor: "rgba(252,141,214, 1)",
                backgroundColor: "rgba(252,141,214, 1)",
                tension: 0.9,
                borderWidth: 4,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
                {
                label: "максимальный прогноз",
                data: data_cov_new_rec_high,
                fill: true,
                borderColor: "rgba(252,141,214, 0.3)",
                backgroundColor: "rgba(252,141,214, 0.3)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data5=(e)=>{
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.n_critical));
          cov_data_state.push(dataObj.date);
        }
        setChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
              label: "cредний прогноз",
              data: data_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: data_cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }

    const real_data6=(e)=>{
      axios({
          url:'http://89.253.218.66:4000/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_diagnoses));
        }
        console.log(cov_nd_state)
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
          label: "cредний прогноз",
          data: data_cov_nd,
          fill: false,
          borderColor: "rgba(0, 191, 255, 1)",
          backgroundColor: "rgba(0, 191, 255, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1
        },
          {
          label: "максимальный прогноз",
          data: data_cov_nd_high,
          fill: true,
          backgroundColor: "rgba(135, 206, 250, 0.2)",
          borderColor: "rgba(135, 206, 250, 0.8)",
          tension: 0.9,
          borderWidth: 0.5,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
        },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data7=(e)=>{
      axios({
          url:'http://89.253.218.66:4000/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.cum_diagnoses));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_cov_cum_diag,
            fill: false,
            borderColor: "rgba(0, 0, 0, 1)",
            backgroundColor: "rgba(0, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 4,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_cum_diag_high,
            fill: true,
            borderColor: "rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data8=(e)=>{
      axios({
          url:'http://89.253.218.66:4000/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_deaths));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
            label: "cредний прогноз",
            data: data_new_death,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
            label: "максимальный прогноз",
            data: data_cov_new_death_high,
            fill: true,
            borderColor: "rgba(255, 0, 0, 0.1)",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data9=(e)=>{
      axios({
          url:'http://89.253.218.66:4000/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.new_recoveries));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
                label: "cредний прогноз",
                data: data_new_rec,
                fill: false,
                borderColor: "rgba(252,141,214, 1)",
                backgroundColor: "rgba(252,141,214, 1)",
                tension: 0.9,
                borderWidth: 4,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
                {
                label: "максимальный прогноз",
                data: data_cov_new_rec_high,
                fill: true,
                borderColor: "rgba(252,141,214, 0.3)",
                backgroundColor: "rgba(252,141,214, 0.3)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }
    const real_data10=(e)=>{
      axios({
          url:'http://89.253.218.66:4000/api/curData',
          method: "POST",
          data: {region_data},
        })
      .then(res => {
        for (const dataObj of res.data) {
          cov_nd_state.push(parseInt(dataObj.n_critical));
          cov_data_state.push(dataObj.date);
        }
        setINITChartData_all({
          labels: data,
          datasets: [
            {
            label: "данные",
            data: cov_nd_state,
            borderColor: "rgb(255, 127, 80)",
            backgroundColor: "rgb(255, 127, 80, 1)",
            tension: 0.9,
            borderWidth: 0.01,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1
          },
          {
              label: "cредний прогноз",
              data: data_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: data_cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
        ],
        });
      }).catch(err => {
          console.log(err);
        });
    }


    const initchart = () => {
      setChartnum(6)
      axios({
          url:'http://89.253.218.66:4000/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          console.log(res.data)
          for (const dataObj of res.data.results.new_diagnoses) {
            cov_nd.push(parseInt(dataObj));
            setData_cov_nd(cov_nd)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_diagnoses_high) {
            cov_nd_high.push(dataObj);
            setData_cov_nd_high(cov_nd_high)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
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
            },
              {
              label: "максимальный прогноз",
              data: cov_nd_high,
              fill: true,
              backgroundColor: "rgba(135, 206, 250, 0.2)",
              borderColor: "rgba(135, 206, 250, 0.8)",
              tension: 0.9,
              borderWidth: 0.5,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев заражений",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
          setnewChart(false)
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const initchart_cumdiag = () => {
      setChartnum(7)
      axios({
          url:'http://89.253.218.66:4000/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.cum_diagnoses) {
            cov_cum_diag.push(parseInt(dataObj));
            setData_cov_cum_diag(cov_cum_diag)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.cum_diagnoses_high) {
            cov_cum_diag_high.push(dataObj);
            setData_cov_cum_diag_high(cov_cum_diag)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_cum_diag,
              fill: false,
              borderColor: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_cum_diag_high,
              fill: true,
              borderColor: "rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз суммарного количества заражений",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const initchart_newdeath = () => {
      setChartnum(8)
      axios({
          url:'http://89.253.218.66:4000/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.new_deaths) {
            cov_new_death.push(parseInt(dataObj));
            setData_cov_new_death(cov_new_death)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_deaths_high) {
            cov_new_death_high.push(dataObj);
            setData_cov_new_death_high(cov_new_death)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_death,
              fill: false,
              borderColor: "rgba(255,0,0, 1)",
              backgroundColor: "rgba(255, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_death_high,
              fill: true,
              borderColor: "rgba(255, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз летальных исходов",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const initchart_new_rec = () => {
      setChartnum(9)
      axios({
          url:'http://89.253.218.66:4000/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.new_recoveries) {
            cov_new_rec.push(parseInt(dataObj));
            setData_cov_new_rec(cov_new_rec)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_recoveries_high) {
            cov_new_rec_high.push(dataObj);
            setData_cov_new_rec_high(cov_new_rec_high)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_rec,
              fill: false,
              borderColor: "rgba(252,141,214, 1)",
              backgroundColor: "rgba(252,141,214, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_rec_high,
              fill: true,
              borderColor: "rgba(252,141,214, 0.3)",
              backgroundColor: "rgba(252,141,214, 0.3)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев выздоровления",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const initchart_new_crit = () => {
      setChartnum(10)
      axios({
          url:'http://89.253.218.66:4000/getUMsim2',
          method: "POST",
          data: {population_data, region_data, n_future_day, init_inf},
        })
        .then(res => {
          for (const dataObj of res.data.results.new_critical) {
            cov_new_crit.push(parseInt(dataObj));
            setData_cov_new_crit(cov_new_crit)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_critical_high) {
            cov_new_crit_high.push(dataObj);
            setData_cov_new_crit_high(cov_new_crit_high)
          }
          setINITChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз количества больных в критическом состоянии",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };


    const chart = () => {
      setChartnum(1)
      axios
        .get("http://89.253.218.66:4000/getMsim")
        .then(res => {
          setSomeerrors(false)
          console.log(res)
          for (const dataObj of res.data.results.new_diagnoses) {
            cov_nd.push(parseInt(dataObj));
            setData_cov_nd(cov_nd)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_diagnoses_high) {
            cov_nd_high.push(dataObj);
            setData_cov_nd_high(cov_nd_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
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
              },
              {
              label: "максимальный прогноз",
              data: cov_nd_high,
              fill: true,
              backgroundColor: "rgba(135, 206, 250, 0.2)",
              borderColor: "rgba(135, 206, 250, 0.8)",
              tension: 0.9,
              borderWidth: 0.5,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
            },],
          });
          setChartOptions({
            responsive: true,
              plugins: {
                pan: {
                  enabled: true,
                  mode: 'xy',
                },
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
                   pan: {
                     enabled: true
                   },
                   pinch: {
                     enabled: true
                   },
                   mode: 'xy',
                 },

              },
              legend: {
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев заражения",
              },
              subtitle: {
                display: true,
                align: 'end',
                position: "top",
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          setSomeerrors(true)
          console.log(err);
        });
      console.log(cov_nd, cov_data);
    };

    const chart_cumdiag = () => {
      setChartnum(2)
      axios
        .get("http://89.253.218.66:4000/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.cum_diagnoses) {
            cov_cum_diag.push(parseInt(dataObj));
            setData_cov_cum_diag(cov_cum_diag)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.cum_diagnoses_high) {
            cov_cum_diag_high.push(dataObj);
            setData_cov_cum_diag_high(cov_cum_diag_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_cum_diag,
              fill: false,
              borderColor: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_cum_diag_high,
              fill: true,
              borderColor: "rgba(0, 0, 0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз суммарного количества заражений",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const chart_newdeath = () => {
      setChartnum(3)
      axios
        .get("http://89.253.218.66:4000/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.new_deaths) {
            cov_new_death.push(parseInt(dataObj));
            setData_cov_new_death(cov_new_death)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_deaths_high) {
            cov_new_death_high.push(dataObj);
            setData_cov_new_death_high(cov_new_death)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_death,
              fill: false,
              borderColor: "rgba(255,0,0, 1)",
              backgroundColor: "rgba(255, 0, 0, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_death_high,
              fill: true,
              borderColor: "rgba(255, 0, 0, 0.1)",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз летальных исходов",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const chart_new_rec = () => {
      setChartnum(4)
      axios
        .get("http://89.253.218.66:4000/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.new_recoveries) {
            cov_new_rec.push(parseInt(dataObj));
            setData_cov_new_rec(cov_new_rec)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_recoveries_high) {
            cov_new_rec_high.push(dataObj);
            setData_cov_new_rec_high(cov_new_rec_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_rec,
              fill: false,
              borderColor: "rgba(252,141,214, 1)",
              backgroundColor: "rgba(252,141,214, 1)",
              tension: 0.9,
              borderWidth: 4,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_rec_high,
              fill: true,
              borderColor: "rgba(252,141,214, 0.3)",
              backgroundColor: "rgba(252,141,214, 0.3)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз новых случаев выздоровления",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };

    const chart_new_crit = () => {
      setChartnum(5)
      axios
        .get("http://89.253.218.66:4000/getMsim")
        .then(res => {
          for (const dataObj of res.data.results.new_critical) {
            cov_new_crit.push(parseInt(dataObj));
            setData_cov_new_crit(cov_new_crit)
          }
          for (const dataObj of res.data.results.date) {
            cov_data.push(dataObj);
            setData(cov_data)
          }
          for (const dataObj of res.data.results.new_critical_high) {
            cov_new_crit_high.push(dataObj);
            setData_cov_new_crit_high(cov_new_crit_high)
          }
          setChartData_all({
            labels: cov_data,
            datasets: [
              {
              label: "cредний прогноз",
              data: cov_new_crit,
              fill: false,
              borderColor: "rgba(128, 0, 255, 1)",
              backgroundColor: "rgba(128, 0, 255, 1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
              {
              label: "максимальный прогноз",
              data: cov_new_crit_high,
              fill: true,
              borderColor: "rgba(128, 0, 255, 0.1)",
              backgroundColor: "rgba(128, 0, 255, 0.1)",
              tension: 0.9,
              borderWidth: 2,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
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
                position: "top",
              },
              title: {
                display: true,
                align: 'start',
                text: "Прогноз количества больных в критическом состоянии",
              },
              subtitle: {
                display: true,
                align: 'end',
                text: ["Регион прогнозирования: " + region_name, "Численность популяции: " + population_data, "Начально инфицированных: "+ init_inf, "Дней прогнозирования: " + n_future_day],
              },
            }
          });
        })
        .catch(err => {
          console.log(err);
        });;
    };


    useEffect(() => {
      real_data1();
    }, [])

    useEffect(() => {
      chart();
    }, [])

    useEffect(() => {
        window.addEventListener("beforeunload", handleUnload);
        return () => {
          window.removeEventListener("beforeunload", handleUnload);
        };
      }, []);

      const handleUnload = (e) => {
        const message = "o/";
         axios.get("http://89.253.218.66:4000/deleteCurFiles")
        return 1;
      };

//    useEffect(() => {
//      return () => {
//        axios.get("http://localhost:4000/deleteCurFiles")
//      };
//    }, []);



  const [withspinner, setWithspinner] = useState(false)
  const [newChart, setnewChart] = useState(true) /////true
  const [open, setOpen] = useState(false);
  const [reset, setReset] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return(
  <>

  <NaviBarv2 />
      <Container className="my-3"   style={{
              height: "120%" }}>
        <Tabs justify defaultActiveKey="AOM" id="uncontrolled-tab-example" >
          <Tab eventKey="AOM" title="Агентная модель">
          <Card className="text-center mx-auto" border="light" bg="light">
          <Row >
            <Col md={2} >
            <Row >
              <Col xs= {12}  lg={12}>    <Button
                    variant="outline-primary"
                    className="bg-white text-primary my-2 mx-2"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-fade-text"
                    aria-expanded={open}
                  >  {open? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Описание модели
                  </Button></Col>
              <Col xs= {12} lg={12}>

              <OverlayTrigger
                rootClose={true}
                 placement="bottom"
                 ref={(ref) => this.overlay = ref}
                 overlay={
                   <Popover>
                     <Popover.Body>
                     <div align="center" className="text-black">
                     Моделирование сценариев распространения Covid-19 в Республике Казахстан на основе регуляризации агентной модели.</div>
                     <small  align="center" className="text-success"><div>О.И. Криворотько</div>
                     <div>С.И. Кабанихин</div>
                      <div>М.А. Бектемесов</div>
                        <div>М.И. Сосновская</div>
                          <div>А.В.Неверов</div></small>
                     </Popover.Body>
                   </Popover>
                 }>
                <Button variant="link" onClick={(e)=>{
                document.body.click(e)
                download_article(e)
                this.overlay.hide()
                }}><BsFillFileEarmarkPdfFill size={30}/></Button>
                  </OverlayTrigger>
                  <OverlayTrigger
                     placement="bottom"
                     overlay={
                       <Popover>
                         <Popover.Body>
                         <div align="center" className="text-success">
                         <div><small>Публикация в журнале Моделирование инфекционных заболеваний.</small></div>
                         <div className="text-black">Агентное моделирование вспышек COVID-19 в штате Нью-Йорк и Великобритании: алгоритм идентификации параметров</div>
                         <div><small>О.И. Криворотько</small></div>
                         <div><small>М.И. Сосновская</small></div>
                         <div><small>И.А. Ващенко</small></div>
                         <div><small>CliffKerr</small></div>
                         <div><small>DanielLesnic</small></div>
                    </div>
                         </Popover.Body>
                       </Popover>
                     }>
                    <a href="https://www.sciencedirect.com/science/article/pii/S2468042721000798"><Button variant="link"><BsFillArrowUpRightSquareFill size={30}/></Button></a>
                      </OverlayTrigger>
                      <OverlayTrigger
                         placement="bottom"
                         overlay={
                           <Popover>
                             <Popover.Body>
                             <div align="center" className="text-success">
                             <div><small>Препринт 300 СО РАН, института математики им. С.Л.Соболева.</small></div>
                             <div className="text-black">Математические модели распространения COVID-19.</div>
                              <div><small>О.И. Криворотько</small></div>
                              <div><small>С.И. Кабанихин</small></div>
                        </div>
                             </Popover.Body>
                           </Popover>
                         }>
                          <a href="https://arxiv.org/pdf/2112.05315.pdf"><Button variant="link"><BsFillArrowUpRightSquareFill size={30}/></Button></a>
                          </OverlayTrigger>
                          </Col>
                          </Row>
          </Col>
          <Col md={10} >
        <Card className="my-3">  <p align="justify" className="mx-3 my-1"><small>Прогнозирование производится посредством агентной модели расчета сценариев динамики выявленных случаев
COVID-19, в основе которой лежат обработка неполных эпидемиологических данных и решение обратной задачи восстановления параметров агентной
модели по совокупности доступных эпидемиологических данных. Основным инструментом построения модели является открытая библиотека <a href="https://docs.idmod.org/projects/covasim/en/latest/index.html" >COVASIM</a>. </small></p></Card>
<div className="mx-2"><hr /></div>
      </Col>
        </Row>
          <Collapse in={open}>
            <div id="example-collapse-text" className="my-2">
            <Row >
               <Col sm={12} xs={12} md={12} lg={6}><Card className="border mx-3 my-1">
                 <Card.Header className="text-success">1. Инициация популяции</Card.Header>
                 <Card.Body>
                 <p align="justify"><small >Формируются четыре структуры контактов, в которых могут находиться агенты в зависимости от возраста 0-9,10-19, …, 80+ лет.</small></p>
                 <Image
                 src={fblok}
                 rounded
                 fluid
                 onClick={handleShow1}
                 />
                 <Modal show={show1} onHide={handleClose1} animation={true}>
                 <Image
                 src={fblok}
                 rounded
                 fluid
                 />
                  </Modal>
                 </Card.Body></Card>
                 <Card className="border mx-3 my-1">
                   <Card.Header className="text-white bg-success">2. Заражение</Card.Header>
                   <Card.Body align="justify">
                   <div><small> Предполагается, что вирус передается между агентами, соединенными ребром графа. Заражение при близком контакте описывается кусочно-постоянным параметром <i className="text-danger">{'\u03B2'}</i>.</small></div>
                   <div className="my-3"><Image
                   src={sblok}
                   rounded
                   fluid

                   /></div>
                      <div><small><div className="text-success">Пример:</div> Домохозяйства - заполняются агентами согласно статистическим данным о
                 среднем размере семьи в регионе.</small></div>
                   </Card.Body></Card>
                 </Col>
               <Col sm={12} xs={12} md={12}  lg={6}><Card className="border my-1 mx-3">
                 <Card.Header className="text-white bg-success"><BsFillPersonLinesFill size={30}/>   Параметры агентов</Card.Header>
                 <Card.Body align="left">
                 <Row >
                  <Col><div>Не зависят от времени:</div>
                  <small>
                  <div>• возраст</div>
                  <div>• пол</div>
                  <div>• социальный статус</div>
                  <div>• прогрессирование заболевания</div></small></Col>
                  <Col><div>Зависят от времени:</div>
                  <small>
                  <div>• эпид. статус:</div>
                  <div>𝑆, 𝐸, 𝐼, 𝑅, 𝐻, 𝐶, 𝐷, 𝐴, 𝑀<OverlayTrigger
                     placement="right"
                     overlay={
                       <Popover>
                         <Popover.Body>
                         <small className="text-success">
                           <div>S – восприимчивые к заражению</div>
                           <div>E – зараженные незаразные</div>
                           <div>𝐼 – инфицированные</div>
                           <div>R – вылечившиеся</div>
                           <div>H – госпитализированные</div>
                           <div>C – больные в критическом состоянии</div>
                           <div>D – умершие</div>
                           <div>A - бессимптомные больные</div>
                           <div>M -  больные в легкой форме</div> </small>
                         </Popover.Body>
                       </Popover>
                     }>
                    <Button size="sm" variant="link" className="text-success">?</Button>
                      </OverlayTrigger>
                  </div>
                  <div>• шанс быть протестированным</div>
                  </small></Col>
                </Row>
                <div align="justify"><small>В зависимости от возраста агенты
                контактируют друг с другом в контактных сетях, представляющие собой полносвязные графы.</small></div>
                 </Card.Body></Card>
                 <Card className="border  my-1 mx-3">
                   <Card.Header className="text-success">3. Прогрессирование заболевания</Card.Header>
                   <Card.Body>
                   <Image

                   src={model}
                   rounded
                   fluid
                   onClick={handleShow}
                   />
                   <Modal show={show} onHide={handleClose} animation={true}>
                   <Image

                   src={model}
                   rounded
                   fluid
                   />
                    </Modal>
                   </Card.Body></Card>
                   <Card className="border my-1 mx-3">
                     <Card.Header className="text-success bg-light">4. Тестирование агентов</Card.Header>
                     <Card.Body align="justify">
                     <div><small>Проводится согласно ежедневным статистическим данным о количестве проведенных тестов в регионе. Шанс быть протестированным
   на COVID-19 <i>{'\u03C1'}</i> зависит от эпидемиологического статуса агента и определяется в ходе решения обратной задачи. Положительный результат
   могут получить агенты, статус которых обведен в оранжевую рамку. В модели предполагается, что вероятность
   тестирования агентов с симптомами выше, чем у бессимптомных больных.</small></div>

                     </Card.Body></Card>
                 </Col>
                 <Col sm={12} xs={12} md={12} lg={12}>
                 <Card className="border my-1 mx-3">
                   <Card.Header className="text-white bg-success">5. Введение сдерживающих эпидемию мер</Card.Header>
                   <Card.Body align="justify">
                     <div><small>В модели возможно введение карантинных мер как для всех контактных слоев, так и для каждого в отдельности.
    Это может быть сделано двумя способами: либо изменением значения параметра контагиозности вируса <i className="text-danger">{'\u03B2'}</i> (в случае введения обязательной меры ношения масок или социального дистанцирования), либо удалением ребер в графах сетей контактов (в случае введения самоизоляции
    и дистанционной работы).</small></div>

                   </Card.Body></Card></Col>
             </Row>
            </div>
          </Collapse>
          <Row >
            <Col sm={12} xs={12} md={12} lg={4}>
              <ListGroup className = "mx-3 my-1">
              <OverlayTrigger
               placement="right"
               overlay={
                <Alert variant="danger">
                  <h6>Пожалуйста, не обновляйте станицу</h6>
                  <small>при введении параметров и после запуска модели, </small>
                  <div><small>в противном случае расчёты будут прерваны</small></div>
                </Alert>

               }
               >
                <ListGroup.Item align="left" className="bg-secondary text-white">Параметры моделирования
                <BsExclamationLg />

                </ListGroup.Item>
                </OverlayTrigger>
                <ListGroup.Item variant="light">
                <Row >
                  <Col sm={12} sm={12} xs={12} md={12} lg={7} >
                  <Stack gap={0}>
                  <div>
                <Stack direction="horizontal" gap={3}>
                <div > <p align="left" className="my-3 text-black text-small"><small>Регион</small></p></div>

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
                  <div > <p align="left" className="my-2 text-black text-small"><small>Численность популяции</small></p></div>

                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                         Количество агентов - людей, восприимчивых к заболеванию.
                         <hr />
                         <small className="text-muted">от 1 000 000 до 8 000 000</small>
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
                    <Stack direction="horizontal" gap={0}>
                  <div > <p align="left" className=" text-black text-small"><small>Начально инфицированных</small></p></div>

                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                         Количество начально инфицированных человек.
                         <hr />
                         <small className="text-muted">от 10 до 100 человек</small>
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
                    <Stack direction="horizontal" gap={3}>
                  <div > <p align="left" className=" my-2 text-black text-small"><small>Дней прогнозирования</small></p></div>
                  <div>
                  <OverlayTrigger
                   placement="right"
                   overlay={
                     <Popover>
                       <Popover.Body>
                        На сколько дней вперед строится сценарий развития заболевания.
                        <hr />
                        <small className="text-muted">от 10 до 100 дней</small>
                       </Popover.Body>
                     </Popover>
                   }
                   >
                      <Button size="sm" variant="link" className="text-success">?</Button>
                    </OverlayTrigger>
                  </div>
                </Stack>
                <Row >
                      <Col sm={6}></Col>
                      <Col sm={6}>  <Button variant="secondary" align="end" className=" my-3 text-white" disabled={!isrunning} onClick={break_get}>Прервать</Button></Col>
                </Row>
                    </div>
                  </Stack>
              </Col>
                  <Col sm={12} sm={12} xs={12} md={12} lg={5}>
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
                          init_infected: init_inf,
                          n_future: n_future_day,
                          lastName: '3',
                        }}
                      >
                        {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, resetForm, setFieldValue}) => (
                <Form noValidate >
                  <Stack gap={3}>
                      <Form.Select aria-label="Default select example"
                        type="number"
                        name="region"
                        isValid={true}
                        onChange={(e) => {
                          const selectedRegion = e.target.value;
                          let sregion = Number(selectedRegion)
                          setRegion_data(sregion)
                          if(sregion == 1){
                            console.log("работает1")
                            setRegion_name("Новосибирская область")
                            setPopulation_data(2798170)
                            setFieldValue("population", 2798170)
                            console.log(population_data)
                          } else if(sregion == 2) {
                            console.log("работает2")
                            setRegion_name("Омская область")
                            setPopulation_data(578698)
                            setFieldValue("population", 1879548)
                            console.log(population_data)
                          } else if(sregion == 3) {
                            console.log("работае3")
                            setRegion_name("Алтайский край")
                            setPopulation_data(2268179)
                            setFieldValue("population", 2268179)
                            console.log(population_data)
                          }
                        }}
                        >
                            <option value="1">Новосибирская область</option>
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
                      <Form.Group as={Col} controlId="validationFormik04">
                        <Form.Control
                          type="number"
                          name="init_infected"
                          value={values.init_infected}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={!errors.init_infected}
                          isInvalid={!!errors.init_infected}
                          onSubmit={setInit_inf(values.init_infected)}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="validationFormik02">
                        <Form.Control
                          type="number"
                          name="n_future"
                          value={values.n_future}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isValid={!errors.n_future}
                          isInvalid={!!errors.n_future}
                          onSubmit={setN_future_day(values.n_future)}
                        />
                      </Form.Group>

                        <Button  type="submit"  variant="success"
                          disabled={!isValid || isrunning}
                          onSubmit={handleSubmit}
                          onClick={(e) => run_msim_(e)}
                        >
                        {withspinner ? <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        /> : null } Запустить</Button>
                  </Stack>
                  </Form>
                )}

              </Formik>
                </Col>
                {withspinner ? <small className="text-muted"><small> ...ожидаемое время расчёта: 1 минута </small></small> : null }
            </Row>
            </ListGroup.Item>
        </ListGroup>
        <CollapseModelSettings />
            </Col>
            <Col sm={12} xs={12} md={12} lg={8}>
            <Container>
              <Row >
              <Col  sm={8}>
            </Col>
              <Col sm={4}>
            {chartnum == 1 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data1(e)}>Показать данные</Button> : null}
            {chartnum == 2 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data2(e)}>Показать данные</Button> : null}
            {chartnum == 3 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data3(e)}>Показать данные</Button> : null}
            {chartnum == 4 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data4(e)}>Показать данные</Button> : null}
            {chartnum == 5 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data5(e)}>Показать данные</Button> : null}

            {chartnum == 6 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data6(e)}>Показать данные</Button> : null}
            {chartnum == 7 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data7(e)}>Показать данные</Button> : null}
            {chartnum == 8 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data8(e)}>Показать данные</Button> : null}
            {chartnum == 9 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data9(e)}>Показать данные</Button> : null}
            {chartnum == 10 ? <Button variant="outline-danger" className="" size="sm" onClick={(e)=>real_data10(e)}>Показать данные</Button> : null}
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
              <Button variant="outline-secondary" size="sm"  className=" mx-1" onClick={(e)=>zoom_chart(e)}><BsZoomIn /></Button>
              </OverlayTrigger>
              <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e)}><FiDownload/></Button>
              </Col>
              </Row>
              {someerrors ?   <Alert variant="danger" className="my-5"> <Alert.Heading>Ошибка загрузки</Alert.Heading>
              Сервер временно не отвечает, пожалуйста, <Alert.Link href="/modeling">обновите страницу</Alert.Link> или повторите попытку позже.
              <hr /> </Alert> :

   newChart? <div style={{ width: '50rem' }}><Line  id="chart" data={chartData_all} options={chartOptions} /></div> : <div style={{ width: '50rem' }}><Line id="chart" options={chartOptions} data={initchartData_all}/></div>}

   {newChart? <Nav variant="pills" defaultActiveKey="1"className="my-2" >
     <Nav.Item >
     <Button size="sm" variant="outline-info" onClick = {chart} style={{color:"#FFFFFF"}}>
       <Nav.Link eventKey="1">Заражения</Nav.Link>
     </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {chart_cumdiag} className="mx-1">
       <Nav.Link eventKey="2">Суммарная заболеваемость</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info"  onClick = {chart_newdeath} className="mx-1">
       <Nav.Link eventKey="3">Смертность</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {chart_new_rec} className="mx-1">
       <Nav.Link eventKey="4">Выздоровления</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {chart_new_crit} className="mx-1">
       <Nav.Link eventKey="5">Критические</Nav.Link>
       </Button>
     </Nav.Item>
   </Nav> : null}

   {newChart? null : <Nav variant="pills" defaultActiveKey="1" className="my-2">
     <Nav.Item >
     <Button size="sm" variant="outline-info" onClick = {initchart} style={{color:"#FFFFFF"}}>
       <Nav.Link eventKey="1">Заражения</Nav.Link>
     </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {initchart_cumdiag} className="mx-1">
       <Nav.Link eventKey="2">Суммарная заболеваемость</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button size="sm" variant="outline-info"  onClick = {initchart_newdeath} className="mx-1">
       <Nav.Link eventKey="3">Смертность</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {initchart_new_rec} className="mx-1">
       <Nav.Link eventKey="4">Выздоровления</Nav.Link>
       </Button>
     </Nav.Item>
     <Nav.Item>
     <Button  size="sm" variant="outline-info" onClick = {initchart_new_crit} className="mx-1">
       <Nav.Link eventKey="5">Критические</Nav.Link>
       </Button>
     </Nav.Item>
   </Nav>}
            </Container>
            </Col>
          </Row>
        </Card>
          </Tab>
          <Tab eventKey="SEIR-HCD" title="SEIR-HCD">
          <ModelingSEIR_HCD />

          </Tab>
        </Tabs>
    </Container>
<Footer />
  </>
)}
