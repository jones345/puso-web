import React, { useState,useEffect } from "react";

import Nav from "./Nav"
import SideBar from "./SideBar"
import CompanySidbar from "./CompanySidbar"
import axios from 'axios';
import Select from 'react-select'

const PostalAddress = {
    postalCode:'',
    street:'',
    city_town:''
    
}
const PhysicalAddress = {
    street: '',
    city: '',
    District: ''
}
  const Home = () => {

    const [startDate, setStartDate] = useState(new Date());
    const[Categories,setCategories] = useState([]);
    const[CompanyName ,setCompanyName] = useState('');
    const[CompanyEmail ,setCompanyEmail] = useState('');
    const[CompanyPhone ,setCompanyPhone] = useState('');
    const[CompanyLandline ,setCompanyLandline] = useState('');
    const[companyCatergry ,setCompanyCatergry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [street, setStreet] = useState('');
    const[city,setCity] = useState('');
    const[District,setDistrict] = useState('');
    const[country,setCountry] = useState('');
    const [CompanyPhysicalAddress, setCompanyPhysicalAddress] = useState(PhysicalAddress);
    const [CompanyPostalAddress, setCompanyPostalAddress] = useState(PostalAddress);

    const name = localStorage.getItem('name');
    const type = localStorage.getItem('type');
    const number = localStorage.getItem('number');
    const email = localStorage.getItem('email');
    // const address = localStorage.getItem('address');
    // const city = localStorage.getItem('city');
    const started = localStorage.getItem('started');

    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userId');
   
    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = () => {
        axios.get('https://maneoapuso.herokuapp.com/api/v1/company/get/all/categories',{
            headers: {
                token: "Bearer " + token,
            }
        })
            .then(function (response) {
                
                setCategories(response.data);
            })
            .catch(function (error) {
                alert(error);
            });
    }

   

    const handlSubmit = (e) => {
        const data ={
            Name:CompanyName,
            email:CompanyEmail,
            ContactNumber:CompanyPhone,
            BussinessType:companyCatergry,
            Started:startDate,
            UserId:userid,
            PhysicalAddress:{
                street:street,
                city:city,
                District:District,
            },
            PostalAddress:{
                postalCode:postalCode,
                street:street,
                city_town:city

            }

        }

        console.log(data)

        axios({
			method: 'post',
			url: 'https://maneoapuso.herokuapp.com/api/v1/company/add',
            headers: {
                token: "Bearer " + token,
            },
			data: {
                Name:CompanyName,
                email:CompanyEmail,
                ContactNumber:CompanyPhone,
                BussinessType:companyCatergry,
                Started:startDate,
                UserId:userid,
                PhysicalAddress:{
                    street:street,
                    city:city,
                    District:District,
                },
                PostalAddress:{
                    postalCode:postalCode,
                    street:street,
                    city_town:city
    
                }
			},
			config: {headers: {'Content-Type': 'multipart/form-data'}}
		})
			.then(function (response) {
                console.log(response.data);
			})
			.catch(function (response) {
				//handle error
				alert(response)
				console.log(response);
			});




    }

    const options = Categories.map((category) => {
        return {
            value: category.name,
            label: category.name

        }
    })
    
  
    const address = [
        {
            value: 'Cental',
            label: 'Cental'
        },
        {
            value: 'North East',
            label: 'North East'
        },
        {
            value: 'North West',
            label: 'North West'
        },
        {
            value: 'South East',
            label: 'South East'
        },
        {
            value: 'South West',
            label: 'South West'
        },
        {
            value: 'East',
            label: 'East'
        },
        {
            value: 'West',
            label: 'West'
        },
        {
            value: 'North',
            label: 'North'
        },
        {
            value: 'South',
            label: 'South'
        },

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
                        Company
                    </h2>
                   
                    
                   
        
                   
        
                    <div
                        class="mt-8 mb-4 flex px-4 py-4 justify-between bg-white
                        dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">

                       <div class="grid gap-9 mb-9 lg:grid-cols-5">

                                <div>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                                        <input value={name} onChange={event => setCompanyName(event.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company" required/>
                                    </div>
                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                        <input value={email} onChange={event => setCompanyEmail(event.target.value)}  type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company@emal.com" required/>
                                    </div>

                                    <div>
                                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                                        <input  value={number} onChange={event => setCompanyPhone(event.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+26776523489" required/>
                                    </div>
                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Landline</label>
                                        <input onChange={event => setCompanyLandline(event.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+267342153" required/>
                                    </div>
                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">startDate</label>
                                        <input value={started} onChange={event => setStartDate(event.target.value)} type="date"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+267342153" required/>
                                    </div>

                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Distract</label>
                                        <Select options={address} onChange={(e) => setDistrict(e.value)}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                                    </div>

                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                                        <input  onChange={event => setCity(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                                    </div>
                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Street</label>
                                        <input onChange={event => setStreet(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                                    </div>

                                    <div>
                                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Postal</label>
                                        <input onChange={event => setPostalCode(event.target.value)} type="text"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="P O Box ***" required/>
                                    </div>
                                    <div class="flex flex-col mb-4">
                                        <label class="mb-2 font-bold text-lg text-gray-900" for="Select">Business Type</label>
                                        <Select options={options} onChange={(e) => setCompanyCatergry(e.value)} class="border py-2 px-3 text-grey-800" type="text" name="Select" id="Select"/>
                                    </div>

                                    <button  onClick={handlSubmit} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            {/* here */}
                       </div>
                       
                      
                    </div>
                   
        
                </div>
        
            </main>
        
        </div>
    );
    
  };

  export default Home;