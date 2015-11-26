.controller('MainCtrl', ['$scope', 'Hello',
    function($scope, Hello) {
        var hello = Hello.get(function() {
        	$scope.hello = hello.data
        })
    }
])