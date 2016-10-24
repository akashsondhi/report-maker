(function() {
angular.module('diligenceVault').config(StateProvider);

function StateProvider($stateProvider) {
    $stateProvider.state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'layout/template.html'
    });
}
})();
