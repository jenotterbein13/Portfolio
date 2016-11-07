app.controller('MainController', ['$scope', '$mdDialog', "projects", function($scope, $mdDialog, projects){
	$scope.websites = projects.websites;
	$scope.games = projects.games;

  $scope.ShowMoreInfo = function(index, $event) {
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: 'views/dialog.html',
      clickOutsideToClose:true,
      locals: {
        game: $scope.games[index]
      },
      controller: DialogController
    });
    
  }

  function DialogController($scope, $mdDialog, game) {
    $scope.game = game;
    $scope.closeDialog = function() {
      $mdDialog.hide();
    }
  }
}]);