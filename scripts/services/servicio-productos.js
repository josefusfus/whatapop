/**
 * Created by joseluissaezsanchez on 17/6/16.
 */

angular
    .module("whatapop")
    .service("ProductService", function($http) {
        this.getProducts = function () {
            return $http.get("http://localhost:8000/api/products");

        };


        // Montamos la ruta absoluta a la imagen indicada.
        this.obtenerRutaImagenAbsolutaProducto = function(rutaRelativaProducto) {
            
            

            return rutaRelativaProducto
                ? ("http://localhost:8000/"+ rutaRelativaProducto)
                : undefined;
        };
    });
