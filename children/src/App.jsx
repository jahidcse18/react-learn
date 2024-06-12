import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildrenCard from "./component/Children.jsx";
import ChildrenHub from "./component/ChildrenHub.jsx";
import NavDetails from "./component/NavDetails.jsx";

const childrenDetails = ['Home','News','Contact','About'];
const navDetails = ['dashboard','Profile','Settings','Logout'];


function App() {
  const [children, setChildren] = useState(childrenDetails);
  const [navDetail, setnavdetails] = useState(navDetails);

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

  return (
      <>
          <aside className="w-64 bg-gray-800 text-white flex flex-col h-full fixed">
              <NavDetails navDetail={navDetail}></NavDetails>
          </aside>
          <div className="flex-1 flex flex-col ml-64">
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
              <main className="flex-1 p-6">
                  <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
                  <p>This is the main content area.</p>

                  <input type="text" value={value} onChange={handleChange}/>
                  <p>Current value: {value}</p>
              </main>
          </div>
      </>
  )
}

export default App
