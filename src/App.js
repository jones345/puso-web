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
import newCompany from './screens/company/newCompany';
import Services from './screens/Dashboard/Services';
import Company from './screens/company/Company';
import Add from './screens/Users/Add'
import Sadd from './screens/Services/Sadd'
import Ulist from './screens/Users/Ulist';
import Slist from './screens/Services/Slist';
import CompanyList from './screens/company/CompanyList';
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
                  <Route exact path='/home' element={< CompanyList />}></Route>
                  <Route exact path='/Services' element={< Services />}></Route>
                  <Route exact path='/addUser' element={<Add />}></Route>
                  <Route exact path='/Company' element={< Company />}></Route>
                  <Route exact path='/Sadd' element={< Sadd />}></Route>
                  <Route exact path='/users' element={< Ulist />}></Route>
                  <Route exact path='/Servicelist' element={< Slist />}></Route>
                  <Route exact path='/CompanAdd' element={< Home />}></Route>
        </Routes>
    
    </Router>
     
  );
}

export default App;
