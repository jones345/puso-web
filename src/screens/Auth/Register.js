import React, {useState} from 'react'
import {  useNavigate,Link } from "react-router-dom";
import axios from 'axios';
const Register = () => {

    const navigate = useNavigate();
    const[username,setUsername] = useState(null);
    const [password, setPassword]=useState(null);
    const [fullNames, setFullNames]=useState(null);
    const[phoneNumber,setPhoneNumber] = useState(null);
    const [IdNumber, setIdNumber]= useState(null);

    const handleSubmit = () => {
       // navigate("/otp");
       if(username === null || password === null||fullNames === null||phoneNumber === null){
		alert('enter username and password')
		   return
	   }
       if(password.length < 6){
           alert('password must be at least 6 characters')
       }
       //chick if is valid phone number
        if(phoneNumber.length !== 8){
            alert('phone number must be 8 digits')
        }
        //chick if  is valid email
        if(!username.includes('@')){
            alert('email is not valid')
        }
	   try {
		axios({
			method: 'post',
			url: 'http://localhost:3010/api/v1/auth/register',
			data: {
                fullNames: fullNames,
                phone: phoneNumber,
				email: username,
                idNumber: IdNumber,
				password: password
			},
			config: {headers: {'Content-Type': 'multipart/form-data'}}
		})
			.then(function (response) {
                //send otp to user email
                console.log(response.data)
                alert('otp sent')
                localStorage.setItem('email',response.data.email)
                navigate("/otp");
                
            },
            function (error) {
                alert(error.response.data.message)
            }

            )
	}
	catch (e) {
		alert(e.message)
	}

    }
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      
        style={{  
          backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div className="text-center">
              
              <h3 className="mt-2 text-sm text-gray-600">Create account </h3>
          </div>
          <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true"/>
              <div className="mt-8 content-center">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                      Full names
                  </label>
                  <input 
                  onChange={event => setFullNames(event.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=" full names" required />
              </div>

              <div className="mt-8 content-center">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                     ID Number
                  </label>
                  <input 
                  onChange={event => setIdNumber(event.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder=" national id number" required />
              </div>

              <div className="mt-8 content-center">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                      Phone Number
                  </label>
                  <input 
                  onChange={event => setPhoneNumber(event.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="+267" required />
              </div>
              <div className="relative">
                  
                  <label className="text-sm font-bold text-gray-700 tracking-wide">Email</label>
                  <input 
                  onChange={event => setUsername(event.target.value)}
                  className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="mail@gmail.com" required />
              </div>
              <div className="mt-8 content-center">
                  <label className="text-sm font-bold text-gray-700 tracking-wide">
                      Password
                  </label>
                  <input 
                  onChange={event => setPassword(event.target.value)}
                  className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" />
              </div>
            
              <div>
                  <button
                  onClick={handleSubmit}
                  
                   className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                      Sign up
                  </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                  <span> have an account?</span>
                  <Link to={'/'} className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign In</Link>
              </p>
          </form>
      </div>
  
        </div>
    );
    };

export default Register;