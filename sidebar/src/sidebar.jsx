import React from "react";
import { IoClose } from 'react-icons/io5';
import NavLinks from './navlinks.jsx';
import SocialLinks from './sociallinks.jsx';
const SideBar=({setBar})=>{

    return(
        
            <div className="absolute h-screen w-1/3 md:w-2/12 bg-white p-2 md:p-6 shadow-2xl shadow-gray-500 flex flex-col justify-start gap-4 items-start overflow-hidden">
                <div className="w-full flex justify-between items-center">
                    <h1 className="text-xl">Geek-<span className="text-2xl text-blue-400 font-semibold" >Rush</span></h1>    
                    <button onClick={()=>setBar(false)} ><IoClose size={30} /></button>
                </div>
                <div className="h-full w-full flex flex-col justify-between items-start">
                    <NavLinks />
                    <SocialLinks />
                </div>

            </div>
    )
}

export default SideBar;