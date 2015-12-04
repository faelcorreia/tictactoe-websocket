.controller('MainCtrl', ['$scope', 'Hello', 'ChatMan',
    function($scope, Hello, ChatMan) {
        $scope.user = {
            console: ''
        }
        $scope.ChatMan = ChatMan

        $scope.joinRoom = function() {
            ChatMan.emit('ready', $scope.user.name)
            $scope.user.joined = true
        }

        $scope.sendChat = function() {
        	if ($scope.user.chat && $scope.user.chat != '')
            ChatMan.emit('talk', $scope.user.chat)
            $scope.user.chat = ''
        }

        ChatMan.on('join', function(data) {
            $scope.user.console += data + '\n'
        })

        ChatMan.on('talk', function(data) {
            $scope.user.console += data + '\n'
        })
    }
])