import React from 'react';
import { links } from './data.jsx';
const NavLinks=()=>{
    return(
        <div className='flex flex-col justify-between items-start gap-2 w-full'>
            {
                links.map(({id, url, text})=>{
                    return(
                        <a key={id} href={url}
                            className='w-full text-xl capitalize hover:bg-blue-400'
                        >{text} </a>
                    )
                })
            }
        </div>
    );
}
export default NavLinks;