/// <reference path='../../../reference.ts'/>

namespace engine.common.data {
	'use strict';

	export class User {
		/**
		 *
		 */
		private $http: ng.IHttpService;
		private $q: ng.IQService;

		constructor($http: ng.IHttpService, $q: ng.IQService) {
			this.$http = $http;
			this.$q = $q;
		}

		/* tslint:disable:typedef */
		public static Factory() {
			var instance = ($http: ng.IHttpService, $q: ng.IQService) => {
				return new User($http, $q);
			};
			return instance;
		}
		/* tslint:enable:typedef */

		public isValid(param: string): ng.IPromise<boolean> {
			var deferred: ng.IDeferred<{}> = this.$q.defer();

			if (param.length > 3) {
				deferred.resolve(true);
			} else { // simulation d'un echec
				deferred.reject(false);
			}

			return deferred.promise;
		}

		public getUsers(): ng.IPromise<app.models.User[]> {
			var deferred: ng.IDeferred<{}> = this.$q.defer();

			this.$http({
				url: './users.json',
				method: 'GET'
			}).success(function(result: app.models.User[]): void {
				deferred.resolve(result);
			}).error(function(e: any): void {
				deferred.reject(e);
			});

			return deferred.promise;
		}
	}

	angular.module('common.data').factory('data.user', ['$http', '$q', User.Factory()]);
}
