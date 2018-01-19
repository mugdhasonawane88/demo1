

var app = angular.module('myApp', ['ngRoute','ngAnimate']);


app.config(function($routeProvider){
			$routeProvider.when('/',{
				templateUrl : 'pages/home.html'
			})
			$routeProvider.when('/about',{			
				templateUrl : 'pages/about.html' 			
			})
			$routeProvider.when('/portfolio',{
				templateUrl : 'pages/portfolio.html'
			})
			$routeProvider.when('/contact',{
				templateUrl : 'pages/contact.html'
			})
			$routeProvider.otherwise({
				redirectTo : '/'
			})
});


app.controller('customersCtrl', function($scope, $http) {
    $http.get("https://api.themoviedb.org/3/movie/popular?api_key=299470aa51026702efe6ff4171874a57").success(function(data) {
    	$scope.movieList = data.results;
    	//console.log($scope.movieList);
    });
	  $http.get("https://api.themoviedb.org/3/tv/popular?api_key=299470aa51026702efe6ff4171874a57").success(function(data) {
    	$scope.tvList = data.results;    
    });	
	$http.get("https://api.themoviedb.org/3/people/popular?api_key=299470aa51026702efe6ff4171874a57").success(function(data) {
    	$scope.peopleList = data.results;
		
	   	$scope.display = false;
		$scope.toggle = function(){
			$scope.display = !$scope.display;
		}	
    });	
});
