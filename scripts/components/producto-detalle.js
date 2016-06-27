/**
 * Created by joseluissaezsanchez on 26/6/16.
 */

angular
    .module("whatapop")
    .component("productoDetalle",{
        bindings: {
            $router: '<'
        },

    templateUrl: "views/producto-detalle.html",

        controller: function (ProductService,$sce) {

            var self = this;
            self.center = [0,0];
            self.zoom = 14;
            self.starType = "glyphicon-star-empty";

            self.$routerOnActivate = function (next) {
                
                var id = next.params.id;

                ProductService.getProducto(id).then(function (producto) {

                    self.producto = producto;

                    self.description = $sce.trustAsHtml(self.producto.description);

                  
                });
            };

            self.back = function(){
                self.$router.navigate(['MisProductos']);
            };
            
            self.getSource = ProductService.getSource;

        }
});
