import React, { useState,useEffect } from "react";
import Nav from "../Dashboard/Nav"
import SideBar from "../Dashboard/SideBar"
import axios from 'axios';

export default function Company() {
    const[Services,setServices] = useState([]);
    const [users, setUsers] = useState([]);
    const name = localStorage.getItem('name');
    const type = localStorage.getItem('type');
    const number = localStorage.getItem('number');
    const email = localStorage.getItem('email');
    const address = localStorage.getItem('address');
    const city = localStorage.getItem('city');
    const started = localStorage.getItem('started');

    useEffect(() => {
		getServices();
        getUsers();
	}, [])


    const getServices = () => {
		axios.get(`https://maneoapuso.herokuapp.com/api/v1/company/services/all/${localStorage.getItem('companyId')}`,{
			headers: {
				token: "Bearer " + localStorage.getItem('token'),
			}
		})
			.then(function (response) {
				
				setServices(response.data);
			}
			)
			.catch(function (error) {
				console.log(error);
			}
			);
	}

    const getUsers = () => {
		axios.get(`https://maneoapuso.herokuapp.com/api/v1/company/users/${localStorage.getItem('companyId')}`,{
			headers: {
				token: "Bearer " + localStorage.getItem('token'),
			}
		})
			.then(function (response) {
				console.log('users==',response.data);
				setUsers(response.data);
			}
			)
			.catch(function (error) {
				console.log(error);
			}
			);
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
                Company
            </h2>
           
            
 <div class="container mx-auto my-5 p-5">
         <div class="md:flex no-wrap md:-mx-2 ">

            <div class="w-full md:w-9/12 mx-2 h-64">

                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold"> Name</div>
                                <div class="px-4 py-2">{name}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Business Type</div>
                                <div class="px-4 py-2">{type}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Opened</div>
                                <div class="px-4 py-2">{started}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">{number}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Physical Address</div>
                                <div class="px-4 py-2">{address}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Postal Address</div>
                                <div class="px-4 py-2">{city}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">{email}</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Full Information</button>
                </div>
               

                <div class="my-4"></div>

                
                <div class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Services</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                {Services.map((service)=>{
                                return(
                                <li>
                                    <div class="text-teal-600">{service.name}</div>
                                    <div class="text-gray-500 text-xs">{service.categories}</div>
                                </li>
                                );
                            })}
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Users</span>
                            </div>
                            <ul class="list-inside space-y-2">
                            {users.map((user)=>{
                        return(
                                <li>
                                    <div class="text-teal-600">{user.fullNames}</div>
                                    <div class="text-gray-500 text-xs">{user.email}</div>
                                </li>
                                );
							})}
                            </ul>
                        </div>
                    </div>
                   
                </div>
                
            </div>
        </div>
    </div>
           

        </div>

    </main>

</div>
  


  )
}
