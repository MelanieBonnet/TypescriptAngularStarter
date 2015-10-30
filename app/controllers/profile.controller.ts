/// <reference path="../../reference.ts"/>

namespace app {
	'use strict';

	interface IProfileControllerScope extends ng.IScope {
		description: string;
		name: string;
		schools: models.School[];
		send: () => void;
	}

	class ProfileController {
		/**
		 *
		 */
		constructor(private $scope: IProfileControllerScope) {
			this.$scope.description = "A big project";
			this.$scope.name = "developer developer";
			this.$scope.schools = [new models.School("school 1"), new models.School("school 2")];
			
			this.$scope.send = () => {
				return this.returnWork();
			}
		}
		
		private returnWork(): void {
			alert("end job");
		}
	}

	angular.module('starterKit').controller("ProfileController", ["$scope", ProfileController]);
}