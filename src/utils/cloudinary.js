import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// Configuration
cloudinary.config({
  cloud_name: process.config.CLOUDINARY_CLOUD_NAME,
  api_key: process.config.CLOUDINARY_API_KEY,
  api_secret: process.config.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //file upload to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file uploaded successfully
    console.log("File is uploaded on cloudinary ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log(error);
    return null;
  }
};
export { uploadOnCloudinary };
