"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.init = function(){
			$scope.Student={};
			$scope.Departments=[];
			api.GET('educ_levels',function success(response){
				console.log(response.data);
				$scope.Departments=response.data;	
			});
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
		
		
		$scope.homeCountry;
		$scope.homeProvince;
		$scope.homeCity;
		$scope.homeBrgy;
		$scope.homeAddrs;
		
		$scope.getGender=function(gender){
			$scope.gender = gender;
		};
		
		$scope.basicInfo=function(){
			$scope.Student.educ_level_id=$scope.educID;
			$scope.Student.year_level_id=$scope.level;
			$scope.Student.first_name=$scope.firstName;
			$scope.Student.middle_name=$scope.middleName;
			$scope.Student.last_name=$scope.lastName;
			$scope.Student.suffix_name=$scope.suffix;
			$scope.Student.gender=$scope.gender;
			$scope.Student.birthday=$scope.birthday;
			$scope.Student.birthplace=$scope.birthPlace;
			$scope.Student.religion=$scope.religion;
			$scope.Student.citizenship=$scope.citizenship;
		};
		$scope.contactInfo=function(){
			$scope.Student.contact_numbers=[];
			var landline = {type:'landline', number:$scope.landline};
			var mobile = {type:'mobile', number:$scope.mobile};
			$scope.Student.contact_numbers.push(landline);
			$scope.Student.contact_numbers.push(mobile);
			var current = {	type:'current',
							country:$scope.currentCountry,
							province:$scope.currentProvince,
							city:$scope.currentCity,
							barangay:$scope.currentBrgy,
							address:$scope.currentAddrs,
							};
			var permanent = {type:'permanent',
							country:$scope.homeCountry,
							province:$scope.homeProvince,
							city:$scope.homeCity,
							barangay:$scope.homeBrgy,
							address:$scope.homeAddrs,
							};
			$scope.Student.addressess=[];
			$scope.Student.addressess.push(current);
			$scope.Student.addressess.push(permanent);
		};
    }]);
});


