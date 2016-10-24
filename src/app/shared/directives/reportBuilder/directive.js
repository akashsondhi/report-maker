(function() {
angular
    .module('diligenceVault')
    .directive('reportBuilder', reportBuilder);

function reportBuilder() {
    var directive = {
        restrict: 'E',
        templateUrl: 'shared/directives/reportBuilder/template.html'
    };

    return directive;
}
})();
