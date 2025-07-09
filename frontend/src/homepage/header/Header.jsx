import React from 'react'

const Header = () => {
  return (
    <>
        <div className='flex-col justify-center p-5 pt-13'>    
                <div className='bg-white w-[80%] mx-auto flex justify-between p-5 px-12 mb-[-4rem] relative pt-15 rounded-3xl shadow-[-5px_12px_5px_rgba(0,0,0,0.25)]'>
                    <div>
                        <img src='./images/flight_icon.png'/>
                        <p className='font-semibold'>Flight</p>
                    </div>
                    <div>
                        <img src='./images/hotels_icon.png' className=''/>
                        <p className='font-semibold'>Hotels</p>
                    </div>
                    <div>
                        <img src='./images/house_icon.png'/>
                        <p className='font-semibold text-center'>Homestays<br/> & Villa</p>
                    </div>
                    <div>
                        <img src='./images/holiday_icon.png'/>
                        <p className='font-semibold text-center'>Holiday<br/> Packages</p>
                    </div>
                    <div>
                        <img src='./images/bus_icon.png'/>
                        <p className='font-semibold'>Buses</p>
                    </div>
                    <div>
                        <img src='./images/car_icon.png'/>
                        <p className='font-semibold'>Cabs</p>
                    </div>
                                        <div>
                        <img src='./images/insurance_icon.png'/>
                        <p className='text-center font-semibold'>Travel <br/>Insurance</p>
                    </div>

                </div>
                <div className='bg-white w-[90%] mx-auto pt-18 pb-12 px-4 rounded-3xl'>
                    <p className='text-center'>Bus Ticket Booking. <a href='#' className='text-blue-500 font-bold'>Travelling with a group? Hire a bus</a></p>
                        <br/>
                    <div className='grid grid-cols-3 mt-2'>
                        <div className='py-2 px-5 border-1 border-gray-500 rounded-l-2xl'>
                            <p className='mb-3'>From City</p>
                            <input type='text' placeholder='New Delhi' value={"New Delhi"} className=' text-4xl w-full outline-0 '/>
                            <p>India</p>
                        </div>
                        <div className='py-2 px-2 border-1 border-gray-500 border-l-0 border-r-0'>
                            <p className='mb-3'>To City</p>
                            <input type='text' placeholder='New Delhi' value={"New Delhi"} className=' text-4xl w-full outline-0'/>
                            <p>India</p>
                        </div>
                        <div className='py-2 px-2 border-1 border-gray-500 rounded-r-2xl'>
                            <p className='mb-3'>Travel Date</p>
                            <input type='text' placeholder='Date' value={"Date"} className=' text-4xl w-full outline-0'/>
                            <p>Day</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-[-1.5rem]'>
                    <button className='py-2 bg-[#03B3ED] text-white px-40 inline-block rounded-4xl text-3xl font-bold'>Search</button>
                </div>

        </div>
    
    </>
  )
}

export default Header