(function() {
angular
    .module('diligenceVault')
    .directive('componentA', componentA);

function componentA() {
    var directive = {
        restrict: 'E',
        template: '<div>Component A</div>'
    };

    return directive;
}
})();
