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


  $scope.gerarPDF = function(){
  var doc = new jsPDF();
  doc.setFontSize(12);
  doc.setFontStyle('bold');
  doc.text('OCORRÊNCIA:', 20,50);
  doc.text($scope.BO.ocorrencia, 20,60);
  doc.text('DATA:', 20,70);
  doc.text($scope.BO.data, 20,80);
  doc.text('LOCAL:', 20,90);
  doc.text($scope.BO.local, 20,100);
  doc.text('ENVOLVIDOS:', 20,110);
  doc.text($scope.BO.envolvidos, 20,120);
  doc.text('BENS ENVOLVIDOS:', 20,130);
  doc.text($scope.BO.bensEnvolvidos, 20,140);
  doc.text('DINAMICA DO FATO:', 20,150);
  doc.text($scope.BO.dinamicaDoFato, 20,160);
  doc.save('arquivo.pdf');
  }


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
