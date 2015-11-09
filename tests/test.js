"use strict";
define([],function(){
	return {
		GET:{
			success:{
				meta:{
					title: 'Test'
				},
				data:{
					list: [
						{title:'List group item heading 1',description:'One Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
						{title:'List group item heading 2',description:'Two Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
						{title:'List group item heading 3',description:'Three Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
						{title:'List group item heading 4',description:'Four Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
						{title:'List group item heading 5',description:'Five Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
						{title:'List group item heading 6',description:'Six Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'},
					],
				}
			},
			error:{
				test: 'Error',
			}
		}
	}
});