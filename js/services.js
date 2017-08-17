angular.module('app.services', [])

.factory('AnciensService', ['$http','$q',function($http,$q){
	return {
		getAnciens:function() {
			var deferred = $q.defer();
			$http.get("../4Daction/api_anciens/").then(function(res) {
				deferred.resolve(res.data);
				});
			return deferred.promise;
		},
		
		getStats:function(nom, callback) {
			var deferred = $q.defer();
			$http.get("../4Daction/api_anciens_stats/"+nom).then(function(res) {
				deferred.resolve(res.data);
				callback(res.data);
       				
				});
			return deferred.promise;
		},
		
		searchAnciens:function(nom, callback) {
		  var deferred = $q.defer();
		  $http.get("../4Daction/api_anciens/"+nom).then(function(res) {
		    deferred.resolve(res.data);
		    callback(res.data);
		    
		    });
		  return deferred.promise;
		},
		
		getAncien:function(id, callback) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien/"+id).then(function(res) {
			deferred.resolve(res.data);
			callback(res.data);
			});
			return deferred.promise;			
		},
		
		retAncien:function(id) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien/"+id).then(function(res) {
				deferred.resolve(res.data);
			});
			return deferred.promise;			
		},
		retActivites:function(id) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien_activites/"+id).then(function(res) {
				deferred.resolve(res.data);
			});
			return deferred.promise;			
		},
		retCotisations:function(id) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien_cotisations/"+id).then(function(res) {
				deferred.resolve(res.data);
			});
			return deferred.promise;			
		},
		retAdresses:function(id) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien_adresses/"+id).then(function(res) {
				deferred.resolve(res.data);
			});
			return deferred.promise;			
		},
		
		getActivites:function(id, callback) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien_activites/"+id).then(function(res) {
			deferred.resolve(res.data);
			callback(res.data);
			});
			return deferred.promise;			
		},
		
		getAdresses:function(id, callback) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien_adresses/"+id).then(function(res) {
			deferred.resolve(res.data);
			callback(res.data);
			});
			return deferred.promise;			
		},
		
		getCotisations:function(id, callback) {
		var deferred = $q.defer();			
		$http.get("../4Daction/api_ancien_cotisations/"+id).then(function(res) {
			deferred.resolve(res.data);
			callback(res.data);	
			});
			return deferred.promise;			
		}
	};
}]);