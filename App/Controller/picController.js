/**
 * Created by N on 2017/10/21.
 */
app.controller('picController',['$scope','picService','$timeout',function($scope,picService,$timeout){
    picService.getInfo('get','http://localhost:8080/?data').then(function(result){
        $scope.info = result.data;
    });

    $timeout(function(){
       new Swiper('.swiper-container',{
           loop:true,
           autoplay:1000,
           pagination:".swiper-pagination"
       })
    },1000);

    $('.list ul li').click(function(){
        $(this).addClass('list-active').siblings().removeClass('list-active');
    });



    $scope.back = function(){
        $('.content').scrollTop(0);
    }
}]);
