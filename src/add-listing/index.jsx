// import Header from '@/components/Header'
// import React, { useState } from 'react'
// import carDetails from './../Shared/carDetails.json'
// import InputField from './Components/InputField'
// import DropdownField from './Components/DropdownField'
// import TextArea from './Components/TextAreaField'
// import { Separator } from '@radix-ui/react-select'
// import features from './../Shared/features.json'
// import Checkbox from './components/CheckboxField'
// import { Button } from '@/components/ui/button'
// import IconField from './Components/IconField'
// import Footer from '@/components/Footer'
// import UploadImages from './Components/UploadImages'

// import { useNavigate } from 'react-router-dom'

// function AddListing() {
//   const [formData, setFormData] = useState({});
//   const [featuresData, setFeaturesData] = useState({});
//   const navigate = useNavigate();

//   // Capture user input
//   const handleInputChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Capture selected features
//   const handleFeatureChange = (name, value) => {
//     setFeaturesData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   // Handle form submission
//   const onsubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitted form data:", formData);
//     console.log("Selected features:", featuresData);

//     try {
//       const response = await fetch('http://localhost:3000/api/add-listing', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           features: featuresData
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Data saved:", data);
//         navigate('/Profile');
//       } else {
//         console.error("Failed to save data:", data.error);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//     }
//   };

//   // ✅ Now the return is inside the function
//   return (
//     <div>
//       <Header />
//       <div className='px-10 md:px-20 my-10'>
//         <h2 className='font-bold text-4xl'>Add New Listing</h2>
//         <form className='p-10 border rounded-xl mt-10' onSubmit={onsubmit}>
//           {/* Car Details */}
//           <div>
//             <h2 className='font-medium text-xl mb-6'>Car Details</h2>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
//               {carDetails.carDetails.map((item, index) => (
//                 <div key={index}>
//                   <label className='text-sm flex gap-2 items-center mb-1'>
//                     <IconField icon={item?.icon} />
//                     {item?.label}
//                     {item.required && <span className='text-red-500'>*</span>}
//                   </label>
//                   {item.fieldType === 'text' || item.fieldType === 'number' ? (
//                     <InputField item={item} handleInputChange={handleInputChange} />
//                   ) : item.fieldType === 'dropdown' ? (
//                     <DropdownField item={item} handleInputChange={handleInputChange} />
//                   ) : item.fieldType === 'textarea' ? (
//                     <TextArea item={item} handleInputChange={handleInputChange} />
//                   ) : null}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Separator className='my-6' />

//           {/* Features List */}
//           <div>
//             <h2 className='font-medium text-xl my-6'>Features</h2>
//             <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
//               {features.features.map((item, index) => (
//                 <div key={index} className='flex gap-2 items-center'>
//                   <Checkbox oncheckedChange={(value) => handleFeatureChange(item.name, value)} />
//                   <h2>{item.label}</h2>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Car Images */}
//           <Separator className='my-6' />
//           <UploadImages />

//           {/* Submit Button */}
//           <div className='mt-10 flex justify-end'>
//             <Button type='submit'>Submit</Button>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default AddListing;


import Header from '@/components/Header'

import carDetails from '../Shared/carDetails.json'
import InputField from './Components/InputField'
import DropdownField from './Components/DropdownField'
import TextArea from './Components/TextAreaField'
import { Separator } from '@/components/ui/separator'
import features from '../Shared/features.json'
import Checkbox from './components/CheckboxField'
import { Button } from '@/components/ui/button'
import IconField from './Components/IconField'
import Footer from '@/components/Footer'
import UploadImages from './Components/UploadImages'
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'

function AddListing() {
  const navigate = useNavigate()

  // Initialize state based on carDetails and features
  const initialFormData = carDetails.carDetails.reduce((acc, curr) => {
    acc[curr.name] = ''
    return acc
  }, {})

  const initialFeaturesData = features.features.reduce((acc, curr) => {
    acc[curr.name] = false
    return acc
  }, {})

  const [formData, setFormData] = useState(initialFormData)
  const [featuresData, setFeaturesData] = useState(initialFeaturesData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [images, setImages] = useState([]);


  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    console.log(formData);
  }

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);
  
    // Basic validation
    if (!formData.make || !formData.model) {
      setError('Make and Model are required!');
      setLoading(false);
      return;
    }
  
    try {
      const form = new FormData();
  
      // Add all form fields as JSON
      form.append('data', JSON.stringify({
        ...formData,
        features: featuresData,
      }));
  
      // Add image files
      images.forEach((file) => {
        form.append('images', file); // multiple files under same key
      });
  
      const response = await fetch('http://localhost:3000/api/listing', {
        method: 'POST',
        body: form, // NO Content-Type header here
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSuccess(true);
        console.log('Data saved:', data);
        navigate('/Profile');
      } else {
        setError(data.error || 'Failed to save listing.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Listing</h2>

        <form className='p-10 border rounded-xl mt-10' onSubmit={onsubmit}>
          {/* Car Details */}
          <div>
            <h2 className='font-medium text-xl mb-6'>Car Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className='text-sm flex gap-2 items-center mb-1'>
                    <IconField icon={item?.icon} />
                    {item?.label}
                    {item.required && <span className='text-red-500'>*</span>}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number' ? (
                    <InputField item={item} handleInputChange={handleInputChange} />
                  ) : item.fieldType === 'dropdown' ? (
                    <DropdownField item={item} handleInputChange={handleInputChange} />
                  ) : item.fieldType === 'textarea' ? (
                    <TextArea item={item} handleInputChange={handleInputChange} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className='my-6' />

          {/* Features */}
          <div>
            <h2 className='font-medium text-xl my-6'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              {features.features.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  <Checkbox
                    checked={featuresData[item.name]}
                    oncheckedChange={(value) => handleFeatureChange(item.name, value)}
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          <Separator className='my-6' />

          {/* Car Images */}
          <UploadImages setImages={setImages} />


          {/* Error Message */}
          {error && <p className='text-red-500 mt-4'>{error}</p>}

          {/* Submit Button */}
          <div className='mt-10 flex justify-end'>
            <Button type='submit' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddListing
