(function () {
    var application = angular.module("CvBrowser", ["ngRoute", "ui.bootstrap", "uiGmapgoogle-maps"]);
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

    application.config(["uiGmapGoogleMapApiProvider",
        function (uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyBdmUGD9D0ND9T_DPQ0nkJ2T-QKbp6SqKs',
                libraries: 'geometry,visualization'
            })
        }]);
})();