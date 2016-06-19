/**
 * Created by joseluissaezsanchez on 17/6/16.
 */

angular
    .module("whatapop")
    .service("ProductService", function($http) {
        this.getProducts = function() {
            return $http.get("http://localhost:8000/api/products");
        };
    });
