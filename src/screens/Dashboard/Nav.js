import React, { useState,useEffect } from "react";
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
export default function Nav() {

    const[Company,setCompany] = useState('');
    const fullnames = localStorage.getItem('fullNames');
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const[CompanyName,setCompanyName] = useState('');
    const[CompanyNumber,setCompanyNumber] = useState('');
    const[CompanyEmail,setCompanyEmail] = useState('');

    useEffect(() => {
       getCompanyByUserId()
    }, []);


   const getCompanyByUserId = () => {
        axios.get(`https://maneoapuso.herokuapp.com/api/v1/company/find/${userId}`,{
            headers: {
                token: "Bearer " + token,
            }
        })
            .then(function (response) {
                console.log(response.data);
                setCompany(response.data);
                localStorage.setItem('name',response.data.Name);
                localStorage.setItem('type',response.data.BussinessType);
                localStorage.setItem('number',response.data.ContactNumber);
                localStorage.setItem('email',response.data.email);
                localStorage.setItem('address',response.data.PhysicalAddress.street);
                localStorage.setItem('city',response.data.PhysicalAddress.city);
                localStorage.setItem('started',response.data.Started);
                localStorage.setItem('Services',response.data.Services);
                setCompanyName(response.data.Name);
                setCompanyNumber(response.data.ContactNumber);
                setCompanyEmail(response.data.email);
                localStorage.setItem('companyId',response.data._id);
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );
    }
  return (
    <nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
                
        
                <div class="flex flex-row border-b items-center justify-between pb-2">
                   
                    <span class="text-lg font-semibold capitalize dark:text-gray-300">
                        {fullnames}
                    </span>
        
                    <span class="relative ">
                        <a
                            class="hover:text-green-500 dark-hover:text-green-300
                            text-gray-600 dark:text-gray-300"
                            href="inbox/">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <path
                                    d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                        </a>
                        <div
                            class="absolute w-2 h-2 rounded-full bg-green-500
                            dark-hover:bg-green-300 right-0 mb-5 bottom-0"></div>
                    </span>
        
                </div>
        
                <div class="mt-8">
                    
                    
                    <h2
                        class="mt-4 text-xl dark:text-gray-300 font-extrabold capitalize">
                        {CompanyName}
                    </h2>
                    <span class="text-sm dark:text-gray-300">
                        <span class="font-semibold text-green-600 dark:text-green-300">
                            {CompanyNumber}
                        </span>
                        
                    </span>
                </div>

        
                <ul class="mt-2 text-gray-600">
                   
                    {/* <li class="mt-8">
                        <a href="#home" class="flex ">
                            <svg
                                class="fill-current h-5 w-5 dark:text-gray-300"
                                viewBox="0 0 24 24">
                                <path
                                    d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                                    4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                                    4h4v-4h-4M4 8h4V4H4v4z"></path>
                            </svg>
                            <span
                                class="ml-2 capitalize font-medium text-black
                                dark:text-gray-300">
                                dashboard
                            </span>
                        </a>
                    </li> */}
        
                    <li class="mt-8">
                        <Link to={'/home'}  class="flex">
                            <svg
                                class="fill-current h-5 w-5 dark:text-gray-300"
                                viewBox="0 0 24 24">
                                <path
                                    d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                                    2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                                    00-2-2h-1V1m-1 11h-5v5h5v-5z"></path>
                            </svg>
                            <span
                                class="ml-2 capitalize font-medium text-black
                                dark:text-gray-300">
                                Company
                            </span>
                        </Link>
                    </li>
                    <li class="mt-8">
                        <Link to={'/users'} class="flex">
                        <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                                    014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                                    8-4z"></path>
                            </svg>
                            <span
                                class="ml-2 capitalize font-medium text-black
                                dark:text-gray-300">
                                users
                            </span>
                        </Link>
                    </li>
        
                    <li class="mt-8">
                        <Link to={'/Servicelist'} class="flex">
                            <svg
                                class="fill-current h-5 w-5 dark:text-gray-300"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                                    4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                                    9v2h-4v-2h4m2-2h-8v6h8v-6z"></path>
                            </svg>
                            <span
                                class="ml-2 capitalize font-medium text-black
                                dark:text-gray-300">
                                Services
                            </span>
                        </Link>
                    </li>

                    <li class="mt-8">
                        <Link to={''} class="flex">
                            <svg
                                class="fill-current h-5 w-5 dark:text-gray-300"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                                    4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                                    9v2h-4v-2h4m2-2h-8v6h8v-6z"></path>
                            </svg>
                            <span
                                class="ml-2 capitalize font-medium text-black
                                dark:text-gray-300">
                                Branches
                            </span>
                        </Link>
                    </li>
        
                </ul>
        
                <div class="mt-auto flex items-center text-red-700 dark:text-red-400">
                    
                    <Link to={'/'} class="flex items-center">
                        <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                            <path
                                d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
                                2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
                                0 012-2h9z"></path>
                        </svg>
                        <span class="ml-2 capitalize font-medium">log out</span>
                    </Link>
        
                </div>
            </nav>
  )
}
