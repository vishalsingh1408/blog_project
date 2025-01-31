import React from 'react'
import Button from '../utility/Button'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className='bg-[#fff2f7]'>

        <div className='px-26 py-20 flex flex-col gap-10'>
          
            <div className='bg-white flex justify-between items-center p-2 font-semibold'>
              <div className='flex gap-6 items-center'>
                <img src="/postitem.jpg" alt="" className='w-20 rounded' />
                <p className=''>This is book</p>
              </div>
              <div className='flex gap-4'>
                <Link to={"/posts/0"}>  <p className='text-[#9d3747]'>View</p></Link> 
                <Button btn={"Edit"} className={"bg-blue-500 text-white"} />
                <Button btn={"Delete"} className={"bg-red-500 text-white"} />
              </div>
            </div>
            <div className='bg-white flex justify-between items-center p-2 font-semibold'>
              <div className='flex gap-6 items-center'>
                <img src="/postitem.jpg" alt="" className='w-20 rounded' />
                <p className=''>This is book</p>
              </div>
              <div className='flex gap-4'>
                <Link to={"/posts/1"}>  <p className='text-[#9d3747]'>View</p></Link> 
                <Button btn={"Edit"} className={"bg-blue-500 text-white"} />
                <Button btn={"Delete"} className={"bg-red-500 text-white"} />
              </div>
            </div>
         
      
        </div>

      </div>
    </>
  )
}

export default Dashboard

