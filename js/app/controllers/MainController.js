function MainController($scope){
	$scope.name = 'Bruno';
	$scope.contact = {
		email: 'bb@gmail.com',
		phone: '23456789'
	}
}

angular
	.module('app')
	.controller('MainController', MainController);