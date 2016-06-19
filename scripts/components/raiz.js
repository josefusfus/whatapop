/**
 * Created by joseluissaezsanchez on 16/6/16.
 */
angular
    .module("whatapop")
    .component("raiz", {
        $routeConfig: [{
            name: "MisProductos",
            path: "/mis-productos",
            component: "misProductos"
        }],

        templateUrl: "views/raiz.html"
    });