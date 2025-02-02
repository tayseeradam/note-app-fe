import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import ErrorAlert from './components/ErrorAlert';
import Note from './pages/Note';
import Signup from './pages/Signup';


const App = () => {
  return (

     <Router>
      <Routes>
        
        <Route path="/" element={<Note />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/ErrorAlert' element={<ErrorAlert/>}/>
      </Routes>
     </Router>
  )
}

export default App
