import React from 'react';
import { social } from './data.jsx';

const SocialLinks=()=>{
    return(
        <div className='w-full flex justify-between items-center ' >
            {
                social.map(({id, url, icon })=>
                    <a key={id} href={url}
                        className='hover:scale-75'
                    >{icon}</a>
                )
            }
        </div>
    )
}
export default SocialLinks;