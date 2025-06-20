// import multer from 'multer';
// import path from 'path';

// // Set storage engine
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Make sure this folder exists
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext;
//     cb(null, uniqueName);
//   }
// });

// // Accept images only
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error('Only JPEG and PNG images are allowed'), false);
//   }
// };

// const upload = multer({ storage, fileFilter });

// export default upload;

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // or use diskStorage

router.post('/api/listing', upload.array('images'), async (req, res) => {
  try {
    // Debug incoming data before parsing
    console.log("req.body.data:", req.body.data);
    console.log("req.files:", req.files);

    // Parse the JSON string sent from frontend
    const parsedData = JSON.parse(req.body.data);
    console.log("Parsed Data:", parsedData);

    // Now you can use parsedData like:
    // const { title, brand, price, etc. } = parsedData;

    // Your saving logic goes here...

    res.status(201).json({ message: 'Listing created successfully' });
  } catch (error) {
    console.error("Error while handling listing:", error);
    res.status(500).json({ message: 'Server Error' });
  }
});

