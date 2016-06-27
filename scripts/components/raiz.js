/**
 * Created by joseluissaezsanchez on 16/6/16.
 */
angular
    .module("whatapop")
    .component("raiz", {
        $routeConfig: [{
            name: "MisProductos",
            path: "/mis-productos",
            component: "misProductos",
            useAsDefault:true
        },{
            name: "ProductoDetalle",
            path: "products/:id",
            component: "productoDetalle"
        }],

        templateUrl: "views/raiz.html"
    });