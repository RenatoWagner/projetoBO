myApp.controller('BOController', function($scope, $route, $routeParams, $http){

$scope.getBOs = function(){
		$http.get('/api/BOs/').then(function(response){
			$scope.BOs = response.data;
		});
	};

$scope.mostrarBO = function(){
		var id = $routeParams.id;
		$http.get('/api/BO/'+ id).then(function(response){
			$scope.BO = response.data;
		});
	};


  $scope.adicionarBO = function(){
		$http.post('/api/BOs/', $scope.BO).then(function(response){
			window.location.href = '/';
		});
	};

	$scope.atualizarBO = function(){
		var id = $routeParams.id;
		$http.put('/api/BOs/'+ id , $scope.BO).then(function(response){
			window.location.href = '/';
		});
	};
	$scope.apagarBO = function(id){
		var id = id;
		$http.delete('/api/BOs/'+ id).then(function(response){
			$route.reload();
		});
	};




















});
