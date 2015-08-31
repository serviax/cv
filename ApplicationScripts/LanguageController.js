(function(){
    var LanguageController = function($scope, $location)
    {
        var ChangeLangauge = function(language)
        {
            $location.path("/language/" + language);
        }

        var languages = [ 
            {
                key : 'nl',
                label: 'Nederlands'
            },
            {
                key : 'en',
                label : 'English'
            }];

        $scope.languages = languages;
        $scope.selectedLanguage = 'nl';
        $scope.ChangeLangauge = ChangeLangauge;
    }


    var application = angular.module("CvBrowser");
    application.controller("LanguageController", ["$scope", "$location", LanguageController]);
})();