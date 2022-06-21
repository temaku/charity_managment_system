const multer = require('multer');
const path = require('path');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = path.join(__dirname, "/uploads/");
      fs.mkdir(dir, (err) => cb(null, dir));
    },
    filename: function (_req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  });

  const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error("Please upload an  image file!"));
    }
  
    cb(undefined, true);
  };
  const imageUploader = multer({
    storage,
    limits: {
      fileSize: 10000000,
    },
    fileFilter: imageFilter,
  });

  module.exports = imageUploader;