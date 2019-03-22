const multer = require("multer");
const path = require("path");

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "temp", "uploads", "capa"));
        },
        filename: (req, file, cb) => {
            file.key = "capa.jpg"
            cb(null, file.key);
        }
    })
};

module.exports = {
    dest: path.resolve(__dirname, "..", "..", "tmp", "uploads", "capa"),
    storage: storageTypes['local'],
    limits: {

    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
};
