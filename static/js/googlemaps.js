define(["./app"], function (app) {
    "use strict";

    return app.config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: "AIzaSyDcq3rDJspAPlxR_wHdtXqiXWEfAaC91Lc",
            v: "3.17",
            libraries: "weather,geometry,visualization"
        });
    });
});
