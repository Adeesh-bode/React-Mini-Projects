import React, { useState } from 'react';
import SideBar from './sidebar.jsx';
import NavBar from './NavBar';
import './index.css';
function App() {
  const [bar, setBar] = useState(false);
  return (
      <div className='h-screen bg-blue-400'>
        { bar && <SideBar setBar={ setBar } />}
        <NavBar setBar={ setBar } />
        <modal className='h-screen flex justify-center items-center '>
            <h1 className='text-blue-800 text-3xl'>[ <tt className='text-white'>Website Content</tt>]</h1>
        </modal>
      </div>
  )
}
export default App;