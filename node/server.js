var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  multer = require('multer'),
  bodyParser = require('body-parser');
cors = require('cors')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/quiz_app',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    console.log("Connected !!!")
  }).catch(err => {
    console.log(err);
  });



let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
});
let upload = multer({ storage: storage }).any()
app.use(upload)
app.use(express.static('uploads'))




app.use(cors({}))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: false,
}))

var routes = require('./api/route');
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('Server started on: ' + port);




// const express = require('express');
// const multer = require('multer');
// const port = 3000;
// const app = express();

// //cấu hình lưu trữ file khi upload xong
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       //files khi upload xong sẽ nằm trong thư mục "uploads" này - các bạn có thể tự định nghĩa thư mục này
//       cb(null, 'uploads') 
//     },
//     filename: function (req, file, cb) {
//       // tạo tên file = thời gian hiện tại nối với số ngẫu nhiên => tên file chắc chắn không bị trùng
//       const filename = Date.now() + '-' + Math.round(Math.random() * 1E9) 
//       cb(null, filename + '-' + file.originalname )
//     }
//   })
// //Khởi tạo middleware với cấu hình trên, lưu trên local của server khi dùng multer
// const upload = multer({ storage: storage })

// //route hiển thị form upload file
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// })

// //route xử lý upload single file
// // "middleware multer "upload.single('formFile')" xử lý upload single file
// // ví dụ sử dụng cho upload 1 ảnh như: avatar, cover,...
// /* 
//     Lưu ý: upload.single('formFile') - tên của thuộc tính name trong input 
//     phải giống với 'formfile" trong hàm upload.single
// */
// app.post('/uploadfile', upload.single('formFile'), (req, res, next) => {
//     //nhận dữ liệu từ form
//     const file = req.file;
//     // Kiểm tra nếu không phải dạng file thì báo lỗi
//     if (!file) {
//         const error = new Error('Upload file again!')
//         error.httpStatusCode = 400
//         return next(error)
//       }

//     // file đã được lưu vào thư mục uploads
//     // gọi tên file: req.file.filename và render ra màn hình
//     res.sendFile(__dirname + `/uploads/${req.file.filename}`);
// })

// //route xử lý upload multiple file
// // "middleware multer "upload.array('formFileMultiple', 3)" xử lý upload multiple file 
// // ví dụ sử dụng cho chứa năng upload các hình ảnh của sản phẩm, gallery ảnh,...
// /* 
//     Lưu ý:  - upload.array('formFileMultiple') - tên của thuộc tính name trong input 
//     phải giống với 'formFileMultiple" trong hàm upload.array
//             - upload.array('fieldname, maxcount): maxcount: số lượng file tối đa upload trong 1 lần
//             như code phía dưới là tối đa 3 file trong 1 lần upload
// */
// app.post('/uploadmultiple', upload.array('formFileMultiple', 3), (req, res, next) => {
//     //nhận dữ liệu từ form mảng thông số của các file upload
//     const files = req.files;
//     // Kiểm tra nếu không phải dạng file thì báo lỗi
//     if (!files) {
//         const error = new Error('Upload files again')
//         error.httpStatusCode = 400
//         return next(error)
//       }
    
//     // files đã được lưu vào thư mục uploads
//     // hiển thị thông số các ảnh ra màn hình
//     res.send(files);
// })

// app.listen(3000, () => {
//     console.log(`Server started on port ${port}`)
// })