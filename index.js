var express = require('express');
var app = express();
app.listen(process.env.PORT || '3000');

app.use(express.static("views"));

var expressHbs = require('express-handlebars');


app.engine('handlebars',expressHbs({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');

app.get('/',function (request,response) {
    response.render('main',{layout: 'index'});
})

app.get('/dangky.handlebars',function (request,response) {
    response.render("main",{layout: 'dangky'});
})

app.get('/dangnhap.handlebars',function (request,response) {
    response.render("main",{layout: 'dangnhap'});
})
app.get('/listUser.handlebars',function (request,response) {
    response.render("main",{layout: 'listUser'});
})
app.get('/editUser.handlebars',function (request,response) {
    response.render("main",{layout: 'editUser'});
})





var multer  = require('multer')
//var upload = multer({ dest: './public/data/uploads/' })
var upload = multer({
    dest:'./public/data/uploads/'
    , storage: storage
    ,limits:{
        fileSize:5*1024*1024, //gioi han file size <= 1MB
    }
}).single('avatar');

//var upload1 = upload.single('avatar');
app.post('/profile', function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file,req.body)
    //res.send("upload thanh cong");
    upload(req,res,function (error){
        if(error instanceof multer.MulterError){
            res.send("file size Maximum is 5MB.Please try again!!!")
        }else {
            res.send("oke")

        }
    });
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/data/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})







module.exports = app;
