import React from 'react';
import data from './data.js';// data is array of objects
import './index.css';

export default function Details( { selected } )
{   
    // const [detail, setDetails] = useState({ // object hai yeh..
    //     id:'', title:'', order:'', dates:'', duties:[], company:''
    // }); // It  is needed when  fetching data by url

    const detail=data.find((item)=> item.order===selected);// that particular obj is stored in detail

    return(
            <div key={ detail.order }
                className='flex flex-col justify-between items-start gap-8'    
            >   
                <div className='flex flex-col gap-3'>
                <div className='text-3xl font-semibold' > { detail.title } </div>
                <div className=' bg-lime-200 px-1 w-20 text-center rounded-sm' > { detail.company } </div>
                <div className='text-gray-500' > { detail.dates } </div>
                </div>
                <ul className='flex flex-col justify-between items-start gap-3 list-none' >
                    { detail.duties.map((dutie, index)=> <li 
                    className='p-1 before:content-[">>"] before:mr-6 before:font-sans before:inline-block before:font-extrabold  before:text-lime-400 flex justify-between ' 
                    key={ index }><div>{ dutie }</div></li> ) }
                </ul>
            </div>
    );
}