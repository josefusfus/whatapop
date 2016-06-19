/**
 * Created by joseluissaezsanchez on 17/6/16.
 */

angular
    .module("whatapop")
    .value("Propiedades", {
        urlServidor:"http://localhost:8000",
        endpointProducts:"/api/products",
        endpointUsers:"api/users"
    });