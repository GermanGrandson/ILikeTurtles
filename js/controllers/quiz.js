(function(){

  angular.module("turtleFacts")
         .controller("quizCtrl", QuizController);

         QuizController.$inject = ['quizMetrics', 'DataService']

         function QuizController(quizMetrics, DataService){

           var vm = this;
           vm.quizMetrics = quizMetrics;
           vm.dataService = DataService;
          //  vm.data = quizQuestions;
           vm.activeQuestion = 0;
           vm.questionAnswered = questionAnswered;
        };

        function questionAnswered(){

        }

})();
