import React, { useReducer, useState } from 'react'
import './App.css'
import ChildrenCard from "./component/Children.jsx";
import ChildrenHub from "./component/ChildrenHub.jsx";

const childrenDetails = ['Home','News','Contact','About'];
const navDetails = ['dashboard','Profile','Settings','Logout'];

const reducerMethod = (state,action) =>{
  switch (action.type) {
    case "first_name":
      const newState = {...state}
      newState.name.first_name = action.value;
      return newState;
    case "last_name":
      const newStateLastName = {...state}
      newStateLastName.name.last_name = action.value;
      return newStateLastName;
    case "email":
      const newStateEmail = {...state}
      newStateEmail.email = action.value;
      return newStateEmail;
    case "country":
      const newStatecountry = {...state}
      newStatecountry.address.country = action.value;
      return newStatecountry;
    case "street":
      const newStatestreet = {...state}
      newStatestreet.address.street = action.value;
      return newStatestreet;
    case 'city':
      const newStateCity = {...state}
      newStateCity.address.city = action.value;

      return newStateCity;
    case 'province':
      const newStateProvince = {...state}
      newStateProvince.address.province = action.value;
      return newStateProvince;
    case 'postal_code':
      const newStatePostal_code = {...state}
      newStatePostal_code.address.postal_code = action.value;
      return newStatePostal_code;


    default:
      return state;
  }
}


function App() {
  const [cvFormat, setcvFormat] = useState();
  const [children, setChildren] = useState(childrenDetails);
  const [navDetail, setnavdetails] = useState(navDetails);

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  const [user,dispatchUser] = useReducer(reducerMethod,{
    name:{
      first_name : "",
      last_name : ""

    },
    address:{
        country: "",
        street:"",
        city:"",
        province:"",
        postal_code:""
    }
  })

  // console.log({user});

  const handle= () =>{
    const cvData = {user};
    setcvFormat(cvData);
  }
  console.log(cvFormat);

  return (

      <>
        <div className="flex flex-col h-screen justify-between">
          <header className="bg-gray-800 text-white">
            <div className="flex items-center justify-between px-4 py-2">
              <div>
                <button className="text-gray-400 focus:outline-none focus:text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <input type="text" x-model="searchQuery" placeholder="Search..."
                     className="mb-2 p-2 border border-gray-300 rounded w-[200px]"/>

              <div className="text-lg font-semibold">
                <ChildrenHub>

                  <ChildrenCard childrenDetails={children}></ChildrenCard>
                </ChildrenHub>
              </div>
              <div>
                <button className="text-gray-400 focus:outline-none focus:text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <main className="mb-auto h-10 bg-white-500">
            <div className="container mx-auto p-4">
              {/* Full-width div */}
              <div className="bg-blue-500 text-white p-4 mb-4">


                {!cvFormat && <p></p>}
                {cvFormat && <div>
                  <h2 className="card-title">
                    <div className="badge badge-secondary">{cvFormat.user.name.first_name } { cvFormat.user.name.last_name}</div>
                  </h2>
                  <p>Email: {cvFormat.user.email}</p>
                  <p>Permanent Address: {cvFormat.user.address.country}</p>
                  <p>Temporary Address: {cvFormat.user.address.street}</p>
                  <p>Temporary Address: {cvFormat.user.address.city}</p>
                  <p>Marital Status: {cvFormat.user.address.province}</p>
                  <p>Occupation: {cvFormat.user.address.postal_code}</p>
                </div>}
              </div>

              {/* Side-by-side divs */}
              <form>
                <div className="flex space-x-4">

                  <div className="flex-1 p-4">
                    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                      <div className="container mx-auto p-4">
                        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Personal
                            Information</h1>
                          <p className="text-gray-600 dark:text-gray-300 mb-6">Use a permanent address where you can
                            receive mail.</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" onChange={(e)=>dispatchUser({type:"first_name",value:e.target.value})} placeholder="First name" className="border p-2 rounded w-full"/>
                            <input type="text" onChange={(e)=>dispatchUser({type:"last_name",value:e.target.value})}  placeholder="Last name" className="border p-2 rounded w-full"/>
                          </div>
                          <div className="mb-4">
                            <input type="email" onChange={(e)=>dispatchUser({type:"email",value:e.target.value})} placeholder="Email address" className="border p-2 rounded w-full"/>
                          </div>
                          <div className="mb-4">
                            <select onChange={(e)=>dispatchUser({type:"country",value:e.target.value})} className="border p-2 rounded w-full">
                              <option value="United States">United States</option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Pakistan">Pakistan</option>
                            </select>
                          </div>
                          <div className="mb-4">
                            <input type="text" onChange={(e)=>dispatchUser({type:"street",value:e.target.value})} placeholder="Street address" className="border p-2 rounded w-full"/>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <input type="text" onChange={(e)=>dispatchUser({type:"city",value:e.target.value})} placeholder="City" className="border p-2 rounded w-full"/>
                            <input type="text" onChange={(e)=>dispatchUser({type:"province",value:e.target.value})} placeholder="State / Province"
                                   className="border p-2 rounded w-full"/>
                            <input type="text" onChange={(e)=>dispatchUser({type:"postal_code",value:e.target.value})} placeholder="ZIP / Postal code"
                                   className="border p-2 rounded w-full"/>
                          </div>


                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    This is the second side-by-side div.
                  </div>

                </div>
                <button type="button" id="theme-toggle"  onClick={handle}
                        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </main>
          <footer className="h-10 bg-blue-500 static bottom-0">Footer</footer>
        </div>

      </>
  )
}

export default App
