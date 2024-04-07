import React from 'react'

function Lights() {
  return (
    <div>
        <div className='absolute w-48 h-44 rounded-full bg-[#2c6087c5] z-0 blur-[50px] bg-opacity-40 top-12 '></div>
        <div className='absolute w-64 h-60 rounded-full bg-[#2c6087c5] z-0 blur-[100px] bg-opacity-25 top-[52%] left-[36%]'></div>
        <div className='absolute w-40 h-44 rounded-full bg-[#2c6087c5] z-0 blur-[100px] bg-opacity-30 left-[85%] top-36'></div>
        <div className='absolute w-24 h-24 rounded-full bg-[#2c6087c5] z-0 blur-[60px] bg-opacity-40'></div>
    </div>
  )
}

export default Lights