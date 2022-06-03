const { ConnectionStates } = require("mongoose");
const multer = require("multer");
const  {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: process.env.mongoUrl,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        console.log("-------------------------------------",file,req.body)
        const match = ["image/png", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filetype:`${file.type}`,
            _id:`yagnesh`,
            filename: `${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });