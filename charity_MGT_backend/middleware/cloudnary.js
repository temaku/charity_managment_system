const fs = require('fs');
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name:process.env.CLOUDNARY_CLOUD_NAME,
    api_key:process.env.CLOUDNARY_API_KEY,
    api_secret:process.env.CLOUDNARY_API_SECRET
})
const cloudinaryUploader = async (
  path,
  resource_type,
  folder,
  filename,
  res
) => {
  const upload = await cloudinary.uploader.upload(
    path,
    {
      resource_type,
      public_id: `${folder}/${filename}`,
    },

    (err, file) => {
      if (err) return res.send({ success: false, message: err });

      fs.unlinkSync(path);
    }
  );

  return upload;
};



module.exports = cloudinaryUploader;