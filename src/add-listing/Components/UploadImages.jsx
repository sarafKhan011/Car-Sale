
// import React, { useState } from 'react';

// import { IoMdCloseCircle } from "react-icons/io";
// function UploadImages() {

//     const [selectedFileList,setSelectFileList]=useState([]);
//     const onFileSelected = (event) => {
//         const files = event.target.files;
//         console.log(files); 
//         for(let i=0;i<files?.length;i++){
//             const file=files[i];
//            setSelectFileList((prev)=>[...prev,file])
//         }
//       };
      
//       const onImageremove=(image,index)=>{
//         const result=selectedFileList.filter((item)=>item!=image);
//         setSelectFileList(result);
//       }

//       // const UploadImages=()=>{
//       //   selectedFileList.forEach=Data.now()+'jpeg';
//       //   const storageRef=ref(Storage,)
//       // }

//   return (
//     <div>
//       <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
//       <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
//             {selectedFileList.map((image,index)=>(
//                 <div key={index}>
//                     <h1>
//                     <IoMdCloseCircle className='absolute m-2 text-lg text-red' 
//                     onClick={()=>onImageremove(image,index)}
//                     />
//                     <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-bottom'/>
//                     </h1>
//                 </div>
//             ))}
        
//         <label htmlFor='upload-images'>
//           <div className='border rounded-2xl border-dotted border-b-cyan-600 bg-blue-200 p-4 cursor-pointer hover:shadow-md'>
//             <h2 className='text-lg text-center text-cyan-600'>+</h2>
//           </div>
//         </label>
//       </div>
//       <input type='file' multiple id='upload-images' 
//       onChange={onFileSelected}
//       className='opacity-0 absolute' />
//     </div>
//   )
// }

// export default UploadImages


import React, { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

function UploadImages({ setImages }) {
  const [selectedFileList, setSelectedFileList] = useState([]);

  const onFileSelected = (event) => {
    const files = Array.from(event.target.files);
    const updatedList = [...selectedFileList, ...files];

    setSelectedFileList(updatedList);
    setImages(updatedList); // Send the raw File[] to parent
    console.log("Files selected:", updatedList);
  };

  const onImageRemove = (image) => {
    const updated = selectedFileList.filter((img) => img !== image);
    setSelectedFileList(updated);
    setImages(updated); // Also update in parent
    console.log("After removal:", updated);
  };

  return (
    <div>
      <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute top-1 right-1 text-lg text-red-500 cursor-pointer"
              onClick={() => onImageRemove(image)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-md"
            />
          </div>
        ))}
        <label htmlFor='upload-images'>
          <div className='border border-dotted p-4 text-center cursor-pointer bg-blue-100 rounded-lg'>
            +
          </div>
        </label>
      </div>
      <input
        type='file'
        multiple
        id='upload-images'
        onChange={onFileSelected}
        className='hidden'
      />
    </div>
  );
}

export default UploadImages;
