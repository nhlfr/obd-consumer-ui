define(["./app"], function (app) {
    "use strict";

    return app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.
            when("/overview", {
                templateUrl: "partials/overview.html",
                controller: "OverviewController"
            }).
            when("/map", {
                templateUrl: "partials/map.html",
                controller: "MapController"
            }).
            otherwise({
                redirectTo: "/overview"
            });
    }]);
});
