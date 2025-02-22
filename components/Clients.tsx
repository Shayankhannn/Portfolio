"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='projects'>
    <h1 className="heading">
        Kind Words From  
        <span className='text-purple'> Satisfied Clients</span>

    </h1>
    <div className="flex flex-col max-lg:mt-10  items-center">

       <InfiniteMovingCards
        items={testimonials }
        speed='slow'
        direction='right'
        />
       
    <div className="flex  flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
      {companies.map(({id,name,img,nameImg})=>(
        <div key={id} className="flex max-w-32 md:max-w-60 gap-2">
          <img src={img} alt={name} className='md:w-10 w-5 '/>
          <img src={nameImg} alt={name} className='w-20 md:w-24'/>
        </div>
      ))}
    </div>
      </div>

    </div>
  )
}

export default Clients