angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			delete : function(_id) {//new
				return $http.delete('/api/todos/' + _id);
			},
			update : function(_id, todoData) {//new
				return $http.put('/api/todos/' + _id, todoData);
			}
		}
	}]);
