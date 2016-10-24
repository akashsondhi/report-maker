(function() {
angular
    .module('diligenceVault', [
        'ui.router',
        'ui.bootstrap',
        'ui.sortable'
    ])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get('$state');

            $state.go('app.report_builder');
        });
    });
})();
