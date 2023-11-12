import { useState } from 'react';
import Details from './details.jsx';
import './index.css';

function App() {
  const [selected, setSelected] = useState(1);
  return (
    <div className='min-h-screen flex  flex-col md:flex-row justify-between items-center gap-12 p-40'>
      <div className='flex md:flex-col gap-7 text-2xl font-medium'>
        <button className='btn' onClick={()=> setSelected(1)}> TOMMY</button>
        <button className='btn' onClick={()=> setSelected(2)}> BIGDROP</button>
        <button className='btn' onClick={()=> setSelected(3)}> CUKER</button>
      </div>
      <Details selected={ selected } />
    </div>
  )
}

export default App;
