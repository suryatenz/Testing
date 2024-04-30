import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './New.css'
import logo from './logo1.png'
const Search = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  const handleAddProduct = () => {
    navigate('/home');
  };

  const filteredProducts = data.trim() !== '' ? products.filter(product => {
    const searchWords = data.toLowerCase().split(' ');
    return searchWords.some(word => product.modelName.toLowerCase().includes(word));
  }) : [];

  return (
    <div>
      <div className="border border-slate-400 hover:border-slate-600 rounded-md flex items-center ml-4 px-3">
        <FaSearch className="text-white mr-2" />
        <input
          type="text"
          value={data}
          placeholder="Search only by Brand or Model Name"
          className="bg-transparent text-white focus:outline-none flex-grow py-3"
          onChange={(e) => setData(e.target.value)}
          style={{ minWidth: '500px'}}
        />
      </div>
      <div className='bg-black flex justify-center items-center'>
        {filteredProducts.length > 0 && (
          <div className="flex flex-row bg-black p-3 m-2">
            <div className="overflow-y-auto max-h-80">
              {filteredProducts.map((product, index) => (
                <div key={index} className="flex flex-row text-white cursor-pointer bg-black shadow-slate-600 shadow-sm p-5 m-2 w-full">
                  <div className="flex justify-between">
                    <div className="w-1/3">
                      <img src={logo} alt="" />
                    </div>
                    <div className="w-2/3">
                      <p>{product.modelName}</p>
                      <p>Some random text below the heading</p>
                      <div className="mt-3 flex flex-row">
                        <div className=""><p>Text 1</p></div>
                        <div className=""><p>Text 2</p></div>
                        <div className=""> <p>Text 3</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-2 mt-2">
                    <div className=""><button className='bg-orange-600 p-2 mb-2'>Button 1</button></div>
                    <div className=""><button className='bg-orange-600 p-2 mb-2'>Button 2</button></div>
                    <div className="">  <button className='bg-orange-600 p-2 mb-2'>Button 3</button></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {filteredProducts.length === 0 && data.trim() !== '' && (
          <div className=" flex flex-row justify-center text-white cursor-pointer bg-black shadow-slate-600 shadow-sm p-5 w-full mt-3">
           <div className=" mt-1 text-sm">
            <p>No matches found. Add "{data}" to products.</p></div> 
            <button className="bg-orange-600 float-right p-1   ml-3 rounded-lg text-sm" onClick={handleAddProduct}>Add Product</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
