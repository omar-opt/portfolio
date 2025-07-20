import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='w-full place-self-center md:w-11/12 py-4 sm:h-24 backdrop-blur-sm bg-opacity-5  bg-slate-400 flex flex-row justify-between items-center px-5 sm:px-10 md:px-44  fixed top-0 m-2 rounded-2xl'>
      <div  >ICON </div>


      <div className='flex flex-row justify-center items-center gap-x-4 z-50'>

        <Link href={""}>Project</Link>
        <Link href={""}>Experience</Link>
        <Link href={""}>Contacts</Link>
      </div>
      
    </div>
  )
}

export default NavBar