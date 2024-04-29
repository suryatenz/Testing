import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FaBell, FaCircle, FaLessThan, FaSearch } from 'react-icons/fa';
import DetailsPage from './DetailsPage';
import { useNavigate } from 'react-router-dom';
const Deatils = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 86400000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleNAvigate = ()=>{
    navigate('/')
  }


  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex float-left"><Navbar /></div>
        <div className="flex flex-grow flex-col flex-wrap">
          <div className="d-flex justify-content-end">
            <ul className='flex justify-between flex-wrap mt-3'>
              <div className="flex float-left"><FaLessThan className=' text-lg text-orange-600 mt-5 mr-1' onClick={handleNAvigate} /> <li className=' text-orange-400 text-lg mt-3'>Add Products</li></div>
              <div className="flex float-right">
                <li className='ml-5 mt-3 mr-5 text-slate-500'>{formatDate(currentDate)}</li>
                <FaBell className='mr-5 text-slate-400 mt-4' />
                <div className="flex flex-col mr-2 mt-2">
                  <div className="">
                    <li className='text-white text-sm'>Surya Prajyesh</li>
                  </div>
                  <div className="">
                    <li className='text-slate-400 text-xs' >Fresher</li>
                  </div>
                </div>
                <FaCircle className='text-white mt-2 mr-5 text-3xl' />
              </div>
            </ul>
          </div>
           <DetailsPage/>
        </div>
      </div>
    </>
  );
};

export default Deatils;
