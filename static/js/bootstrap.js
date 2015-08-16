define(["require", "angular", "app", "routes", "googlemaps"], function (require, ng) {
    "use strict";

    require(["domReady!"], function (document) {
        ng.bootstrap(document, ["app"]);
    });
});
