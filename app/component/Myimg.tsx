import React from 'react'
import Image from 'next/image'
function Myimg() {
  return (
    <div className=' ml-6'>
        <Image
    src={"/pic.png"}
    width={500}
    height={700}
    alt="My SVG image"
    className="z-11 h-fit rounded-full shadow-2xl" 
  />
  </div>
  )
}

export default Myimg