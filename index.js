var express = require('express');
var app = express();
app.listen(process.env.PORT || '3000');

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
