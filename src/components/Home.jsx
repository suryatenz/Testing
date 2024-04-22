import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
   <div className="flex">
      <Navbar />
      <div className="flex-grow">
        <div className="d-flex justify-content-end">
          <p className='ml-5 text-orange-400 text-lg mt-3'>Home</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
