(function () {
    var application = angular.module("CvBrowser", ["ngRoute"]);
    application.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider
                .when("/language/nl",
                    {
                        templateUrl: "overview-nl.html",
                        controller: "CvController"
                    }
                    )
                .when("/language/en",
                    {
                        templateUrl: "overview-en.html",
                        controller: "CvController"
                    }
                    )
                .otherwise({ redirectTo: "/language/nl" })
        }]);
})();