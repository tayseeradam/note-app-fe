import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login"
import ErrorAlert from './components/ErrorAlert';
// import Home from "./pages/Home"


const App = () => {
  return (

     <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path='/ErrorAlert' element={<ErrorAlert/>}/>
      </Routes>
    </Router>

  )
}

export default App
