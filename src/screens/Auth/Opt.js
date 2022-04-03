import React from "react";
import { Link,useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
const Otp = () => {

  const navigate = useNavigate();

  const submit = () => {
      navigate("/home");
      
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
                {/* <OtpInput
               
                    
                    
                    numInputs={6}
                    separator={<span>-</span>}
                /> */}
				<input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="OTP" />
            </div>
			<div>
				<button
        onClick={submit}
                 className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">
                    Comfirm OTP
                </button>
			</div>
			
		</form>
	</div>

      </div>
  );
};

export default Otp;