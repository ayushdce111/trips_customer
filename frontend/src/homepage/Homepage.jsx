import React from 'react';
import Topheader from './topheader/Topheader.jsx';
import Header from './header/Header.jsx';


const Homepage = () => {
  return (
    <>
       <div className='customHeader h-[100vh]'>
            <Topheader/>
            <Header/>
        </div>
    </>
  )
}

export default Homepage