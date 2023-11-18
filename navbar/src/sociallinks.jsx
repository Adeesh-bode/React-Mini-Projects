import React from 'react';
import { social } from './data.jsx';

export const SocialLinks = function(){

    return(
        <div className=' hidden md:flex justify-between  items-center gap-6  text-2xl'>
            {
                social.map((media)=>{
                    return (
                    <a key={ media.id } href={ media.url } 
                    className='text-xl text-blue-500 hover:scale-75 '>{ media.icon }</a>
                    )
                })
            }
        </div>
    )
}