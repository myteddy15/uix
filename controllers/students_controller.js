"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.init = function(){
			$scope.Students={};
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
			if($scope.ActiveStep===1){
				$scope.basicInfo();
			}
			if($scope.ActiveStep===2){
				$scope.contactInfo();
			}
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
		$scope.gender;
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
		
		$scope.getGender=function(gender){
			$scope.gender = gender;
		};
		
		$scope.basicInfo=function(){
			$scope.Students.educ_level_id=$scope.educID;
			$scope.Students.year_level_id=$scope.level;
			$scope.Students.first_name=$scope.firstName;
			$scope.Students.middle_name=$scope.middleName;
			$scope.Students.last_name=$scope.lastName;
			$scope.Students.suffix_name=$scope.suffix;
			$scope.Students.gender=$scope.gender;
			$scope.Students.birthday=$scope.birthday;
			$scope.Students.religion=$scope.religion;
			$scope.Students.citizenship=$scope.citizenship;
		};
		$scope.contactInfo=function(){
			$scope.Students.contact_numbers=[];
			var landline = {type:'landline', number:$scope.landline};
			var mobile = {type:'mobile', number:$scope.mobile};
			$scope.Students.contact_numbers.push(landline);
			$scope.Students.contact_numbers.push(mobile);
		};
    }]);
});


