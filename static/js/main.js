require.config({
    paths: {
        "domReady": "../vendor/requirejs-domready/domReady",
        "angular": "../vendor/angular/angular.min",
        "ngRoute": "../vendor/angular-route/angular-route.min",
        "ngBootstrap": "../vendor/angular-bootstrap/ui-bootstrap.min",
        "lodash": "../vendor/lodash/lodash.min",
        "ngGoogleMaps": "../vendor/angular-google-maps/dist/angular-google-maps.min"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "ngRoute": {
            exports: "ngRoute",
            deps: ["angular"]
        },
        "ngBootstrap": {
            exports: "ngBootstrap",
            deps: ["angular"]
        },
        "ngGoogleMaps": {
            exports: "ngGoogleMaps",
            deps: ["angular", "lodash"]
        }
    },
    deps: ["./bootstrap"]
});
