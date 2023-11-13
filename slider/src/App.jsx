import { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data.js';

import './index.css';

function App() {
  const [index, setIndex] = useState(0);
  const {id, image, name, title, quote } = people[index]; 
  const rgbColor = 'rgb(229,231,235)';
  const Inc= function(){
    (people.length - 1 === index)? setIndex(0): setIndex(index+1);
  }
  const Dec= function(){
    (index===0)? setIndex(people.length-1) : setIndex(index-1);
  }
  const timer = setInterval(Inc,9000);  
  
  return (
      <div className='h-screen flex justify-center items-center bg-gray-200 text-blue-600'>
        <div className='absolute flex justify-between w-2/3'>
        <button className='btns' onClick={Inc}>&lt;</button>
        <button className='btns' onClick={Dec}>&gt;</button>
        </div>
        <card className='flex flex-col justify-between gap-5 items-center bg-white w-1/2 p-6 rounded-md shadow-md shadow-gray-700' key={ id }>
          <img src={ image } className='h-60 w-60 object-cover rounded-full' alt='loading'></img>
          <div className='flex flex-col justify-between items-center gap-2'>
            <div  className='text-3xl font-semibold capitalize '>{ name }</div>
            <div className='text-xl bg-slate-400 px-2 text-middle rounded-md text-white uppercase'>{ title }</div>
          </div>
          <div className='font-sans text-gray-600 text-center'>{ quote }</div>   
          <FaQuoteRight size='4rem' />
        </card>
      </div>
  )
}

export default App;
