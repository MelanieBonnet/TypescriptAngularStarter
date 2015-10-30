/// <reference path="../../reference.ts"/>

namespace app {
	'use strict';

	interface INavBarControllerScope extends ng.IScope {
		isCollapsed: boolean;
		pseudo: string;
	}

	class NavBarController {

		constructor(private $scope: INavBarControllerScope) {
			this.$scope.isCollapsed = true;
			this.$scope.pseudo = "BeHappy";
		}
	}

	angular.module('starterKit').controller("NavBarController", ["$scope", NavBarController]);
}