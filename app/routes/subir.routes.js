module.exports = app => {

  const path = require('path');
  const multer = require('multer');
  let cont=1;

  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './app/images')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname +'_'+ new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear() +'_'+Date.now()+ path.extname(file.originalname));
      cont++;
    }
  });

  const upload = multer({ storage });




  app.post('/subir', upload.single('file'), (req, res) => {
   // console.log(`Storage location is ${req.hostname}/${req.file.path}`);
    return res.send(req.file);
  });
};