"use strict";
define(['app'], function(app){
	 app.register.factory('api',function($http,$timeout,$rootScope){
		return{
			POST:function(){
				return this.HTTP('POST',arguments);
			},
			GET:function(){
				return this.HTTP('GET',arguments);
			},
			HTTP:function(method,__args){
				var self = this;
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
								if(app.settings.TEST_SUCCESS) {
									if(success){
										success(response[method].success);
									}
									if(typeof self.__success=='function'){
										self.__success(response[method].success);
									}
								}
								if(app.settings.TEST_ERROR) {
									if(error){
										error(response[method].error);
									}
									if(typeof self.__error=='function'){
										self.__error(response[method].error);
									}
								}
							});
						});
					},app.settings.TEST_DELAY);
					return this;
				}
			},
			onSubmit:function(submit){
				submit();
				return this;
			},
			onSuccess:function(success){
				this.__success=success;
				return this;
			},
			onError:function(error){
				this.__error=error;
				return this;
			}
		}
	});
	
});