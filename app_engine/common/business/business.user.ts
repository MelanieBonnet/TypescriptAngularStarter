/// <reference path='../../../reference.ts'/>

namespace engine.common.business {
	'use strict';

	export class User {
		/**
		 *
		 */
		private $q: ng.IQService;
		private dataUser: common.data.User;

		constructor($q: ng.IQService, dataUser: common.data.User) {
			this.$q = $q;
			this.dataUser = dataUser;
		}

		/* tslint:disable:typedef */
		public static Factory() {
			var instance = ($q: ng.IQService, dataUser: common.data.User) => {
				return new User($q, dataUser);
			};
			return instance;
		}
		/* tslint:enable:typedef */

		public isValid(param: string): ng.IPromise<boolean> {
			return this.dataUser.isValid(param);
		}

		public getUsers(): ng.IPromise<app.models.User[]> {
			return this.dataUser.getUsers();
		}
	}

	angular.module('common.business').factory('business.user', ['$q', 'data.user', User.Factory()]);
}
