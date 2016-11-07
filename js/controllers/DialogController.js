app.controller('DialogController', ['$scope', '$mdDialog', 'game', function($scope, $mdDialog, game){
	$scope.closeDialog = function() {
        $mdDialog.hide();
      }
}])