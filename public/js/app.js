function NoteFormCtrl($scope, $http) {

  $scope.update = function(note) {
    $http.post('/note/', { note: $scope.note })
      .success(function(data) {
        window.alert("Note saved successfully!");
        $scope.reset();
      })
      .error(function() {
        window.alert("There was a problem saving the note, please try again.");
      })
  };
 
  $scope.reset = function() {
    $scope.note = {};
  };
 
  $scope.reset();
}
