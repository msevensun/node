var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = express();

mongoose.connect('mongodb://localhost/test');

app.set('views', './views/pages');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port);
console.log('imooc started on port ' + port);

//index page
app.get('/', function(req, res){
	res.render('index', {
		title: 'imooc 首页',
        movie: [{
            title: '机器战警',
            _id: 1,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E'
        },{
            title: '机器战警',
            _id: 2,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E'
        },{
            title: '机器战警',
            _id: 3,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E'
        },{
            title: '机器战警',
            _id: 4,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E'
        },{
            title: '机器战警',
            _id: 5,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E'
        },{
            title: '机器战警',
            _id: 6,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E'
        }]
	});
});

//detail page
app.get('/movie/:id', function(req, res){
	res.render('detail', {
		title: 'imooc 详情页',
        movie: {
            doctor: '导演名字',
            country: '美国',
            title: '机器战警',
            year: 2016,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E',
            language: '英国',
            flash: 'http://player.youku.com/player.php/sid/XMTgxOTAyOTI5Mg==/v.swf',
            summary: '《陈翔六点半》 是一档制作创意爆笑短视频的节目。该节目自主创作拍摄的爆笑视频，为广大观众带来了无限的欢乐。'
        }
	});
});

//admin page
app.get('/admin/movie', function(req, res){
	res.render('admin', {
		title: 'imooc 后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
	});
});

//list page
app.get('/admin/', function(req, res){
	res.render('list', {
		title: 'imooc 列表页',
        movies: [{
            doctor: '导演名字',
            country: '美国',
            _id: 1,
            title: '机器战警',
            year: 2016,
            poster: 'http://r3.ykimg.com/054101015829C2AB641DA4182493323E',
            language: '英国',
            flash: 'http://player.youku.com/player.php/sid/XMTgxOTAyOTI5Mg==/v.swf',
            summary: '《陈翔六点半》 是一档制作创意爆笑短视频的节目。该节目自主创作拍摄的爆笑视频，为广大观众带来了无限的欢乐。'
        }]
	});
});


