/// <reference path="../../reference.ts"/>
/// <reference path="../../../app/controllers/home.controller.ts"/>

describe('app_controllers home', () => {
	let $rootScope: ng.IRootScopeService;
	let scope: app.IHomeControllerScope;
	let $httpBackend: ng.IHttpBackendService;
	let $timeout: ng.ITimeoutService;

	beforeEach(angular.mock.module('starterKit'));

	beforeEach(angular.mock.inject(function($injector: any, $controller: any): void {
		$rootScope = $injector.get('$rootScope');
		scope = $rootScope.$new() as app.IHomeControllerScope;
		$httpBackend = $injector.get('$httpBackend');
		// permet de déclencher les promises (then(), ...)
		$timeout = $injector.get('$timeout');

		$httpBackend.whenGET('./users.json').respond(200, [{ 'name': 'Thomson', 'firstname': 'Patric' }]);

		$controller('HomeController', { $scope: scope });
	}));

	it('should be true with "long term"', (done: () => void): void => {
		const res: ng.IPromise<boolean> = scope.isValid('long term');
		res.then((value: boolean) => {
			expect(value).toBe(true, 'should be true');

		}).finally(() => {
			done();
		});
		// permet de déclencher la réponse de la promise
		$timeout.flush();
	});

	it('get users', (): void => {
		scope.user.name = 'lemettre';
		const res: boolean = scope.launchJob();
		$timeout.flush();
		$httpBackend.flush();
		expect(res).toBe(true, 'must return true');
		expect(scope.users.length > 0).toBe(true, 'must have users');
	});
});
