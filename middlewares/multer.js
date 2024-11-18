// // import multer from "multer";
import { v4 as uuid } from "uuid";

// // const storage = multer.diskStorage({
// //   destination(req, file, cb) {
// //     cb(null, "uploads");
// //   },
//   // filename(req, file, cb) {
//   //   const id = uuid();

//   //   const extName = file.originalname.split(".").pop();

//   //   const fileName = `${id}.${extName}`;

//   //   cb(null, fileName);
//   // },
// // });

// // export const uploadFiles = multer({ storage }).single("file");

import multer from 'multer';
import path from 'path';

// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Directory where files will be saved
  },
  filename(req, file, cb) {
    const id = uuid();

    const extName = file.originalname.split(".").pop();

    const fileName = `${id}.${extName}`;

    cb(null, fileName);
  },
});

// Initialize multer with storage configuration
const upload = multer({ storage });

export default upload;
