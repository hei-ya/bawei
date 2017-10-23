/**
 * Created by N on 2017/10/21.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');

var url = require('url');
var fs = require('fs');
var path = require('path');

gulp.task('server',function(){
    gulp.src('/Data')
        .pipe(webserver({
            livereload:true,
            port:"8080",
            host:"localhost",
            directoryListing:true,
            middleware:function(req,res,next){
                var urlO = url.parse(req.url);
                var mock = path.join(__dirname,'Data/',urlO.query+'.json');

                fs.readFile(mock,function(err,data){
                    if(err) return console.error(err);
                    res.writeHead(200,{
                        "Content-Type":"text/json;charset=utf8",
                        "Access-Control-Allow-Origin":"http://localhost:63342"
                    });
                    res.end(data.toString());
                })
            }
        }))
});