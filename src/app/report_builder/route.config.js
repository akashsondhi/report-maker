(function() {
angular.module('diligenceVault').config(StateProvider);

function StateProvider($stateProvider) {
    $stateProvider.state('app.report_builder', {
        url: '/report_builder',
        templateUrl: 'report_builder/template.html',
        controller: 'ReportBuilderController',
        controllerAs: 'vm'
    });
}
})();
