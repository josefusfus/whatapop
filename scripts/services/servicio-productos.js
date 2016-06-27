/**
 * Created by joseluissaezsanchez on 17/6/16.
 */

angular
    .module("whatapop")
    .service("ProductService", function($http,$filter) {
        this.getProducts = function () {
            return $http.get("http://localhost:8000/api/products");

        };


        // Montamos la ruta absoluta a la imagen indicada.
        this.obtenerRutaImagenAbsolutaProducto = function(rutaRelativaProducto) {
            
            

            return rutaRelativaProducto
                ? ("http://localhost:8000/"+ rutaRelativaProducto)
                : undefined;
        };


        this.getProducto = function (id) {

            return this.getProducts().then(function (response) {
                return $filter("filter")(response.data, {"id": id})[0];
            });
        };

        this.getSource = function (source) {
            console.log(source);
            return source ? ("http://localhost:8000/" +  source) : undefined;
        };
    });
