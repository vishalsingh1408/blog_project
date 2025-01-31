import React from 'react'
import image from '../assets/hero.png'

const Hero = () => {
  return (
    <>
     <div className='grid grid-cols-2 '>
        <div className='py-30 col-span-1 '>
            <h1 className='font-bold text-4xl'><span className='text-[#3b1c32]'>CREATE</span> <span className='text-[#a64d79]'>A BLOG</span></h1>
            <p className='text-[#813f6e] mt-2 font-[600]'>Share youre story with tha world. create a beautiful, <br /> personalized blog that first your brand</p>
            <button className='mt-2 cursor-pointer font-medium'>Explore now</button>
        </div>
        <div className='col-span-1'>
            <img  src={image} className='w-[400px]'/>
        </div>
     </div> 
    </>
  )
}

export default Hero;
