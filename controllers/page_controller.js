"use strict";
define(['app','api'], function (app) {
    app.register.controller('PageController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
       $scope.init = function (module_name) { 
			$rootScope.__MODULE_NAME = module_name || app.settings.DEFAULT_MODULE_NAME;
			api.GET('test',function success(response){
				$scope.List = response.data;
			});
			var data = {title:'Titke',description:'lasfjash ie'};
			api.POST('test',data,function success(response){
				$scope.List.push(response.data);
			},function error(response){
				console.log(response);
			});
			
			
			
	   }
	   $scope.openListItem = function(index){
		   $scope.ActiveIndex = index;
		   $scope.ActiveListItem = $scope.List[index];
	   }
	   $scope.closeListItem = function(){
		    $scope.ActiveIndex = null;
		   $scope.ActiveListItem = null;
	   }
    }]);
});


