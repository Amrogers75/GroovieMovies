(function () {

        angular.module('myApp')
            .component('home', { // the tag for using this is <char-detail>
                templateUrl: "Templates/home.template.html",
                controller: homePageController,
               

            });
        function homePageController() {
            var vm = this;
            console.log("in homecontroller");
            
        }
            
    }

    )();