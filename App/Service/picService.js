/**
 * Created by N on 2017/10/21.
 */
app.factory('picService',['baseService',function(baseService){
    var factory = {
        getInfo:function(type,url){
            return baseService.getAjax(type,url);
        }
    };
    return factory;
}]);