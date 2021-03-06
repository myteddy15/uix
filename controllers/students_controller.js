"use strict";
define(['app','api'], function (app) {
    app.register.controller('StudentController',['$scope','$rootScope','api', function ($scope,$rootScope,api) {
		$scope.index = function(){
			$scope.init = function(){
			$scope.Student={};
			$scope.hasBasicInfo=false;
			$scope.hasContactInfo=false;
			$scope.ActiveStep=1;
			};
			$scope.init();
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
			$scope.YearLevels=[];
			api.GET('year_levels',function success(response){
				console.log(response.data);
				$scope.YearLevels = response.data;
			});
			$scope.Countries=[];
			api.GET('countries',function success(response){
				console.log(response.data);
				$scope.Countries = response.data;
			});
			$scope.Provinces=[];
			api.GET('provinces',function success(response){
				console.log(response.data);
				$scope.Provinces = response.data;
			});
			$scope.Cities=[];
			api.GET('cities',function success(response){
				console.log(response.data);
				$scope.Cities = response.data;
			});
			$scope.nextStep = function(){
			if($scope.ActiveStep===1){
				$scope.basicInfo();
			}
			if($scope.ActiveStep===2){
				$scope.contactInfo();
			}
			if($scope.ActiveStep===3){
				$scope.sendInfo();
			};
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
			$scope.getGender=function(gender){
				$scope.gender = gender;
			};
			$scope.updateStep=function(step){
				$scope.ActiveStep = step.id;
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
				$scope.hasBasicInfo = true;
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
				$scope.hasContactInfo = true;
			};
			$scope.sendInfo = function(){
				api.POST('students',$scope.Student,function success(response){
				console.log(response.data);
				$scope.init();
				$scope.clearField();
				$scope.clearField2();
				//reset student info and step
				//call init
				//clearField clearField2
			});
			};
			$scope.clearField=function(){
				$scope.educID = null;
				$scope.level = null;
				$scope.firstName = null;
				$scope.middleName = null;
				$scope.lastName = null;
				$scope.suffix = null;
				$scope.gender = null;
				$scope.birthday = null;
				$scope.birthPlace = null;
				$scope.religion = null;
				$scope.citizenship = null;
			};
			$scope.clearField2=function(){
				$scope.landline = null;
				$scope.mobile = null;
				$scope.currentCountry = null;
				$scope.currentProvince = null;
				$scope.currentCity = null;
				$scope.currentBrgy = null;
				$scope.currentAddrs = null;
				$scope.homeCountry = null;
				$scope.homeProvince = null;
				$scope.homeCity = null;
				$scope.homeBrgy = null;
				$scope.homeAddrs = null;
			};
		};
		$scope.list=function(){
			$scope.YearLevels=[];
			$scope.Students=[];
			$scope.Countries=[];
			$scope.Provinces=[];
			$scope.hasInformation = false;
			$scope.hasNoInformation = true;
			api.GET('year_levels',function success(response){
				console.log(response.data);
				$scope.YearLevels = response.data;	
			});
			api.GET('students',function success(response){
				console.log(response.data);
				$scope.Students=response.data;	
			});
			$scope.openStudentInfo=function(student){
				$scope.Student=student;
				$scope.hasInformation = true;
				$scope.hasNoInformation = false;
				console.log(student);
			};
			$scope.removeStudentInfo = function(){
				$scope.hasInformation = false;
				$scope.hasNoInformation = true;
				$scope.Student = null;
			};
			api.GET('countries',function success(response){
				console.log(response.data);
				$scope.Countries = response.data;	
			});
			api.GET('provinces',function success(response){
				console.log(response.data);
				$scope.Provinces=response.data;	
			});
		};
    }]);
});


