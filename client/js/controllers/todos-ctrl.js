angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.t = true;
		$scope.f = false;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.content != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		$scope.deleteTodo = function(_id) {
			$scope.loading = true;

			Todos.delete(_id)
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data;
				});
		};

		// UPDATE ==================================================================
		$scope.updateTodo = function(_id) {
			//console.log("UPDATING...");
			//if ($scope.todo.content != undefined) {
				$scope.loading = true;
				//console.log("_id: " + _id + " content: " + content);
				Todos.update(_id)
					.success(function(data) {
						$scope.loading = false;
						//$scope.todos = data;
					})
					.error(function(data) {
                	console.log('Error: ' + data);
            		});
			//} else {
			//	console.log("updatedTodo is undefined");
			//};
		}
	}]);
