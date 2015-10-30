/// <reference path="../../reference.ts"/>

namespace app {
	'use strict';

	interface IHomeControllerScope extends ng.IScope {

		isValid: (string) => ng.IPromise<boolean>;
		launchJob: () => boolean;
		user: models.User;
		users: models.User[];
	}

	class HomeController {
		
		/**
		 *
		 */
		constructor(private $scope: IHomeControllerScope, private businessUser: engine.common.business.User) {
			this.$scope.isValid = (param) => {
				return this.businessUser.isValid(param);
			}

			this.$scope.launchJob = () => {
				alert(this.$scope.user.name);
				this.businessUser.getUsers().then(users=> {
					this.$scope.users = users;
				});
				return true;
			}
		}
	}

	angular.module('starterKit').controller('HomeController', ['$scope', 'business.user', HomeController]);
}