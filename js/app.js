
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
            vm.getVotes = getVotes;

            // method


            vm.getVotes();

            // 
            function getVotes(){

                api.getVotes().then(function(data){
                    vm.users = data;
                    console.log(data)
                })
            }

        };

})()