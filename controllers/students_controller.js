"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.init = function(){
			$scope.Departments=[];
			api.GET('educ_levels',function success(response){
				console.log(response.data);
				$scope.Departments=response.data;	
			});
			$scope.Student = {};
			$scope.Steps = [
				{id:1, description:"Basic Information"},
				{id:2, description:"Contact Information"},
				{id:3, description:"Confirmation"}
			];
			$scope.ActiveStep=1;
			$scope.YearLevels=[];
			api.GET('year_levels',function success(response){
				console.log(response.data);
				$scope.YearLevels = response.data;
			});
		};
		$scope.nextStep = function(){
			if($scope.ActiveStep<$scope.Steps.length){
				$scope.ActiveStep++;
			}
		};
		$scope.prevStep = function(){
			if($scope.ActiveStep>1){
				$scope.ActiveStep--;
			};
		};
		$scope.getId = function(department){
			$scope.educID=department.id;
			//console.log($scope.educID);
		};
		$scope.level;
		$scope.firstName;
		$scope.middleName;
		$scope.lastName;
		$scope.suffix;
		$scope.birthday;
		$scope.suffix;
		$scope.birthPlace;
		$scope.religion;
		$scope.citizenship;
		//$scope.male;
		//$scope.female;
		$scope.landline;
		$scope.mobile;
		$scope.currentCountry;
		$scope.currentProvince;
		$scope.currentCity;
		$scope.currentBrgy;
		$scope.currentAddrs;
		$scope.homeCountry;
		$scope.homeProvince;
		$scope.homeCity;
		$scope.homeBrgy;
		$scope.homeAddrs;
		
		$scope.Students={};
		$scope.pushInfo=function(){
			$scope.Students={
			educ_level_id:$scope.educID,
			year_level_id:$scope.level,
			first_name:$scope.firstName,
			middle_name:$scope.middleName,
			last_name:$scope.lastName,
			suffix_name:$scope.suffix,
			//gender:
			//birthday:
			religion:$scope.religion,
			
			};
			console.log($scope.Students);
		};
		
    }]);
});


