import React, {useState,useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import axios from 'axios';
const Otp = () => {

  const navigate = useNavigate();
  const [otp,setOtp] = useState(null)


  useEffect(() => {
    try{
       axios({
           method: 'post',
           url: 'http://localhost:3010/api/v1/auth/send/otp',
           data: {
               email: localStorage.getItem('email'),
           },
           config: {headers: {'Content-Type': 'multipart/form-data'}}
           
       })
       .then(function (response) {
           alert('otp sent')
       })

   }
   catch(e){
       console.log(e)
   }
  }, [])

  const submit = () => {
      //navigate("/home");
      if(otp === null){
        alert('enter otp')
        return
      }

      try {
        axios({
          method: 'post',
          url: 'http://localhost:3010/api/v1/auth/verify/otp',
          data: {
            otp: otp
          },
          config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
          .then(function (response) {
            navigate('/home')
          })
          .catch(function (response) {
            //handle error
            alert(response.data.message)
            console.log(response);
          });
      }
      catch (e) {
        console.log(e.message);
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
			<h2 className="mt-6 text-3xl font-bold text-gray-900">
				Verify your account
			</h2>
			<p className="mt-2 text-sm text-gray-600">Enter OTP send to your mail</p>
		</div>
		
		<form className="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true"/>
			<div className="mt-8 content-center">
				<label className="text-sm font-bold text-gray-700 tracking-wide">
					OTP
				</label>
				<input 
         onChange={event => setOtp(event.target.value)}
        className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="OTP" />
            </div>
			<div>
				<button
        onClick={submit}
                 className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                    Confirm OTP
                </button>
			</div>
			
		</form>
	</div>

      </div>
  );
};

export default Otp;