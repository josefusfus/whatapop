/**
 * Created by joseluissaezsanchez on 17/6/16.
 */

angular
    .module("whatapop")
    .service("ProductService", function($http) {
        this.getProducts = function () {
            return $http.get("http://localhost:8000/api/products");

        };

        //Guardamos producto.
        this.guardarProducto = function (producto, imagen) {

            var promesa;

            // Si la imagen viene dada.
            if (imagen) {

                // Montamos un 'FormData' con la imagen.
                var datos = new FormData();
                datos.append("img", imagen);

                // Configuramos el 'Content-Type' de la petición.
                // Tenemos que indicarlo como 'undefined' para que
                // AngularJS infiera el tipo de la petición.
                var configuracion = {
                    "headers": {
                        "Content-Type": undefined
                    }
                };

                // Subimos la imagen al servidor.
                promesa = $http
                    .post(
                        "http://localhost:8000/upload",
                        datos,
                        configuracion
                    )
                    .then(function (respuestaProducto) {

                        // En la propiedad 'path' me viene dada
                        // la ruta relativa de la imagen subida.
                        var rutaProducto = respuestaProducto.data.path;

                        // Establecemos la ruta de la imagen en
                        // el objeto receta antes de guardarla.
                        producto.rutaImagenProducto = rutaProducto;

                        return $http.post("http://localhost:8000/api/products", producto);
                    });
            }
            // En caso de no haber indicado una imagen.
            else {
                promesa = $http.post("http://localhost:8000/api/products", producto);
            }

            return promesa;
        };



        // Montamos la ruta absoluta a la imagen indicada.
        this.obtenerRutaImagenAbsolutaProducto = function(rutaRelativaProducto) {
            
            

            return rutaRelativaProducto
                ? ("http://localhost:8000/"+ rutaRelativaProducto)
                : undefined;
        };
    });
