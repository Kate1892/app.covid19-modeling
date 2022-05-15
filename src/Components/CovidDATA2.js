import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavModeling from './NavModeling';
import {Container, Card, Row, Col, Image, Button, Nav, NavDropdown, Table, Stack} from 'react-bootstrap';
import Axios from "axios"
import FileDownload from "js-file-download"
import CollapseParamCSV from './CollapseParamCSV'



const downloadN=(e)=>{
   e.preventDefault()
   Axios({
     url:"http://localhost:4000/api/n",
     method: "GET"
   }).then((res)=>{
     console.log(res);
     FileDownload(res.data, "novosibirsk-region-data.csv")
   })
}

const downloadA=(e)=>{
   e.preventDefault()
   Axios({
     url:"http://localhost:4000/api/a",
     method: "GET",
     responseType:"blob"
   }).then((resA)=>{
     console.log(resA);
     FileDownload(resA.data, "altay-region-data.csv")
   })
}

const downloadO=(e)=>{
   e.preventDefault()
   Axios({
     url:"http://localhost:4000/api/o",
     method: "GET",
     responseType:"blob"
   }).then((resO)=>{
     console.log(resO);
     FileDownload(resO.data, "omsk-region-data.csv")
   })
}


function CovidDATA2() {
const [first, setFirst] = useState(true)
const [second, setSecond] = useState(true)
const [third, setThird] = useState(true)
const sfirst=(e)=>{
   e.preventDefault()
   setFirst(false)
   console.log(first)
}
const sfirstno=(e)=>{
   e.preventDefault()
   setFirst(true)
   console.log(first)
}
const ssecond=(e)=>{
   e.preventDefault()
   setSecond(false)
   console.log(first)
}
const ssecondno=(e)=>{
   e.preventDefault()
   setSecond(true)
   console.log(first)
}
const sthird=(e)=>{
   e.preventDefault()
   setThird(false)
   console.log(first)
}
const sthirdno=(e)=>{
   e.preventDefault()
   setThird(true)
   console.log(first)
}
  return (
    <div className="bg-white">
    <Stack gap={3}>
    {first? <div className="" onClick={(e)=>downloadN(e)} onMouseEnter = {(e)=>sfirst(e)} onMouseLeave={(e)=>sfirstno(e)} >
        <Stack direction="horizontal" gap={3}>
          <div className=" " >
            <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
            src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Novosibirsk_region_gerb.png"
            rounded
            fluid
            />
            </div>
          <div className=" "><small>Новосибирская область</small></div>
          <div className=" "><Button variant="link" className="text-secondary" ><small>Скачать csv</small></Button></div>
        </Stack>

      </div> :
      <div className="bg-light" onClick={(e)=>downloadN(e)}  onMouseEnter = {(e)=>sfirst(e)} onMouseLeave={(e)=>sfirstno(e)}>
        <Stack direction="horizontal" gap={3}>
          <div className=" " >
            <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
            src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Novosibirsk_region_gerb.png"
            rounded
            fluid
            />
            </div>
          <div className=" "><small>Новосибирская область</small></div>
          <div className=" "><Button variant="link" className="text-secondary" ><small>Скачать csv</small></Button></div>
        </Stack>

      </div>}
      {second?   <div className=" " onClick={(e)=>downloadO(e)} onMouseEnter = {(e)=>ssecond(e)} onMouseLeave={(e)=>ssecondno(e)} >
          <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Omsk_region_gerb-255x300.png"
              rounded
              fluid
              onClick={(e)=>downloadO(e)}
              />
            </div>
            <div className=""><small onClick={(e)=>downloadO(e)}>Омская область</small> </div>
            <div className=""><Button variant="link" className="text-secondary " onClick={(e)=>downloadO(e)}> <small>Скачать csv</small></Button></div>
          </Stack>
        </div> :
        <div className="bg-light " onClick={(e)=>downloadO(e)} onMouseEnter = {(e)=>ssecond(e)} onMouseLeave={(e)=>ssecondno(e)}>
          <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Omsk_region_gerb-255x300.png"
              rounded
              fluid
              onClick={(e)=>downloadO(e)}
              />
            </div>
            <div className=""><small onClick={(e)=>downloadO(e)}>Омская область</small></div>
            <div className=""><Button variant="link" className="text-secondary" onClick={(e)=>downloadO(e)}><small>Скачать csv</small></Button></div>
          </Stack>
        </div>}
        {third? <div className="" onClick={(e)=>downloadA(e)} onMouseEnter = {(e)=>sthird(e)} onMouseLeave={(e)=>sthirdno(e)}>
          <Stack direction="horizontal" gap={3}>
            <div className="">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Altay_region_gerb-289x300.png"
              roundedCircle
              fluid
              onClick={(e)=>downloadA(e)}
              />
            </div>
            <div className=""><small onClick={(e)=>downloadA(e)}>Алтайский край</small></div>
            <div className=""><Button variant="link" className="text-secondary" onClick={(e)=>downloadA(e)}><small>Скачать csv</small></Button></div>
          </Stack>
        </div> :
        <div className="bg-light " onClick={(e)=>downloadA(e)} onMouseEnter = {(e)=>sthird(e)} onMouseLeave={(e)=>sthirdno(e)}>
          <Stack direction="horizontal" gap={3}>
            <div className="bg-light ">
              <Image variant="top" style={{ width: '3rem' }, {height: '3rem'}} className="my-1"
              src="https://covid19-modeling.ru/wp-content/uploads/2021/06/Altay_region_gerb-289x300.png"
              roundedCircle
              fluid
              onClick={(e)=>downloadA(e)}
              />
            </div>
            <div className="bg-light "><small onClick={(e)=>downloadA(e)}>Алтайский край</small></div>
            <div className="bg-light "><Button variant="link" className="text-secondary" onClick={(e)=>downloadA(e)}><small>Скачать csv</small></Button></div>
          </Stack>
        </div> }

    </Stack>
<CollapseParamCSV/>
    </div>
  )
}
export default CovidDATA2;
