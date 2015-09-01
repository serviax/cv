(function () {

    var MapController = function ($scope, $modal, $log, uiGmapGoogleMapApi) {
        var OpenMap = function () {
            var modalDialog = $modal.open(
                {
                    animation: true,
                    templateUrl: "/mapview.html",

                }
            );
            $log.info('dialog opened for map');
        }

        $scope.OpenMap = OpenMap;

        uiGmapGoogleMapApi.then(
            function (maps) {
                $log.info('map is loaded, setting coordinates');
                $scope.map = { center: { latitude: 50.861113, longitude: 4.700870 }, zoom: 12, homeMarker: { latitude: 50.861113, longitude: 4.700870 } };
            }
        );
    }

    var app = angular.module("CvBrowser");
    app.controller("MapController", ["$scope", "$modal", "$log", "uiGmapGoogleMapApi", MapController]);
})();