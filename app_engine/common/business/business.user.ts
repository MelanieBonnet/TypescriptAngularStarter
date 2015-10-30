/// <reference path="../../../reference.ts"/>

namespace engine.common.business {
	'use strict';

	export class User {
		/**
		 *
		 */
		constructor(private $q: ng.IQService, private dataUser: common.data.User) {

		}

		isValid(param: string): ng.IPromise<boolean> {
			return this.dataUser.isValid(param);
		}

		getUsers(): ng.IPromise<app.models.User[]> {
			return this.dataUser.getUsers();
		}
		
		public static Factory() {
			var instance = ($q: ng.IQService, dataUser: common.data.User) => {
				return new User($q, dataUser);
			}
			return instance;
		}

	}

	angular.module('common.business').factory("business.user", ["$q", "data.user", User.Factory()]);
}