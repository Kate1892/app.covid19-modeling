import React, {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/NaviBar';
import NaviBarv2 from './Components/NaviBarv2';
import {Button} from 'react-bootstrap';
import Footer from './Components/Footer'
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import {Covid} from './Covid';
import {Flu} from './Flu';
import {Main} from './Main';
import {Registration} from './Registration';
import {Modeling} from './Modeling';
import axios from "axios"


import {Helmet} from "react-helmet";

import "./styles.css";

function App() {
  return (
    <div className="bg-light">
    <Helmet>
                <meta charSet="utf-8" />
                <title>Обратные задачи</title>
                <link rel="canonical" href="http://mysite.com/example" />

            </Helmet>
    <Router>

      <Routes>
        <Route exact path="/covid19" element={<Covid />} />
        <Route exact path="/flu" element={<Flu />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/modeling" element={<Modeling />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
