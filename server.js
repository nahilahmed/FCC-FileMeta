var express = require("express")
var multer = require("multer")
var upload = multer({ dest: 'uploads/' })


var app = express()

app.post('/upload', upload.single('file'), function (req, res, next) {
         var resObject = new Object();
         resObject.size = req.file.size;
         res.json(resObject);

})

app.use(express.static(__dirname + '/public'));

app.listen(3000,console.log("app is running on 3000"));