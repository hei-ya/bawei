/**
 * Created by N on 2017/10/21.
 */
app.factory('baseService',function($http,$q){
    var factory = {
        getAjax:function(type,url){
            var defer = $q.defer();
            $http({
                url:url,
                method:type
            }).then(function(result){
                defer.resolve(result);
            },function(error){
                defer.reject(error);
            });
            return defer.promise;
        }
    };
    return factory;
});