import React from "react";
import { IoMenu } from 'react-icons/io5';
const NavBar =( { setBar })=>{
    return(
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md shadow-gray-500">
            <button onClick={()=>setBar(true)} 
                className=""
            ><IoMenu size={40} /></button>
            <div className=" w-full text-center flex justify-center items-center text-2xl md:text-3xl"><h1>Geek-<span className="h-fit text-blue-500 text-3xl md:text-4xl font-semibold">Rush</span></h1></div>
        </div>
    );
};

export default NavBar;