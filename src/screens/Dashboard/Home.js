import React, { useState,useEffect } from "react";
import Swal from 'sweetalert2'
import Nav from "./Nav"
import SideBar from "./SideBar"
import CompanySidbar from "./CompanySidbar"
import axios from 'axios';
import Select from 'react-select'
import MapPicker from 'react-google-map-picker'
const DefaultLocation = { lat: -24.370998889292274, lng: 25.776640255238224};
const DefaultZoom = 10;

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
    const[latitude,setLatitude] = useState('');
    const[longitude,setLongitude] = useState('');
    const[operationHours,setOperationHours] = useState('');


    // MAP

    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);
    
    function handleChangeLocation (lat, lng){
        setLocation({lat:lat, lng:lng});
    }

    function handleChangeZoom (newZoom){
        setZoom(newZoom);
    }

    function handleResetLocation(){
        setDefaultLocation({ ... DefaultLocation});
        setZoom(DefaultZoom);
    }
  

    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userId');
    
   
    useEffect(() => {
        getAllCategories();
        console.log(userid);
    }, []);

    const getAllCategories = () => {
        axios.get('http://localhost:3010/api/v1/company/get/all/categories',{
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
            operationHours:operationHours,
            CompanyLocation:{
                latitude:latitude,
                longitude:longitude
            },
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
			url: 'http://localhost:3010/api/v1/company/add',
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
                Swal.fire({
                    title: 'Success',
                    text: 'Company Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'

                });
			})
			.catch(function (response) {
				//handle error
                Swal.fire({
                    title: 'Error',
                    text: `${response}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    })
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
                
                    <div className="min-h-screen p-6 bg-gray-100 flex  ">
                                    <div className="container max-w-screen-lg mx-auto">
                                        <div>


                                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                                    <div className="text-gray-600">
                                                        <p className="font-medium text-lg">Company Details</p>
                                                        <p>Please fill out all the fields.</p>

                                                    </div>


                                                    <div className="lg:col-span-2">
                                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">


                                                            <div className="md:col-span-3">
                                                                <label htmlFor="address">Company Name</label>
                                                                <input type="text" name="address" id="address"
                                                                       
                                                                       
                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                        />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                <label htmlFor="city">Company Email</label>
                                                                <input type="text" name="city" id="city"
                                                                       
                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                        placeholder=""/>
                                                            </div>

                                                            <div className="md:col-span-3">
                                                                <label htmlFor="address">operation Hours</label>
                                                                <input type="text" name="city" id="city"
                                                                       
                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                        placeholder=""/>
                                                            </div>
                                                            <div className="md:col-span-2">
                                                                <label htmlFor="city">Phone Number</label>
                                                                <input type="text" name="city" id="city"
                                                                       
                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                       placeholder=""/>
                                                            </div>

                                                            <div className="md:col-span-3">
                                                                <label htmlFor="address">Toll Free</label>
                                                                <input type="text" name="city" id="city"
                                                                       
                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                       placeholder=""/>

                                                            </div>
                                                           

                                                            <div className="md:col-span-2">
                                                                <label htmlFor="city">phone Number</label>
                                                                <input type="text" name="city" id="city"
                                                                       
                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                       placeholder=""/>
                                                            </div>
                                                            <div className="md:col-span-5">
                                                                <label htmlFor="address">Category</label>
                                                                <select
                                                                    
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300  bg-gray-50 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                                    <option>General</option>
                                                                    <option>Cardiologists</option>
                                                                    <option>Dermatologists</option>
                                                                    <option>Neurologists</option>
                                                                    <option>Radiologists</option>
                                                                    <option>Pediatricians</option>
                                                                    <option>Cardiologists</option>
                                                                    <option>gynecologists</option>
                                                                </select>

                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <label htmlFor="city">Physical Address</label>
                                                                <input
                                                                    
                                                                    name="city" id="city"
                                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                />
                                                            </div>

                                                            <div className="md:col-span-2">
                                                                <label htmlFor="address">City</label>
                                                                <select
                                                                    
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300  bg-gray-50 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                                    <option>....</option>
                                                                    <option>Gaborone</option>
                                                                    <option>Kanye</option>
                                                                    <option>Tonota</option>
                                                                    <option>Francistown</option>
                                                                    <option>Maun</option>
                                                                    <option>Ghanzi</option>
                                                                </select>

                                                            </div>
                                                            <div className="md:col-span-2">
                                                                <label htmlFor="address">District</label>

                                                                <select
                                                                    
                                                                    className="border-0 px-3 py-3 placeholder-blueGray-300  bg-gray-50 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                                                    <option>....</option>
                                                                    <option>Gaborone</option>
                                                                    <option>Palapye</option>
                                                                    <option>Tonota</option>
                                                                    <option>Francistown</option>
                                                                </select>
                                                            </div>
                                                            <div className="md:col-span-1">
                                                                <label htmlFor="address">Postal Address</label>
                                                                <input type="text" name="address" id="address"
                                                                       
                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                       placeholder=""/>
                                                            </div>


                                                            <div className="md:col-span-3">
                                                                <label htmlFor="address">Latitute:</label>
                                                                <input type="text" name="address" id="address"
                                                                       value={location.lat} disabled

                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                       placeholder=""/>
                                                            </div>
                                                            <div className="md:col-span-2">
                                                                <label htmlFor="address">Longitute:</label>
                                                                <input type="text" name="address" id="address"
                                                                       value={location.lng} disabled

                                                                       className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                                       placeholder=""/>
                                                            </div>

                                                            <div className="md:col-span-5">
                                                                <label htmlFor="email">Logo</label>
                                                                <input  type="file"  rows="8" name="email" id="email"
                                                                           
                                                                       className="border-0 px-3 py-3  bg-gray-50 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                           />


                                                            </div>

                                                            <div className="md:col-span-5">
                                                                
                                                            <MapPicker defaultLocation={defaultLocation}
                                                            zoom={zoom}
                                                            mapTypeId="roadmap"
                                                            style={{height:'700px'}}
                                                            onChangeLocation={handleChangeLocation} 
                                                            onChangeZoom={handleChangeZoom}
                                                            apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
                                                                {/* <
                                                                    MapPicker defaultLocation={defaultLocation}
                                                                              zoom={zoom}
                                                                              mapTypeId="roadmap"
                                                                              style={{height:'700px'}}
                                                                              onChangeLocation={handleChangeLocation}
                                                                              onChangeZoom={handleChangeZoom}
                                                                              apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'
                                                                /> */}
                                                            </div>





                                                           


                                                            <div className="md:col-span-5 text-right">
                                                                <div className="inline-flex items-end">
                                                                    <button
                                                                        
                                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit
                                                                    </button>
                                                                </div>
                                                            </div>






                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
        
                   
        
                    
                   
        
                </div>
        
            </main>
        
        </div>
    );
    
  };

  export default Home;