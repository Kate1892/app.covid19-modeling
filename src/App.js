import React, {useEffect, useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Footer from './Components/Footer'
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import {Covid} from './Covid';
import {Main} from './Main';
import {Registration} from './Registration';
import {Modeling} from './Modeling';
import axios from "axios"


import {Helmet} from "react-helmet";

import "./styles.css";

import { animated, useTransition } from 'react-spring'


function App() {

return (
    <>
    <div className="bg-light">

     <Helmet>
        <meta charSet="utf-8" />
        <title>Обратные задачи</title>
        <link rel="canonical" href="http://app.covid19-modeling/main.ru" />
      </Helmet>


          <Routes >
            <Route exact path="/covid19" element={<Covid />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/modeling" element={<Modeling />} />
            <Route path="*" element={<Main />} />
          </Routes>

      <Footer />
    </div>
    </>
  )
}

export default App;
