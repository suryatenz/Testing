import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import { FaAngleLeft, FaBell, FaCircle, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const DisplayPage = () => {
  const products = useSelector((state) => state.products.products);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 43200000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleNavigate=()=>{
    navigate('/')
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex float-left"><Navbar /></div>
        <div className="flex flex-grow flex-col flex-wrap">
          <div className="d-flex justify-content-end">
            <ul className='flex justify-between flex-wrap mt-3'>

              <div className="flex float-left"> <FaAngleLeft className='text-lg mr-1 text-orange-600 mt-4' onClick={handleNavigate} /><li className='text-orange-400 text-xl mt-3'>Products</li></div>
              <div className="flex float-right">
                <li className='ml-5 mt-3 mr-5 text-slate-500'>{formatDate(currentDate)}</li>
                <FaBell className='mr-5 text-slate-400 mt-4' />
                <div className="flex flex-col mr-2 mt-2">
                  <div className="">
                    <li className='text-white'>Surya Prajyesh</li>
                  </div>
                  <div className="">
                    <li className='text-slate-400 text-xs' >Fresher</li>
                  </div>
                </div>
                <FaCircle className='text-white mt-2 mr-5 text-3xl' />
              </div>
            </ul>
          </div>
          <div className="product-card bg-black h-screen">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-4 mt-8 bg-gray-900 ml-3 mb-3 h-100">
                <div className="flex flex-col flex-wrap">
                  <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col flex-wrap"><p className='text-gray-700'>Catalog</p><p className='text-orange-600 mt-1'>Laptop</p></div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-gray-900 mt-8 mr-3 mb-3 p-6">
                  <h2 className="text-xl font-bold text-orange-600 mb-4 mt-2">Products</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                      <div key={index} className="bg-black border border-black shadow-slate-600 shadow-sm hover:shadow-slate-300 hover:shadow-sm px-5 py-3">
                        <div className="">
                          <p className='text-gray-600 my-2 text-md'>Variant #1</p>
                        </div>
                        <div className="border border-slate-500 bg-gray-800">
                          <h3 className="text-md font-bold my-1 text-center text-slate-300">{product.brandName}</h3>
                        </div>
                        <p className="text-gray-400 sm:ml-4 mt-3 mb-1">Product Data Capability</p>
                        <div className='w-3/3 sm:mr-1 bg-gray-700 h-0.5 my-2'></div>
                        <div className="flex sm:mb-2 sm:ml-20">
                          <div className="flex flex-col mr-4">
                            <p className="text-gray-400 mb-1 text-sm">Add Asset</p>
                            <div className="w-2/3 mr-1 bg-orange-500 h-1 my-2 ml-2 rounded-full"></div>
                          </div>
                          <div className="flex flex-col mr-4">
                            <p className="text-gray-400 mb-1 text-sm">Validate</p>
                            <div className="w-2/3 mr-1 bg-orange-500 h-1 my-2 ml-2 rounded-full"></div>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-gray-400 mb-1 text-sm">Go Live</p>
                            <div className="w-2/3 mr-1 bg-orange-500 h-1 my-2 ml-2 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex mt-4">
                          <button className="bg-orange-500 text-white py-2 mb-1 px-4 w-full rounded">Next</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayPage;
