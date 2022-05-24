import React, { useState} from "react";
import Nav from '../Dashboard/Nav'
import SideBar from '../Dashboard/SideBar';
import {  useNavigate } from "react-router-dom";
import Select from 'react-select'
import axios from 'axios';

export default function Sadd() {

    const [services,setServices] = useState('');
    const[category,setCategory] = useState('');
    const[description,setDescription] = useState('');
    const[requirement,setRequirement] = useState('');
    const companyId = localStorage.getItem('companyId');
    const navigate = useNavigate();

    const submit = (e) => {
        console.table(services,category,description);
        axios({
			method: 'post',
			url: `https://maneoapuso.herokuapp.com/api/v1/company/services/add/${companyId}`,
            headers: {
                token: "Bearer " + localStorage.getItem('token'),
            },
			data: {
                name: services,
                categories:category,
                description:description,
                requirements:requirement
			},
			config: {headers: {'Content-Type': 'multipart/form-data'}}
		})
			.then(function (response) {
                console.log(response.data);
                navigate('/Servicelist')
			})
			.catch(function (response) {
				//handle error
				alert(response)
				console.log(response);
			});
    }

    const categories = [
        {
            value: 'FUND',
            label: 'FUND'
        },
        {
            value: 'LOAN',
            label: 'LOAN'
        },
        {
            value: 'ASSETS',
            label: 'ASSETS'
        },
        {
            value: 'GRANT',
            label: 'GRANT'
        },
        {
            value: 'WORKING CAPITAL',
            label: 'WORKING CAPITAL'
        },
        {
            value: 'PROJECT COST',
            label: 'PROJECT COST'
        },
        {
            value: 'OTHER',
            label: 'OTHER'
        }

        
    ]
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
                        Company Services
                    </h2>
                   

<div class="max-w-2xl mx-auto bg-white p-16">
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SERVICE  NAME</label>
        <input onChange={event => setServices(event.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div> 
    <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SERVICE TYPE</label>
        <Select options={categories} onChange={(e) => setCategory(e.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div> 
    {/* Select options={address} onChange={(e) => setDistrict(e.value)} */}
    {/* <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SERVICE GRACE PERIOD</label>
        <input onChange={event => setCategory(event.target.value)} type="number"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div>  */}
    <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SERVICE DESECRATIONS</label>
        <textarea onChange={event => setDescription(event.target.value)} rows="10"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div> 

    <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">SERVICE REQUIREMENTS</label>
        <textarea onChange={event => setRequirement(event.target.value)} rows="10"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    </div> 
    
    <button onClick={submit}  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

</div>
                   
        
                   
        
        
                </div>
        
            </main>
        
        </div>
  )
}
