/// <reference path="../../../reference.ts"/>

namespace engine.common.data {
	'use strict';

	export class User {
		/**
		 *
		 */
		constructor(private $http: ng.IHttpService, private $q: ng.IQService) {

		}

		isValid(param: string): ng.IPromise<boolean> {
			var deferred = this.$q.defer();

			if (param.length > 3) {
				deferred.resolve(true)
			}
			else { // simulation d'un echec
				deferred.reject(false);
			}


			return deferred.promise;
		}

		getUsers(): ng.IPromise<app.models.User[]> {
			var deferred = this.$q.defer();

			this.$http({
				url: './users.json',
				method: 'GET'
			}).success(result=> {
				deferred.resolve(result);
			}).error(e=> {
				deferred.reject(e);
			});

			return deferred.promise;
		}
		
		public static Factory() {
			var instance = ($http: ng.IHttpService,  $q: ng.IQService) => {
				return new User($http, $q);
			}
			return instance;
		}
	}

	angular.module('common.data').factory("data.user", ["$http", "$q", User.Factory()]);
}