.directive('showTail', function() {
    return function(scope, elem, attr) {
        scope.$watch(function() {
            elem[0].scrollTop = elem[0].scrollHeight
        })
    }
})