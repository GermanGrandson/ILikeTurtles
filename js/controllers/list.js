(function(){
 angular.module("turtleFacts")
        .controller("listController", ListController);

        ListController.$inject = ['quizMetrics','DataService'];

        function ListController(quizMetrics, DataService){
          var vm = this;
          vm.quizMetrics = quizMetrics;
          vm.data = DataService.turtlesData;
          vm.activeTurtle = {};
          vm.changeActiveTurtle = changeActiveTurtle;
          vm.search = '';
          // vm.quizActive = false;
          vm.activateQuiz = activateQuiz;

          function changeActiveTurtle(index){
            vm.activeTurtle = index;
          }

          function activateQuiz(){
            // vm.quizMetrics.quizActive = true;
            quizMetrics.changeState(true);
          }

        };


})();
