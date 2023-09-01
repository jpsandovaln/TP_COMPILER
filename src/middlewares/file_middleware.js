const multer = require('multer');
const fs = require('fs');

class FileMiddleware {
  upload() {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        const pathFile = __dirname + process.env.FILE_UPLOAD;
        fs.mkdirSync(pathFile, { recursive: true });
        cb(null, pathFile);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    });
    return multer({ storage }).single('file'); 
  }
}

module.exports = FileMiddleware;
