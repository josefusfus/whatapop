/**
 * Created by joseluissaezsanchez on 17/6/16.
 */

angular
    .module("whatapop")
    .component("misProductos", {

        // Con 'template' / 'templateUrl' establecemos la vista del componente.
        templateUrl: "views/mis-productos.html",

        // En 'controller' establecemos la lógica del componente.
        controller: function(ProductService) {

            var self = this;

            // Filtro para buscar recetas por nombre.
            self.filtroProductos = { name: "" };

            // Podemos engancharnos al hook '$onInit', que se
            // dispara cuando el componente se inicia.
            self.$onInit = function() {

                // Como 'obtenerRecetas()' retorna una promesa, tengo que
                // pasar un manejador a su funcion 'then()'.
                ProductService.getProducts().then(function(respuesta) {

                    // En la propiedad 'data' de la respuesta HTTP tenemos el cuerpo de la misma.
                    self.productos = respuesta.data;
                });
            };

        }
    });