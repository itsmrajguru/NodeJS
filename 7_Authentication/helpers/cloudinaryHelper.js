//this is a gloabal database called cloudanary so we are going to store our images there

const cloudinary = require('cloudinary');

//upload data rto cloudinary

module.exports.uploadTocloudinary = async (filePath) => {
    try {
        //saving the uploaded data from the fiven file
        const result = cloudinary.uploader.upload(filePath)

        return {
            url: result.secure_url,
            publicId: result.public_id,
        };
    } catch (e) {
        console.log(e);
        resizeBy.status().json({
            success: true,
            message: "File can not be uploaded"
        })
    }
}