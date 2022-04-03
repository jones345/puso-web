import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Forgot from './screens/Auth/Forgort';
import Otp from './screens/Auth/Opt';
import ChangePassword from './screens/Auth/Change-password';
import ErrorPage404 from './screens/Errors/404';
import Home from './screens/Dashboard/Home';
function App() {
  return (
    <Router>
       <Routes>
                 <Route exact path='/' element={< Login />}></Route>
                 <Route exact path='/register' element={< Register />}></Route>
                 <Route exact path='/forgort' element={< Forgot />}></Route>
                 <Route exact path='/otp' element={< Otp />}></Route>
                 <Route exact path='/change-password' element={< ChangePassword />}></Route>
                  <Route exact path='/404' element={< ErrorPage404 />}></Route>
                  <Route exact path='/home' element={< Home />}></Route>
        </Routes>
    
    </Router>
     
  );
}

export default App;
