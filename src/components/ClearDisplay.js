import React from 'react'
 
const ClearDisplay = ({handleDisplay}) => {
  return (
   <>
   <div className='grid grid-cols-2 gap-1 pb-1'>
   <button className="bg-blue-800 hover:bg-red-400 font-bold py-6 px-14 rounded text-white text-3xl drop-shadow-lg " 
     onClick={handleDisplay} 
     value={'CE'}>
     CE
   </button>
   <button 
     className="bg-blue-800 hover:bg-red-400 font-bold py-6 px-14 rounded text-white text-3xl drop-shadow-lg " 
     onClick={handleDisplay} 
     value={'DEL'}>
     DEL
   </button>
   </div>


   </>
  

   
  )
}

export default ClearDisplay;