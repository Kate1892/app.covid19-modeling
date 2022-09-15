import './App.css'
import { Helmet } from 'react-helmet'
import { Routes, Route } from 'react-router-dom'
import { Main, Data, Modeling, Covid } from './pages'
import { Footer } from './components'

import './styles.css'

function App() {
  return (
    <>
      <div className='bg-light'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Обратные задачи</title>
          <link rel='canonical' href='http://covid19-modeling.ru' />
        </Helmet>
        <Routes>
          <Route exact path='/statistics' element={<Covid />} />
          <Route exact path='/' element={<Main />} />
          <Route exact path='/modeling' element={<Modeling />} />
          <Route exact path='/data' element={<Data />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
