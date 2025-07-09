import React from 'react'

const Topheader = () => {
  return (
    <>
    <div className='flex justify-between items-start px-12 '>
        <div>
            <img src='./images/logo.png' />
        </div>
        <div className='flex gap-3 pt-2'>
            <div className='flex items-center gap-1 '>
                <div>
                    <img src='./images/search_property.png' className='w-[15px] h-[15px]'/>
                </div>
                <div className='border-r-2 border-r-white py-1 px-2'>
                    <p className='text-white text-[12px] font-bold'>List Your Property</p>
                    <p className='text-white text-[8px]'>Grow Your Business!</p>
                </div>
            </div>
            <div className='flex items-center gap-1 '>
                <div>
                    <img src='./images/vector.png' className='w-[15px] h-[15px]'/>
                </div>
                <div className='border-r-2 border-r-white py-1 px-2'>
                    <p className='text-[12px] font-bold text-white'>Introducing myBiz</p>
                    <p className='text-[8px] text-white'>Business Travel Solution</p>
                </div>
            </div>
            <div className='flex items-center gap-1 '>
                <div>
                    <img src='./images/my_trips.png' className='w-[15px] h-[15px]'/>
                </div>
                <div className=' py-1 px-1'>
                    <p className='text-[12px] font-bold text-white'>My Trips</p>
                    <p className='text-[8px] text-white'>Manage Your Bookings</p>
                </div>
            </div>
            <div className='flex items-center '>
                <p className='px-3 py-1 bg-blue-400 rounded-md text-white text-sm'>Login or Create Account</p>
            </div>
            <div className='flex items-center '>
                <p className='p-2'>Ind | English</p>
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Topheader