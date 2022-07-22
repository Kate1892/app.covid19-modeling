import React, {useEffect, useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './App.css';
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import {Covid} from './Covid';
import {Main} from './Main';
import {Modeling} from './Modeling';
import {Data} from './Data';
import "./styles.css";
import Footer from './Components/Footer'


function App() {

  return (
      <>
      <div className="bg-light" >
        <Helmet>
           <meta charSet="utf-8" />
           <title>Обратные задачи</title>
           <link rel="canonical" href="http://covid19-modeling.ru" />
         </Helmet>
            <Routes>
              <Route exact path="/statistics" element={<Covid />} />
              <Route exact path="/" element={<Main />} />
              <Route exact path="/modeling" element={<Modeling />} />
              <Route exact path="/data" element={<Data />} />
            </Routes>
        <Footer />
        </div>
      </>
    )
  }

export default App;
