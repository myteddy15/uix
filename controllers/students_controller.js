"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.init = function(){
			$scope.Steps = [
				{id:1, description:"Basic Information"},
				{id:2, description:"Contact Information"},
				{id:3, description:"Confirmation"}
			];
			$scope.ActiveStep=1;
		};
		$scope.nextStep = function(){
			$scope.ActiveStep++;
			console.log($scope.ActiveStep);
		};
		$scope.prevStep = function(){
			$scope.ActiveStep--;
		};
    }]);
});


