

var app = angular.module('myApp', ['ui.router','ngAnimate']);


app.config(function($stateProvider, $urlRouterProvider){
		

			$urlRouterProvider.otherwise('/home');
    
    		$stateProvider
        
		        // HOME STATES AND NESTED VIEWS ========================================
		        .state('home', {
		            url: '/home',
		            templateUrl: 'pages/home.html'
		        }) 
		        .state('about', {
		            url: '/about',
		            templateUrl: 'pages/about.html',
		            controller:function($scope) {		            	
		            	// $scope.result = [
			            // 	{fname:'First Name',lname:'Last Name',amount:'Amount',remove:'btn'}			            
		            	// ];
		            	$scope.result=[{}];
		            	

				        $scope.addData =function(){				        	
					 		$scope.result.push({fname:$scope.fname,lname:$scope.lname,amount:$scope.amount});					 					 	
						};
						$scope.removeRow =function(param){				        	
					 		$scope.result.splice(param,1);					 					 	
						};
						$scope.fname='';
		            	$scope.lname='';
		            	$scope.amount='';
				    }
		        }) 
		        .state('forum', {
		            url: '/forum',
		            templateUrl: 'pages/forum.html'     
		        })
		        .state('contact', {
		            url: '/contact',
		            templateUrl: 'pages/contact.html'     
		        });
		       

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
	});	
	
	$scope.orderProp = 'title';
});
