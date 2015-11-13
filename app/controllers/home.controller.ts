/// <reference path='../../reference.ts'/>

namespace app {
	'use strict';

	export interface IHomeControllerScope extends ng.IScope {

		isValid: (param: string) => ng.IPromise<boolean>;
		launchJob: () => boolean;
		user: models.User;
		users: models.User[];
	}

	export class HomeController {
		/**
		 *
		 */
		private $scope: IHomeControllerScope;
		private businessUser: engine.common.business.User;

		constructor($scope: IHomeControllerScope, businessUser: engine.common.business.User) {
			this.$scope = $scope;
			this.businessUser = businessUser;

			this.$scope.isValid = (param: string) => {
				return this.businessUser.isValid(param);
			};

			this.$scope.launchJob = () => {
				alert(this.$scope.user.name);
				this.businessUser.getUsers().then((users: models.User[]) => {
					this.$scope.users = users;
				});
				return true;
			};

			this.$scope.user = new models.User();
			this.$scope.users = [];
		}
	}

	angular.module('starterKit').controller('HomeController', ['$scope', 'business.user', HomeController]);
}
