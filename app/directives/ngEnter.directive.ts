/// <reference path="../../reference.ts"/>

module app.directive {
	"use strict";

	interface INgEnterDirectiveScope extends ng.IScope { }

	interface INgEnterDirectiveAttribute extends ng.IAttributes {
		ngEnter: () => void;
	}

	export class NgEnter implements ng.IDirective {

		constructor() {	}

		link = (scope: INgEnterDirectiveScope, element: ng.IAugmentedJQuery, attrs: INgEnterDirectiveAttribute) => {
			element.bind("keydown keypress", function(event) {
				if (event.which === 13) {
					scope.$apply(function() {
						scope.$eval(attrs.ngEnter);
					});

					event.preventDefault();
				}
			});
		}

		public static Factory() {
			var directive = () => {
				return new NgEnter();
			}
			return directive;
		}
	}

	angular.module('starterKit').directive("ngEnter", [NgEnter.Factory()]);
}