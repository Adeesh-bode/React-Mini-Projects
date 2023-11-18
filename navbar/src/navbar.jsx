import { useState } from 'react';
import { NavLinks } from './navlinks.jsx';
import { SocialLinks } from './sociallinks.jsx';
import { IoMenu } from 'react-icons/io5';
import './index.css';

const NavBar = () => {
    const [ showLink, setShowLink ] = useState(true);
   
    return(
        <nav className='h-auto w-screen px-6 py-1 bg-white shadow-md shadow-slate-500 '>
            <div className="nav-center flex flex-col justify-between items-start md:flex-row  ">                
                <div className=" flex items-center justify-between p-4 w-full md:w-auto text-2xl  ">
                    <h1 className=''>Geek-<span className='text-3xl text-blue-400 font-semibold ' >Rush</span></h1>
                    <button onClick={()=>setShowLink(!showLink)}
                    class='nav-toggle text-2xl  bg-transparent cursor-pointer hover:rotate-90 md:hidden ' > 
                        <IoMenu size='40px' />
                    </button>
                </div>
                { showLink && 
                <div className='flex justify-between items-center gap-36 '  >
                    <NavLinks  />
                    <SocialLinks />                
                </div>
                }
            </div>
        </nav>
    )

}

export default NavBar;