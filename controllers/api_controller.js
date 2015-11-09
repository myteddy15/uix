"use strict";
define(['app'], function(app){
	 app.register.factory('api',function($http,$timeout,$rootScope){
		return{
			POST:function(){
				this.HTTP('POST',arguments);
			},
			GET:function(){
				this.HTTP('GET',arguments);
			},
			HTTP:function(method,__args){;
				var endpoint,data,success,error;
				if(__args.length){
					if(typeof __args[0] =='string') endpoint = __args[0];
					if(typeof __args[1] =='object') data = __args[1];
					if(typeof __args[1] =='function') success = __args[1];
					if(__args.length>2) error = __args[__args.length-1];
				}else{
					throw new Error("Incomplete arguments");
				}
				if(app.settings.DEMO_MODE){
					$timeout(function(){
						require([app.settings.TEST_DIRECTORY+'/'+endpoint],function(response){
							$rootScope.$apply(function(){
								if(success && app.settings.TEST_SUCCESS) success(response[method].success);
								if(error && app.settings.TEST_ERROR) error(response[method].error);
							});
						});
					},app.settings.TEST_DELAY);
				}
			}
		}
	});
	
});