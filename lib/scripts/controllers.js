// Define your controller and the objects you need to reference.
myAngularApp.controller('appInfoController', function ($rootScope, $scope) {
  /* Define a variable (an object variable in the case below). All variables must be within angular's $scope to be referenced in a template.
     To create a global variable, use $rootScope. */
	$scope.myApp = {
		'name': 'Name goes here',
		'description': 'Description goes here'
	 };
});