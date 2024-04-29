import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/productSlice';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({
    brandName: '',
    modelName: '',
    modelVariantsName: '',
    catalogName: '',
    subCatalogName: '',
    productReferenceLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(productDetails));
  };

  return (
    <div className="bg-black h-screen text-white py-2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-0">
      <div className=" bg-black shadow-slate-600 shadow-sm px-5 py-4 mt-4">
      <h2 className="text-lg mb-6">Add Product Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block mb-1">Brand Name:</label>
          <input type="text" name="brandName" value={productDetails.brandName} onChange={handleChange} placeholder="Enter brand name" required className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3" />
        </div>
        <div>
          <label className="block mb-1">Model Name:</label>
          <input type="text" name="modelName" value={productDetails.modelName} onChange={handleChange} placeholder="Enter model name" required className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3" />
        </div>
        <div>
          <label className="block mb-1">Model Variants Name:</label>
          <input type="text" name="modelVariantsName" value={productDetails.modelVariantsName} onChange={handleChange} required placeholder="Enter model variants name" className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3" />
        </div>
        <div>
          <label className="block mb-1">Catalog Name:</label>
          <input type="text" name="catalogName" value={productDetails.catalogName} onChange={handleChange} required placeholder="Enter catalog name" className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3" />
        </div>
        <div>
          <label className="block mb-1">Sub Catalog Name:</label>
          <input type="text" name="subCatalogName" value={productDetails.subCatalogName} onChange={handleChange} required placeholder="Enter sub catalog name" className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3" />
        </div>
        <div>
          <label className="block mb-1">Product Reference Link:</label>
          <input type="text" name="productReferenceLink" value={productDetails.productReferenceLink} onChange={handleChange} required placeholder="Enter product reference link" className="w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3" />
        </div>
        <button type="submit" className=" bg-orange-600 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default DetailsPage;
