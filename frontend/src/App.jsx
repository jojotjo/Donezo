import { Login } from '@mui/icons-material'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Manager from './pages/Manager';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/manager" element={<Manager></Manager>} />
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
