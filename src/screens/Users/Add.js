import React, { useState,useEffect } from "react";
import Nav from '../Dashboard/Nav'
import SideBar from '../Dashboard/SideBar';
import Select from 'react-select'
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
export default function Add() {

    const[roles,setRoles] = useState('');
    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const[Email,setEmail] = useState('');
    const[Number,setNumber] = useState('');
    const token = localStorage.getItem('token');
    const companyId = localStorage.getItem('companyId');
    const navigate = useNavigate();
    const Roles = [
        {
            value: 'ADMIN',
            label: 'ADMIN'
        },{
         value: 'USER',
         label: 'USER'
        }
    ]

  const onSubmit = (e) => {
      if(FirstName === '' || LastName === '' || Email === '' || Number === '' || roles === ''){
          alert('All fields are required')
      }        
        axios({
			method: 'post',
			url: `https://maneoapuso.herokuapp.com/api/v1/company/register/user/${companyId}`,
            headers: {
                token: "Bearer " + token,
            },
			data: {
             fullNames: FirstName + ' ' + LastName,
                email: Email,
                phone: Number,
                roles: roles
			},
			config: {headers: {'Content-Type': 'multipart/form-data'}}
		})
			.then(function (response) {
                console.log(response.data);
                navigate('/users')
			})
			.catch(function (response) {
				//handle error
				alert(response)
				console.log(response);
			});
    }
  return (
    <div class="h-screen w-full flex overflow-hidden">
            <Nav/>

            <main
                class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
                duration-500 ease-in-out overflow-y-auto">
                <div class="mx-10 my-2">
                    
                    {/* nav here  */}
                    <SideBar/>
                    <br/>
                    <br/>
                    <h2 class="my-4 text-4xl font-semibold dark:text-gray-400">
                        Company User
                    </h2>
                   
                    
                   
        
                   
        
                    <div
                        class="mt-8 mb-4 flex px-4 py-4 justify-between bg-white
                        dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">

                       <div class="grid gap-9 mb-9 lg:grid-cols-5">

                       <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                            <input onChange={event => setFirstName(event.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" required/>
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                            <input onChange={event => setLastName(event.target.value)}  type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name" required/>
                        </div>

                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                            <input onChange={event => setNumber(event.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+26776523489" required/>
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input onChange={event => setEmail(event.target.value)} type="email"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Roles</label>
                            <Select options={Roles} onChange={(e) => setRoles(e.value)}   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                        </div>

                        <button  onClick={onSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                        
                       </div>
                      
                    </div>
                    {/* end here  */}
        
                </div>
        
            </main>
        
        </div>
  )
}
