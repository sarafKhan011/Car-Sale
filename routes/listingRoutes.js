import express from 'express';
import upload from '../middleware/upload.js'; // adjust path as needed
import fs from 'fs';

const router = express.Router();

router.post('/api/listing', upload.array('images', 7), async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);  // all your form fields
    const files = req.files;  // array of image files

    console.log('Form Data:', data);
    console.log('Uploaded Files:', files);

    // TODO: Save to DB (MongoDB etc.) — add your logic here

    res.status(200).json({
      message: 'Listing uploaded successfully!',
      data,
      imagePaths: files.map(file => file.path),
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Failed to process listing.' });
  }
});

export default router;
