import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import ErrorAlert from './components/ErrorAlert';
import Note from './pages/Note';
// import Signup from './pages/Signup';


const App = () => {
  return (

     <Router>
      <Routes>
        
        <Route path="/" element={<Note />} />
        <Route path="/note" element={<Login />} />
        <Route path="/ login" element={<Signup />} />
        <Route path='/ErrorAlert' element={<ErrorAlert/>}/>
      </Routes>
    </Router>

  )
}

export default App
