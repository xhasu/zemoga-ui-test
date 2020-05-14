
(function(){

    angular
        .module('app', ['ngSanitize'])
    
    angular
        .module('app')
        .service('api', apiService)
    
    apiService.$inject = ['$http'];

    function apiService($http) {

        var service = {
            getVotes: getVotes,
        };

        return service;

        function getVotes() {
            return $http.get('data/votes.json')
                .then(response => response.data)
                .catch(err => console.log(err))
        };
    };
    
    angular
        .module('app')
        .controller('votesController', votesController)
    
    votesController.$inject = ['api'];

        function votesController(api) {

            var vm = this;
            vm.user = [];

            // services
            vm.getUsers = getUsers;

            // method
            vm.vote = vote;
            vm.voteAgain = voteAgain;

            vm.getUsers();

            // 
            function vote(votes, key) {
                votes[key] = votes[key] + 1;
                votes.count += 1;
                votes.last_vote = key;

                votes.has_vote = true;
            };

            function voteAgain(user) {
                user.votes.select_vote = null;
                user.votes.has_vote = false;
            };

            function getUsers(){

                api.getVotes().then(function(data){
                    vm.users = data;
                    console.log(data)
                })
            };

        };

})()