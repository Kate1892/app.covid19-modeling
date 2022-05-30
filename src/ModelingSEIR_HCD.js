import React, { useState, useEffect} from "react";
import axios from "axios";
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Form, ListGroup, FormControl, Stack,
OverlayTrigger, Popover, InputGroup, ProgressBar, Spinner, Tabs, Tab, Collapse, Carousel, Alert, Modal, ButtonGroup,
DropdownButton, Dropdown} from 'react-bootstrap';
import {FcSearch} from 'react-icons/fc'
import {FiDownload } from 'react-icons/fi'
import {BsZoomOut, BsInfo, BsZoomIn} from 'react-icons/bs'

import {BsFillFileEarmarkPdfFill, BsFillArrowUpRightSquareFill, BsFillCaretRightFill, BsFillCaretDownFill,
BsFillPersonLinesFill, BsExclamationLg} from 'react-icons/bs'
import { Formik } from "formik";
import sfblok from "./images/sfblok.png"
import sfifblok from "./images/sfifblok.png"
import firdblok from "./images/firdblok.png"
import blokd from "./images/blokd.png"

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


function ModelingSEIR_HCD() {

  const download_chart=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart2')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }
  const download_chart3=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart3')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }
  const download_chart4=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart4')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }
  const download_chart5=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart5')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }
  const download_chart6=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart6')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }
  const download_chart7=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart7')
    imageLink.download = 'scenario.png'
    imageLink.href = img.toDataURL('image/png', 1)
    imageLink.click()
  }
  const download_chart8=(e) => {
    e.preventDefault()
    const imageLink = document.createElement('a')
    const img = document.getElementById('chart8')
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
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({})

  const [openBS, setOpenBS] = useState(true);
  const [openM, setOpenM] = useState(false);
  const [openV, setOpenV] = useState(false);

  const [chartData_bsR0, setChartData_bsR0] = useState({
    datasets: [],
  })
  const [chartOptions_bsR0, setChartOptions_bsR0] = useState({})

  const forecasts_R0=()=>{
    let data = [];
    let mean = [];
    let max = [];
    let min = [];
    let tr = []
    let tr_min = []
    let tr_max = []
    axios
    .get("http://localhost:4000/api/forecasts_train")
    .then(res => {
        console.log("this!")
        console.log(res)
        for (const dataObj of res.data) {
          data.push(dataObj.Date);
          tr.push(dataObj.R0_mean)
          tr_min.push(dataObj.R0_min)
          tr_max.push(dataObj.R0_max)
          mean.push(dataObj.R0_mean)
          max.push(dataObj.R0_max)
          min.push(dataObj.R0_min)
        }
        axios
        .get("http://localhost:4000/api/forecasts")
        .then(res => {
            console.log("this")
            console.log(res)
            for (const dataObj of res.data) {
              data.push(dataObj.Date);
              mean.push(dataObj.R0_mean)
              max.push(dataObj.R0_max)
              min.push(dataObj.R0_min)
            }
            setChartData_bsR0({
              labels: data,
              datasets: [
                {
                  label: "реальные данные",
                  data: tr_min,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 0.1)",
                  backgroundColor: "rgba(2, 117, 216, 0.1)",
                  tension: 0.9,
                  borderWidth: 0.1,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
                  {
                    label: "реальные данные",
                    data: tr_max,
                    fill: '-1',
                    borderColor: "rgba(2, 117, 216, 0.1)",
                    backgroundColor: "rgba(2, 117, 216, 0.1)",
                    tension: 0.9,
                    borderWidth: 0.1,
                    pointRadius: 0.3,
                    pointHoverRadius: 5,
                    pointHitRadius: 30,
                    pointBorderWidth: 0.1,
                    barPercentage: 2
                    },
                {
                  label: "реальные данные",
                  data: tr,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 1)",
                  backgroundColor: "rgba(2, 117, 216, 1)",
                  tension: 0.9,
                  borderWidth: 2,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
                  {
                    label: "модель",
                    data: min,
                    fill: false,
                    borderColor: "rgba(217, 83, 79, 0.1)",
                    backgroundColor: "rgba(217, 83, 79, 0.1)",
                    tension: 0.9,
                    borderWidth: 0.1,
                    pointRadius: 0.3,
                    pointHoverRadius: 5,
                    pointHitRadius: 30,
                    pointBorderWidth: 0.1,
                    barPercentage: 2
                    },
                    {
                      label: "модель",
                      data: max,
                      fill: '-1',
                      borderColor: "rgba(217, 83, 79, 0.1)",
                      backgroundColor: "rgba(217, 83, 79, 0.1)",
                      tension: 0.9,
                      borderWidth: 0.1,
                      pointRadius: 0.3,
                      pointHoverRadius: 5,
                      pointHitRadius: 30,
                      pointBorderWidth: 0.1,
                      barPercentage: 2
                      },
              {
                label: "модель",
                data: mean,
                fill: false,
                borderColor: "rgba(217, 83, 79, 1)",
                backgroundColor: "rgba(217, 83, 79, 1)",
                tension: 0.9,
                borderWidth: 2,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2
                },
            ],
            });
            setChartOptions_bsR0({
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
                  position: "right",
                },
                title: {
                  display: true,
                  align: 'start',
                  text: "",
                },
              }
            });
          })
    }).catch(err => {
        console.log(err);
      });
  }
  const [chartData_pred, setChartData_pred] = useState({
    datasets: [],
  })
  const [chartOptions_pred, setChartOptions_pred] = useState({})

  const forecasts_newd=()=>{
    let data = [];
    let mean = [];
    let max = [];
    let min = [];
    let tr = []
    axios
    .get("http://localhost:4000/api/forecasts_true")
    .then(res => {
        console.log("this")
        console.log(res)
        for (const dataObj of res.data) {
          data.push(dataObj.date);
          tr.push(dataObj.new_diagnoses)
          mean.push(0)
        }
        axios
        .get("http://localhost:4000/api/forecasts")
        .then(res => {
            console.log("this")
            console.log(res)
            for (const dataObj of res.data) {
              data.push(dataObj.Date);
              mean.push(dataObj.fk_mean)
              max.push(dataObj.fk_max)
              min.push(dataObj.fk_min)
            }
            setChartData_pred({
              labels: data,
              datasets: [
                {
                  label: "реальные данные",
                  data: tr,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 1)",
                  backgroundColor: "rgba(2, 117, 216, 1)",
                  tension: 0.9,
                  borderWidth: 0.1,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
              {
                label: "модель",
                data: mean,
                fill: false,
                borderColor: "rgba(217, 83, 79, 1)",
                backgroundColor: "rgba(217, 83, 79, 1)",
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2
                },
            ],
            });
            setChartOptions_pred({
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
                  position: "right",
                },
                title: {
                  display: true,
                  align: 'start',
                  text: "Новые выявленные случаи",
                },
              }
            });
          })
    }).catch(err => {
        console.log(err);
      });
  }
  const forecasts_newcr=()=>{
    let data = [];
    let mean = [];
    let max = [];
    let min = [];
    let tr = []
    axios
    .get("http://localhost:4000/api/forecasts_true")
    .then(res => {
        console.log("this")
        console.log(res)
        for (const dataObj of res.data) {
          data.push(dataObj.date);
          tr.push(dataObj.ventilation)
          mean.push(0)
        }
        axios
        .get("http://localhost:4000/api/forecasts")
        .then(res => {
            console.log("this")
            console.log(res)
            for (const dataObj of res.data) {
              data.push(dataObj.Date);
              mean.push(dataObj.C_mean)
              max.push(dataObj.C_max)
              min.push(dataObj.C_min)
            }
            setChartData_pred({
              labels: data,
              datasets: [
                {
                  label: "реальные данные",
                  data: tr,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 1)",
                  backgroundColor: "rgba(2, 117, 216, 1)",
                  tension: 0.9,
                  borderWidth: 0.1,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
              {
                label: "модель",
                data: mean,
                fill: false,
                borderColor: "rgba(217, 83, 79, 1)",
                backgroundColor: "rgba(217, 83, 79, 1)",
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2
                },
            ],
            });
            setChartOptions_pred({
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
                  position: "right",
                },
                title: {
                  display: true,
                  align: 'start',
                  text: "Критически больные, С",
                },
              }
            });
          })
    }).catch(err => {
        console.log(err);
      });
  }
  const forecasts_newdth=()=>{
    let data = [];
    let mean = [];
    let max = [];
    let min = [];
    let tr = []
    axios
    .get("http://localhost:4000/api/forecasts_true")
    .then(res => {
        console.log("this")
        console.log(res)
        for (const dataObj of res.data) {
          data.push(dataObj.date);
          tr.push(dataObj.cum_deaths)
          mean.push(0)
        }
        axios
        .get("http://localhost:4000/api/forecasts")
        .then(res => {
            console.log("this")
            console.log(res)
            for (const dataObj of res.data) {
              data.push(dataObj.Date);
              mean.push(dataObj.D_mean)
              max.push(dataObj.D_max)
              min.push(dataObj.D_min)
            }
            setChartData_pred({
              labels: data,
              datasets: [
                {
                  label: "реальные данные",
                  data: tr,
                  fill: false,
                  borderColor: "rgba(2, 117, 216, 1)",
                  backgroundColor: "rgba(2, 117, 216, 1)",
                  tension: 0.9,
                  borderWidth: 0.1,
                  pointRadius: 0.3,
                  pointHoverRadius: 5,
                  pointHitRadius: 30,
                  pointBorderWidth: 0.1,
                  barPercentage: 2
                  },
              {
                label: "модель",
                data: mean,
                fill: false,
                borderColor: "rgba(217, 83, 79, 1)",
                backgroundColor: "rgba(217, 83, 79, 1)",
                tension: 0.9,
                borderWidth: 0.1,
                pointRadius: 0.3,
                pointHoverRadius: 5,
                pointHitRadius: 30,
                pointBorderWidth: 0.1,
                barPercentage: 2
                },
            ],
            });
            setChartOptions_pred({
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
                  position: "right",
                },
                title: {
                  display: true,
                  align: 'start',
                  text: "Умершие, D",
                },
              }
            });
          })
    }).catch(err => {
        console.log(err);
      });
  }

  let r0_mean = []
  let r0_max = []
  let r0_min = []
  const [r0_meanBS, setr0_meanDataBS] = useState(r0_mean)

  const res_validR0=()=>{
    let dataBS = [];
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataBS.push(dataObj.Date);
        r0_mean.push(dataObj.R0_mean)
        r0_max.push(dataObj.R0_max)
        r0_min.push(dataObj.R0_min)

      }
      console.log(dataBS)

      setChartData({
        labels: dataBS,
        datasets: [

          {
            label: "R0 min",
            data: r0_min,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "R0 max",
            data: r0_max,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "R0 среднее",
          data: r0_mean,
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
            position: "right",
          },
          title: {
            display: true,
            align: 'start',
            text: "",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const [chartData2, setChartData2] = useState({
    datasets: [],
  })

  const [chartDataTrain, setChartDataTrain] = useState({
    datasets: [],
  })
  const [chartOptionsTrain, setChartOptionsTrain] = useState({})
  let newI = []
  const new_i=()=>{
    let dataBS = [];
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
    //  console.log(res)
      /*for (const dataObj of res.data) {
        newI.push(dataObj.I_mean)
        dataBS.push(dataObj.Date);
      }
      console.log(dataBS)
      setChartData2({
        labels: dataBS,
        datasets: [
          {
            label: "I mean",
            data: newI,
            fill: false,
            borderColor: [
              'rgba(0, 0, 255, 0.8)',
            ],
            backgroundColor: [
              'rgba(0, 0, 255, 0.8)',
            ],
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            }
      ],
    });*/
    }).catch(err => {
        console.log(err);
      });
  }

  const res_trainR0=()=>{
      let dataBS = [];
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!!")
      console.log(res)
     for (const dataObj of res.data) {
        dataBS.push(dataObj.Date);
        r0_mean.push(dataObj.R0_mean)
        r0_max.push(dataObj.R0_max)
        r0_min.push(dataObj.R0_min)
      }
      console.log(dataBS)

      setChartDataTrain({
        labels: dataBS,
        datasets: [

          {
            label: "R0 min",
            data: r0_min,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "R0 max",
            data: r0_max,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "R0 среднее",
          data: r0_mean,
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
      ],
      });
      setChartOptionsTrain({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'start',
            text: "",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }


  const [chartOptionsSEIRHCD, setChartOptionsSEIRHCD] = useState({})
  const [chartDataSEIRHCD, setChartDataSEIRHCD] = useState({
    datasets: [],
  })

  const res_trainFK=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.fk_mean)
        max_data.push(dataObj.fk_max)
        min_data.push(dataObj.fk_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.new_diagnoses));
        }
        setChartDataSEIRHCD({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13, 110, 253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Новые выявленные случаи",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }
  const res_trainS=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.S_mean)
        max_data.push(dataObj.S_max)
        min_data.push(dataObj.S_min)
      }
      setChartDataSEIRHCD({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: "S min",
            data: min_data,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "S max",
            data: max_data,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "S среднее",
          data: mean_data,
          fill: false,
          borderColor: "rgba(13,110,253, 1)",
          backgroundColor: "rgba(13,110,253, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
      ],
      });
      setChartOptionsSEIRHCD({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "Восприимчивые",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const res_trainE=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.E_mean)
        max_data.push(dataObj.E_max)
        min_data.push(dataObj.E_min)
      }
      setChartDataSEIRHCD({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: "E min",
            data: min_data,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "E max",
            data: max_data,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "E среднее",
          data: mean_data,
          fill: false,
          borderColor: "rgba(13,110,253, 1)",
          backgroundColor: "rgba(13,110,253, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
      ],
      });
      setChartOptionsSEIRHCD({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "Больные без симптомов",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const res_trainI=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.I_mean)
        max_data.push(dataObj.I_max)
        min_data.push(dataObj.I_min)
      }
      setChartDataSEIRHCD({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: "I min",
            data: min_data,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "I max",
            data: max_data,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "I среднее",
          data: mean_data,
          fill: false,
          borderColor: "rgba(13,110,253, 1)",
          backgroundColor: "rgba(13,110,253, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
      ],
      });
      setChartOptionsSEIRHCD({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "Больные с симптомами",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const res_trainR=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.R_mean)
        max_data.push(dataObj.R_max)
        min_data.push(dataObj.R_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.cum_recoveries));
        }
        setChartDataSEIRHCD({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "R min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "R max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "R среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13,110,253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Вылеченные",
            },
          }
        });
      })

    }).catch(err => {
        console.log(err);
      });
  }
  const res_trainH=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.H_mean)
        max_data.push(dataObj.H_max)
        min_data.push(dataObj.H_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.hospitalised));
        }
        setChartDataSEIRHCD({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "H min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "H max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "H среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13,110,253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Госпитализированные",
            },
          }
        });
      })

    }).catch(err => {
        console.log(err);
      });
  }
  const res_trainC=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.C_mean)
        max_data.push(dataObj.C_max)
        min_data.push(dataObj.C_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.n_critical));
        }
        setChartDataSEIRHCD({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "C min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "C max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "C среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13,110,253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Критически больные",
            },
          }
        });
      })

    }).catch(err => {
        console.log(err);
      });
  }
  const res_trainD=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.D_mean)
        max_data.push(dataObj.D_max)
        min_data.push(dataObj.D_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.cum_deaths));
        }
        setChartDataSEIRHCD({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "D min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "D max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "D среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13, 110, 253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Умершие",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }

  const [chartOptionsSEIRHCD_v, setChartOptionsSEIRHCD_v] = useState({})
  const [chartDataSEIRHCD_v, setChartDataSEIRHCD_v] = useState({
    datasets: [],
  })

  const res_validFK=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!!!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.fk_mean)
        max_data.push(dataObj.fk_max)
        min_data.push(dataObj.fk_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.new_diagnoses));
        }
        setChartDataSEIRHCD_v({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13, 110, 253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD_v({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Новые выявленные случаи",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }
  const res_validS=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.S_mean)
        max_data.push(dataObj.S_max)
        min_data.push(dataObj.S_min)
      }
      setChartDataSEIRHCD_v({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: "S min",
            data: min_data,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "S max",
            data: max_data,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "S среднее",
          data: mean_data,
          fill: false,
          borderColor: "rgba(13,110,253, 1)",
          backgroundColor: "rgba(13,110,253, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
      ],
      });
      setChartOptionsSEIRHCD_v({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "Восприимчивые",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const res_validE=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.E_mean)
        max_data.push(dataObj.E_max)
        min_data.push(dataObj.E_min)
      }
      setChartDataSEIRHCD_v({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: "E min",
            data: min_data,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "E max",
            data: max_data,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "E среднее",
          data: mean_data,
          fill: false,
          borderColor: "rgba(13,110,253, 1)",
          backgroundColor: "rgba(13,110,253, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
      ],
      });
      setChartOptionsSEIRHCD_v({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "Больные без симптомов",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const res_validI=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.I_mean)
        max_data.push(dataObj.I_max)
        min_data.push(dataObj.I_min)
      }
      setChartDataSEIRHCD_v({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: "I min",
            data: min_data,
            fill: false,
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: "I max",
            data: max_data,
            fill: '-1',
            borderColor: "rgba(0,0,0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            tension: 0.9,
            borderWidth: 1,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
        {
          label: "I среднее",
          data: mean_data,
          fill: false,
          borderColor: "rgba(13,110,253, 1)",
          backgroundColor: "rgba(13,110,253, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
      ],
      });
      setChartOptionsSEIRHCD_v({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "Больные с симптомами",
          },
        }
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const res_validR=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.R_mean)
        max_data.push(dataObj.R_max)
        min_data.push(dataObj.R_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.cum_recoveries));
        }
        setChartDataSEIRHCD_v({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "R min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "R max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "R среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13,110,253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD_v({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Вылеченные",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }
  const res_validH=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.H_mean)
        max_data.push(dataObj.H_max)
        min_data.push(dataObj.H_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.hospitalised));
        }
        setChartDataSEIRHCD_v({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "H min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "H max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "H среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13,110,253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD_v({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Госпитализированные",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }
  const res_validC=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.C_mean)
        max_data.push(dataObj.C_max)
        min_data.push(dataObj.C_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.n_critical));
        }
        setChartDataSEIRHCD_v({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "C min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "C max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "C среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13,110,253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD_v({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Критически больные",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }
  const res_validD=()=>{
    let dataSEIRHCD = []
    let mean_data = []
    let max_data = []
    let min_data = []
    let r_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      //console.log(res)
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        mean_data.push(dataObj.D_mean)
        max_data.push(dataObj.D_max)
        min_data.push(dataObj.D_min)
      }
      axios
      .get("http://89.253.218.66:4000/api/csvCovid/nd")
      .then(res2 => {
        for (const dataObj of res2.data) {
          r_data.push(parseInt(dataObj.cum_deaths));
        }
        setChartDataSEIRHCD_v({
          labels:   dataSEIRHCD,
          datasets: [
            {
              label: "D min",
              data: min_data,
              fill: false,
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
            {
              label: "D max",
              data: max_data,
              fill: '-1',
              borderColor: "rgba(0,0,0, 0.1)",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              tension: 0.9,
              borderWidth: 1,
              pointRadius: 0.3,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1,
              },
          {
            label: "D среднее",
            data: mean_data,
            fill: false,
            borderColor: "rgba(13,110,253, 1)",
            backgroundColor: "rgba(13, 110, 253, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
            {
              label: "Реальные данные",
              data: r_data,
              fill: false,
              borderColor: "rgba(255, 127, 80, 1)",
              backgroundColor: "rgba(255, 127, 80, 1)",
              tension: 0.9,
              borderWidth: 0.01,
              pointRadius: 2,
              pointHoverRadius: 5,
              pointHitRadius: 30,
              pointBorderWidth: 0.1
              },
        ],
        });
        setChartOptionsSEIRHCD_v({
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
              position: "right",
            },
            title: {
              display: true,
              align: 'center',
              text: "Умершие",
            },
          }
        });
      })
    }).catch(err => {
        console.log(err);
      });
  }

  const [chartOptions_p, setChartOptions_p] = useState({})
  const [chartData_p, setChartData_p] = useState({
    datasets: [],
  })
  const res_validP=()=>{
    let dataSEIRHCD = []
    let ae_data = []
    let ai_data = []
    let e_data = []
    let m_data = []
    axios
    .get("http://localhost:4000/api/res_valid")
    .then(res => {
      console.log("!")
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        ae_data.push(dataObj.alpha_e_mean)
        ai_data.push(dataObj.alpha_i_mean)
        e_data.push(dataObj.eps_hc_mean)
        m_data.push(dataObj.mu_mean)
      }
      setChartData_p({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: '\u03B1\u2091',
            data: ae_data,
            fill: false,
            borderColor: "rgba(0,0,255, 1)",
            backgroundColor: "rgba(0, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: '\u03B1\u1D62',
            data: ai_data,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
          label: '\u03B5\u2095\u1D9C',
          data: e_data,
          fill: false,
          borderColor: "rgba(92, 184, 92, 1)",
          backgroundColor: "rgba(92, 184, 92, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
          {
            label: '\u03BC',
            data: m_data,
            fill: false,
            borderColor: "rgba(128, 0, 255, 1)",
            backgroundColor: "rgba(128, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
      ],
      });
      setChartOptions_p({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "",
          },
        },
        scales: {
          quantity: {
            title: {
              display: true,
              text: 'вероятность'
            },
            position:'left',
            type: 'linear',
          },
        },
      });
    }).catch(err => {
        console.log(err);
      });
  }
  const [chartOptions_pm, setChartOptions_pm] = useState({})
  const [chartData_pm, setChartData_pm] = useState({
    datasets: [],
  })
  const res_trainP=()=>{
    let dataSEIRHCD = []
    let ae_data = []
    let ai_data = []
    let e_data = []
    let m_data = []
    axios
    .get("http://localhost:4000/api/res_train")
    .then(res => {
      console.log("!")
      for (const dataObj of res.data) {
        dataSEIRHCD.push(dataObj.Date);
        ae_data.push(dataObj.alpha_e_mean)
        ai_data.push(dataObj.alpha_i_mean)
        e_data.push(dataObj.eps_hc_mean)
        m_data.push(dataObj.mu_mean)
      }
      setChartData_pm({
        labels:   dataSEIRHCD,
        datasets: [
          {
            label: '\u03B1\u2091',
            data: ae_data,
            fill: false,
            borderColor: "rgba(0,0,255, 1)",
            backgroundColor: "rgba(0, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
            label: '\u03B1\u1D62',
            data: ai_data,
            fill: false,
            borderColor: "rgba(255,0,0, 1)",
            backgroundColor: "rgba(255, 0, 0, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
          {
          label: '\u03B5\u2095\u1D9C',
          data: e_data,
          fill: false,
          borderColor: "rgba(92, 184, 92, 1)",
          backgroundColor: "rgba(92, 184, 92, 1)",
          tension: 0.9,
          borderWidth: 2,
          pointRadius: 0.3,
          pointHoverRadius: 5,
          pointHitRadius: 30,
          pointBorderWidth: 0.1,
          },
          {
            label: '\u03BC',
            data: m_data,
            fill: false,
            borderColor: "rgba(128, 0, 255, 1)",
            backgroundColor: "rgba(128, 0, 255, 1)",
            tension: 0.9,
            borderWidth: 2,
            pointRadius: 0.3,
            pointHoverRadius: 5,
            pointHitRadius: 30,
            pointBorderWidth: 0.1,
            },
      ],
      });
      setChartOptions_pm({
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
            position: "right",
          },
          title: {
            display: true,
            align: 'center',
            text: "",
          },
        },
        scales: {
          quantity: {
            title: {
              display: true,
              text: 'вероятность'
            },
            position:'left',
            type: 'linear',
          },
        },
      });
    }).catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
     res_validR0();
  }, [])

  useEffect(() => {
     res_trainR0();
  }, [])

  useEffect(() => {
     res_trainFK();
  }, [])
  useEffect(() => {
     res_validFK();
  }, [])
  useEffect(() => {
     res_validP();
  }, [])
  useEffect(() => {
     res_trainP();
  }, [])
  useEffect(() => {
     forecasts_newd();
  }, [])
  useEffect(() => {
     forecasts_R0();
  }, [])

  const [prognose_type, setPrognose_type] = useState(1)
  const [prognose_data, setPrognose_data] = useState(1)
//1 - новые выявленные случаи
//2 - критически больные
//3 - умершие
  const [openSEIRHCD, setOpenSEIRHCD] = useState(false);
  return (
    <>
    <Card className=" mx-auto" border="light" bg="light">
    <Row >
      <Col md={2} >
      <Row >
        <Col xs= {12}  lg={12}>    <Button
              variant="outline-primary"
              className="bg-white text-primary my-2 mx-2"
              onClick={() => setOpenSEIRHCD(!openSEIRHCD)}
            > {openSEIRHCD? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Описание модели
            </Button></Col>
        <Col xs= {12} lg={12}>
                    ...</Col>
                    </Row>
    </Col>
    <Col md={10} >
    <Card className="my-3"><p align="justify" className="mx-3 my-1"><small>Краткая информаци </small></p> </Card>
<div className="mx-2"><hr /></div>
</Col>
  </Row>
  <Collapse in={openSEIRHCD}>
    <div id="example-collapse-text" className="my-2">
    <Row >
       <Col sm={12} xs={12} md={12} lg={6}><Card className="border mx-3 my-1">
         <Card.Header className=" text-center text-success">Структура модели</Card.Header>
         <Card.Body>
         <Image
         src={sfblok}
         rounded
         fluid
         />
         </Card.Body></Card>
         <Card className="border mx-3 my-1">
           <Card.Header className=" text-center text-white bg-success">Математическая модель</Card.Header>
           <Card.Body align="justify">
           <div><small>Описывается системой 7 обыкновенных дифференциальных уравнений, удовлетворяющих закону баланса масс:</small></div>
           <div className="my-3">
           <Image
           src={blokd}
           rounded
           fluid
           />
           </div>
           </Card.Body></Card>
         </Col>
       <Col sm={12} xs={12} md={12}  lg={6}><Card className="border my-1 mx-3">
         <Card.Header className=" text-center text-white bg-success">Параметры модели</Card.Header>
         <Card.Body align="left">
         <small>
         <Table striped bordered hover>
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
      <td><i>{'\u03B1'}(t)</i></td>
      <td>Индекс самоизоляции (<a href="https://yandex.ru/company/researches/2020/podomam">данные Яндекса</a>)</td>
      <td>(0, 5)</td>
    </tr>
    <tr>
      <td>2</td>
      <td><i>{'\u03B1'}<sub>E</sub>(t)</i></td>
      <td>Параметр заражения между бессимптомной <i>E(t)</i> и восприимчивой <i>S(t)</i> группами населения (<i>{'\u03B1'}<sub>E</sub>>>{'\u03B1'}<sub>I</sub></i>)</td>
      <td>(0, 1)</td>
    </tr>
    <tr>
      <td>3</td>
      <td><i>{'\u03B1'}<sub>I</sub>(t)</i></td>
      <td>Параметр заражения между инфицированным <i>I(t)</i> и восприимчивым <i>S(t)</i> населением</td>
      <td>(0, 1)</td>
    </tr>
    <tr>
      <td>4</td>
      <td><i>{'\u03B2'}(t)</i></td>
      <td>Доля инфицированных, имеющая антитела IgG к SARS-CoV-2</td>
      <td><a href="https://away.vk.com/away.php">Инвитро</a></td>
    </tr>
    <tr>
      <td>5</td>
      <td><i>{'\u03B5'}<sub>hc</sub>(t)</i></td>
      <td>Доля госпитализированных случаев <i>H(t)</i>, которым требуется подключение ИВЛ</td>
      <td>(0, 1)</td>
    </tr>
    <tr>
      <td>6</td>
      <td><i>{'\u03BC'}(t)</i></td>
      <td>Доля смертельных случаев</td>
      <td>(0, 0.5)</td>
    </tr>
    <tr>
      <td>7</td>
      <td><i>{'\u03C4'}</i></td>
      <td>Латентный период</td>
      <td>2 дня</td>
    </tr>
    <tr>
      <td>8</td>
      <td><i>t<sub>inc</sub></i></td>
      <td>Длительность инкубационного периода</td>
      <td>2-14 дней</td>
    </tr>
    <tr>
      <td>9</td>
      <td><i>t<sub>inf</sub></i></td>
      <td>Длительность периода инфицирования</td>
      <td>2,5-14 дней</td>
    </tr>
    <tr>
      <td>10</td>
      <td><i>t<sub>hosp</sub></i></td>
      <td>Длительность периода госпитализации</td>
      <td>4-5 дней</td>
    </tr>
    <tr>
      <td>11</td>
      <td><i>t<sub>crit</sub></i></td>
      <td>Длительность использования ИВЛ</td>
      <td>10-20 дней</td>
    </tr>
    <tr>
      <td>12</td>
      <td><i>t<sub>imm</sub></i></td>
      <td>Средняя продолжительность гуморального иммунитета после выздоровления</td>
      <td>180 дней</td>
    </tr>
    </tbody>
    </Table>
    </small>
         </Card.Body></Card>
         <Card className="border  my-1 mx-3">
           <Card.Header className="text-center text-success">Обратная задача</Card.Header>
           <Card.Body>
           <small>
           Для каждого временного промежутка (14 дней) уточняются параметры задачи </small><div><i>q(t) = ({'\u03B1'}<sub>E</sub>(t),{'\u03B1'}<sub>I</sub>(t), {'\u03B5'}<sub>hc</sub>(t),{'\u03BC'}(t), E<sub>0</sub>, I<sub>0</sub>) </i>
           <small>
           путем минимизации целевого функционала </small></div>
           <Image
           src={firdblok}
           rounded
           fluid
           style={{ width: '3rem' }, {height: '3rem'}}
           />
           <small>
методом глобальной оптимизации на основе древовидных оценок Парзена OPTUNA (ссылка на сайт).
<div className="text-success">Реальные данные:</div>
 <div><i>f<sub>k</sub></i> – количество выявленных случаев COVID-19 в день <i>k</i>,</div>
<div><i>b<sub>k</sub></i> – процент бессимптомных выявленных в день <i>k</i>,</div>
 <div><i>C<sub>k</sub></i> – количество критических случаев COVID-19 в день <i>k</i>, нуждающихся в подключении аппарата ИВЛ,</div>
<div><i>g<sub>k</sub></i> – количество умерших в результате COVID-19 в день <i>k</i>.</div></small>
           </Card.Body></Card>
           <Card className="border my-1 mx-3">
             <Card.Header className="text-center text-success bg-light">Алгоритм усвоения данных</Card.Header>
             <Card.Body align="center">
             <Image
             src={sfifblok}
             rounded
             fluid
             />
             </Card.Body></Card>
         </Col>
     </Row>
    </div>
  </Collapse>
    <OverlayTrigger
       placement="bottom"
       overlay={
         <Popover>
           <Popover.Body>
           <div align="justify" className="text-black">
           <small>Cценарий распространения COVID-19 в регионе на 7 дней при условии сохранения текущих ограничений и уровня вакцинации на день моделрования.</small></div>
           </Popover.Body>
         </Popover>
       }>

    <Button variant="outline-info" className="mx-3 my-2 bg-white" onClick={() => setOpenBS(!openBS)}
      aria-controls="example-fade-text"
      aria-expanded={openBS}>
     {openBS? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Базовый сценарий</Button>
     </OverlayTrigger>
     <Collapse in={openBS}>
       <div id="example-collapse-text">

       <Row>
<Col xs={12} md={4}>
       <ListGroup className = "mx-3 my-1">
       <ListGroup.Item align="left" className="bg-secondary text-secondary">.
        </ListGroup.Item>
      <ListGroup.Item variant="light">
     <Row>
      <Col xs={12} md={12} sm={12} lg={4}>
      <Stack gap={0}>
    <div > <p align="left" className="my-1 text-black text-small"><small>Дата прогноза</small></p></div>
    <div > <p align="left" className="my-4 text-black text-small"><small>Прогноз</small></p></div>
      </Stack>
     </Col>
     <Col xs={12} md={12} sm={12} lg={8}>
     <Formik
         >
           {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, resetForm, setFieldValue}) => (
   <Form noValidate >
     <Stack gap={3}>
         <Form.Select aria-label="Default select example"
           type="number"
           name="data"
           disabled={true}
           >
               <option value="1">21.07.2021</option>
               <option value="2">20.07.2021</option>
         </Form.Select>
         <Form.Select aria-label="Default select example"
           type="number"
           name="type"
           onChange={(e) => {
             const selectedType = e.target.value;
             let stype = Number(selectedType)
             setPrognose_type(stype)
             console.log(prognose_data)
             if(stype == 1){
               console.log("1")
               forecasts_newd()
             } else if(stype == 2) {
               console.log("работает2")
               forecasts_newcr()
             } else if(stype == 3) {
               console.log("работае3")
               forecasts_newdth()
             }
           }}>
               <option value="1">Новые выявленные случаи</option>
               <option value="2">Критически больные, C</option>
               <option value="3">Умершие, D</option>
         </Form.Select>
     </Stack>
     </Form>
   )}

 </Formik>
     </Col>
   </Row>
   </ListGroup.Item>
   </ListGroup>
   <ListGroup className = "mx-3 my-1">
<ListGroup.Item align="left" className="bg-secondary text-white">Данные
 </ListGroup.Item>
  <ListGroup.Item variant="light">

</ListGroup.Item>
</ListGroup>
   </Col>
   <Col xs={12} md={8}>
   <Row >
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
     <Button variant="outline-secondary" size="sm" className="mx-1" onClick={(e) => {
       if (prognose_type == 1){
         forecasts_newd()
       }else if(prognose_type == 2){
         forecasts_newcr()
       }else if(prognose_type == 3){
         forecasts_newdth()
       }
     }}><BsZoomOut/></Button>
     <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart(e)}><FiDownload/></Button>
   </Col>
   </Row>
<div style={{ width: '55rem' }}><Bar id="chart2" options={chartOptions_pred} data={chartData_pred} height="100%" /></div>
   </Col>
 </Row>
 <div className="mx-3"><hr /></div>
  <h4 className="mx-5 text-secondary">Текущие параметры модели и их доверительный интервал</h4>
 <Row className="mx-5 my-3">
 <Col xs= {10} md={3}><Card border="light"  className="mx-2">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Параметр заражения между бессимптомной <i>E(t)</i> и восприимчивой <i>S(t)</i> группами населения</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={6}>
  <Card.Title className="text-success"><h1 style={{fontSize:"80px", align:"right"}}>{'\u03B1'}<sub style={{fontSize:"35px"}}>e</sub></h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={6}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>0.127</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>0.095</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></Col>
 <Col xs= {10} md={3}><Card border="light" className="mx-2">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Параметр заражения между инфицированным <i>I(t)</i> и восприимчивым населением <i>S(t)</i>, который связан с контагиозностью вируса и социальными факторами</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={6}>
  <Card.Title className="text-success"><h1 style={{fontSize:"80px"}}>{'\u03B1'}<sub style={{fontSize:"35px"}}>i</sub></h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={6}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>0.062</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>0.045</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></Col>
 <Col xs= {10} md={3}><Card border="light"  className="mx-2">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Доля госпитализированных случаев <i>H(t)</i>, находящихся в критическом состоянии и требующих подключения аппарата ИВЛ
</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={7}>
  <Card.Title className=" text-success"><h1 className="mx-2" style={{fontSize:"80px"}}>{'\u03B5'}<sub style={{fontSize:"32px"}}>hc</sub></h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={5}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>0.237</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>0.115</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></Col>
 <Col xs= {10} md={3}><Card border="light"  className="mx-2">
   <Card.Body>
   <OverlayTrigger
    placement="bottom"
    overlay={
      <Popover>
        <Popover.Body>
         <div className="text-success">Смертность в результате COVID-19</div>
        </Popover.Body>
      </Popover>
    }
    >
   <Row>
    <Col sm={6} md={6} xs={6} lg={6}>
  <Card.Title className="text-success"><h1 style={{fontSize:"80px"}}>{'\u03BC'}</h1></Card.Title>
    </Col>
    <Col sm={6} md={6} xs={6} lg={6}><Card.Text className="">
    <Stack className="">
    <small>
    <div className="text-muted" >среднее <b className="text-black"><h5>0.488</h5></b></div>
    <div className="text-muted">std <b className="text-black"><h5>0.017</h5></b></div> </small>
  </Stack>
    </Card.Text></Col>
  </Row></OverlayTrigger>
   </Card.Body>
 </Card></Col>
</Row>
<div className="mx-3"><hr /></div>
 <h4 className="mx-5 text-secondary">Базовый индекс репродукции COVID-19 в Новосибирской области и прогноз</h4>
 <Container className="mx-2">
 <Row >
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
   <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_validR0}><BsZoomOut/></Button>
   <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart3(e)}><FiDownload/></Button>
 </Col>
 </Row>
</Container>
<Container style={{ width: '80rem' }}><Line id="chart9" options={chartOptions_bsR0} data={chartData_bsR0} height="90%" /></Container>
       </div>
     </Collapse>
     <OverlayTrigger
        placement="bottom"
        overlay={
          <Popover>
            <Popover.Body>
            <div align="justify" className="text-black">
            <small>Результат реализации SEIR-HCD модели распространения COVID-19 в регионе при откалиброванных параметрах модели на каждому 14-дневном интервале по времени.</small></div>
            </Popover.Body>
          </Popover>
        }>
    <Button variant="outline-info" className="mx-3 my-2 bg-white" onClick={() => setOpenM(!openM)}
      aria-controls="example-fade-text"
      aria-expanded={openM}>
    {openM? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Моделирование</Button>
    </OverlayTrigger>
    <Collapse in={openM}>
      <div id="example-collapse-text">
      <h4 className="mx-5 my-2 text-secondary">Кривые SEIRHCD и реальные данные</h4>
      <Nav variant="pills" defaultActiveKey="1"className="my-2" >
        <Nav.Item >
        <Button className="mx-3" size="sm" variant="outline-info" onClick={res_trainFK} style={{color:"#FFFFFF"}}>
          <Nav.Link eventKey="1">Новые выявленные случаи</Nav.Link>
        </Button>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Восприимчивые</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_trainS} className="mx-1">
          <Nav.Link eventKey="2"><b>S</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные без симптомов</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_trainE} className="mx-1">
          <Nav.Link eventKey="3"><b>E</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные с симптомами</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_trainI} className="mx-1">
          <Nav.Link eventKey="4"><b>I</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Вылеченные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_trainR} className="mx-1">
          <Nav.Link eventKey="5"><b>R</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Госпитализированные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_trainH} className="mx-1">
          <Nav.Link eventKey="6"><b>H</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Критически больные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={res_trainC} className="mx-1">
          <Nav.Link eventKey="7"><b>C</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Умершие</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={res_trainD} className="mx-1">
          <Nav.Link eventKey="8"><b>D</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
      </Nav>
      <Row >
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

        <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart4(e)}><FiDownload/></Button>
      </Col>
      </Row>
<Container style={{ width: '80rem' }}><Line id="chart4" options={chartOptionsSEIRHCD} data={chartDataSEIRHCD} height="90%" /></Container>
<div className="mx-3"><hr /></div>
       <h4 className="mx-5 text-secondary">Базовый индекс репродукции COVID-19 в Новосибирской области</h4>
       <Row >
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
          <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_trainR0}><BsZoomOut/></Button>
         <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart5(e)}><FiDownload/></Button>
       </Col>
       </Row>
       <Container style={{ width: '80rem' }}><Line id="chart5" options={chartOptionsTrain} data={chartDataTrain} height="100%" /></Container>
       <hr />
       <h4 className="mx-5 text-secondary">Восстановленные параметры модели COVID-19 для Новосибирской области</h4>
       <Row >
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
          <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_trainP}><BsZoomOut/></Button>
         <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart8(e)}><FiDownload/></Button>
       </Col>
       </Row>
       <Container style={{ width: '80rem' }}><Line id="chart8" options={chartOptions_pm} data={chartData_pm} height="90%" /></Container>
      </div>
    </Collapse>
    <OverlayTrigger
       placement="bottom"
       overlay={
         <Popover>
           <Popover.Body>
           <div align="justify" className="text-black">
           <small>Результат валидации SEIR-HCD модели распространения COVID-19 в регионе: по откалиброванным параметрам за предыдущий 14-дневный период реализуется базовый сценарий на 7 дней, который сравненивается с реальными данными.</small></div>
           </Popover.Body>
         </Popover>
       }>
    <Button variant="outline-info" className="mx-3 my-2 bg-white" onClick={() => setOpenV(!openV)}
      aria-controls="example-fade-text"
      aria-expanded={openV}>
    {openV? <BsFillCaretDownFill size = {15}/> : <BsFillCaretRightFill size = {15}/>} Валидация модели</Button>
    </OverlayTrigger>
    <Collapse in={openV}>
      <div id="example-collapse-text">
      <h4 className="mx-5 my-2 text-secondary">Кривые SEIRHCD и реальные данные</h4>
      <Nav variant="pills" defaultActiveKey="1"className="my-2" >
        <Nav.Item >
        <Button className="mx-3" size="sm" variant="outline-info" onClick={res_validFK} style={{color:"#FFFFFF"}}>
          <Nav.Link eventKey="1">Новые выявленные случаи</Nav.Link>
        </Button>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Восприимчивые</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_validS} className="mx-1">
          <Nav.Link eventKey="2"><b>S</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные без симптомов</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_validE} className="mx-1">
          <Nav.Link eventKey="3"><b>E</b></Nav.Link>
          </Button>
          </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Больные с симптомами</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_validI} className="mx-1">
          <Nav.Link eventKey="4"><b>I</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Вылеченные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_validR} className="mx-1">
          <Nav.Link eventKey="5"><b>R</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Госпитализированные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info" onClick={res_validH} className="mx-1">
          <Nav.Link eventKey="6"><b>H</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Критически больные</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={res_validC} className="mx-1">
          <Nav.Link eventKey="7"><b>C</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <OverlayTrigger
           placement="bottom"
           overlay={
             <Popover>
               <Popover.Body>
               <div align="center" className="text-info">
               Умершие</div>
               </Popover.Body>
             </Popover>
           }>
        <Button  size="sm" variant="outline-info"  onClick={res_validD} className="mx-1">
          <Nav.Link eventKey="8"><b>D</b></Nav.Link>
          </Button></OverlayTrigger>
        </Nav.Item>
      </Nav>
      <Row >
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
        <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart6(e)}><FiDownload/></Button>
      </Col>
      </Row>
<Container style={{ width: '80rem' }}><Line id="chart6"options={chartOptionsSEIRHCD_v} data={chartDataSEIRHCD_v} height="90%" /></Container>
<hr />
<h4 className="mx-5 text-secondary">Базовый индекс репродукции COVID-19 в Новосибирской области</h4>
<Row >
<Col  xs={12} sm={9}>
</Col>
<Col xs={12} sm={3}><OverlayTrigger
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
   <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_validR0}><BsZoomOut/></Button>
  <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart3(e)}><FiDownload/></Button>
</Col>
</Row>
<Container style={{ width: '80rem' }}><Line id="chart3" options={chartOptions} data={chartData} height="90%" /></Container>
<hr />
<h4 className="mx-5 text-secondary">Восстановленные параметры модели COVID-19 для Новосибирской области</h4>
<Row >
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
   <Button variant="outline-secondary" size="sm" className="mx-1" onClick={res_validP}><BsZoomOut/></Button>
  <Button variant="outline-secondary" size="sm" className="" onClick={(e)=>download_chart7(e)}><FiDownload/></Button>
</Col>
</Row>
<Container style={{ width: '80rem' }}><Line id="chart7" options={chartOptions_p} data={chartData_p} height="90%" /></Container>
      </div>
    </Collapse>
    </Card>
    </>
  )
}
export default ModelingSEIR_HCD;
