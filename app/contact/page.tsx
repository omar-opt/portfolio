import SocialMedia from '@/component/SocialMedia'
import React, { Component } from 'react'

export default function Page()  {
    return (
      <div className=' gap-y-4' >
        <p className='text-4xl text-center m-16'>Contacts</p> 
      <div className="w-screen flex 
       ">
      <SocialMedia/>
      </div>
      </div>
    )
  }

