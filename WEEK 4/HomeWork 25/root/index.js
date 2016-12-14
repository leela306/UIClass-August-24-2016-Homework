angular.module('myApp',['ngRoute']);
angular.module('myApp').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.when('/news',{
		templateUrl:'views/news.html'
	})
	.when('/movies',{
		templateUrl:'views/movies.html'
	})
	.otherwise({
		redirectTo:'/home'
	});

}]);