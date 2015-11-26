.factory('Hello', ['$resource',
    function($resource) {
        return $resource('/api/hello')
    }
])