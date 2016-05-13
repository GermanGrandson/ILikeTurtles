(function(){

  angular.module('turtleFacts')
         .controller('resultsController', ResultsController);

ResultsController.$inject = ['quizMetrics', 'DataService'];

         function ResultsController(quizMetrics, DataService){
           var vm = this;
           vm.quizMetrics = quizMetrics;
           vm.dataService = DataService;
         }
})();
