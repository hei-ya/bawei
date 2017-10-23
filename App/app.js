/**
 * Created by N on 2017/10/21.
 */
var app = angular.module('app',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('pic',{
        url:"/pic",
        templateUrl:"App/View/pic.html",
        controller:"picController"
    }).state('jiuye',{
        url:"/jiuye",
        templateUrl:"App/View/jiuye.html"
    }).state('ruxue',{
        url:"/ruxue",
        templateUrl:"App/View/ruxue.html"
    }).state('jiaoyu',{
        url:"/jiaoyu",
        templateUrl:"App/View/jiaoyu.html"
    }).state('user',{
        url:"/user",
        templateUrl:"App/View/user.html"
    });
    $urlRouterProvider.otherwise('/pic');
});