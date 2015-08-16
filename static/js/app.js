define([
    "angular",
    "ngRoute",
    "ngBootstrap",
    "ngGoogleMaps",
    "./controllers/index"
], function (ng) {
    "use strict";

    return ng.module("app", [
        "ngRoute",
        "ui.bootstrap",
        "uiGmapgoogle-maps",
        "app.controllers"
    ]);
});
