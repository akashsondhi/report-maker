(function() {
angular
    .module('diligenceVault')
    .directive('componentB', componentB);

function componentB() {
    var directive = {
        restrict: 'E',
        template: '<div>Component B</div>'
    };

    return directive;
}
})();
