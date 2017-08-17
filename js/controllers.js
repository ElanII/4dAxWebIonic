angular.module('app.controllers', [])
// version avec Activites et Cotisations -   06-08-2017
.controller('anciensCtrl', function ($scope, $stateParams, AnciensService) {
	$scope.Ancien = {nom: '', id:''};
	$scope.Anciens = [];
	$scope.Stats = {nb: 0, cotisants:0, retards:0, abonnes:0};
	
	$scope.searchAncien = function(){
	  AnciensService.searchAnciens($scope.Ancien.nom, function(anciens){
	  $scope.Anciens = anciens;
	  });
	};
	$scope.getStats = function(){
	  AnciensService.getStats($scope.Ancien.nom, function(stats){
	  $scope.Stats = stats;
	  });
	};
	
	AnciensService.getAnciens().then(function(res) {
	  $scope.Anciens = res;
	});
})


.controller('ancienCtrl', function ($scope, $stateParams, AnciensService) {
	$scope.Ancien = {id:''}; 
	
	
	$scope.getAncien = function() {
	  AnciensService.getAncien($scope.Ancien.id, function(ancien) {
	  $scope.Ancien = ancien;
	  });
	};
	
	AnciensService.retAncien($stateParams.id).then(function(res) {
		$scope.Ancien = res;	
	});

})



.controller('activitesCtrl', function ($scope, $stateParams, AnciensService) {
	$scope.Ancien = {id:''};
	$scope.Activites=[]
	$scope.Activite={}
	
	$scope.getActivite = function() {
	  AnciensService.getActivites($scope.Ancien.id, function(activites) {
	  $scope.Activites = activites;
	  });
	  
	};
	$scope.getAncien = function() {
	  AnciensService.getAnciens($scope.Ancien.id, function(ancien) {
	  $scope.Ancien = ancien;
	  });
	};
	
	AnciensService.retActivites($stateParams.id).then(function(res) {
		$scope.Activites = res;	
	});
	

})
   

.controller('cotisationsCtrl', function ($scope, $stateParams, AnciensService) {
	$scope.Ancien = {id:''}; 
	$scope.Cotisations=[];
	$scope.Cotisation={}
	
	$scope.getCotisations = function() {
	  AnciensService.getCotisations($scope.Ancien.id, function(cotisations) {
	  $scope.Cotisations = cotisations;
	  });
	};
	
	$scope.getAncien = function() {
	  AnciensService.getAncien($scope.Ancien.id, function(ancien) {
	  $scope.Ancien = ancien;
	  });
	};
	AnciensService.retCotisations($stateParams.id).then(function(res) {
		$scope.Cotisations = res;	
	});

})

.controller('adressesCtrl', function ($scope, $stateParams, AnciensService) {
	$scope.Ancien = {id:''}; 
	$scope.Adresses=[];
	$scope.Adresse={}
	
	$scope.getAdresses = function() {
	  AnciensService.getAdresses($scope.Ancien.id, function(adresses) {
	  $scope.Adresses = adresses;
	  });
	};
	
	$scope.getAncien = function() {
	  AnciensService.getAncien($scope.Ancien.id, function(ancien) {
	  $scope.Ancien = ancien;
	  });
	};
	
	AnciensService.retAdresses($stateParams.id).then(function(res) {
		$scope.Adresses = res;	
	});

})

