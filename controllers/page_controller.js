"use strict";
define(['app','api'], function (app) {
    app.register.controller('PageController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
       $scope.init = function (module_name) { 
			$rootScope.__MODULE_NAME = module_name || app.settings.DEFAULT_MODULE_NAME;
			api.GET('test',function(response){
				$scope.List = response.data.list;
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


