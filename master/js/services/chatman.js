.factory('ChatMan', ['socketFactory',
    function(socketFactory) {
        return socketFactory()
    }
])