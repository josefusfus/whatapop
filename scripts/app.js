
// Setter

angular.module("whatapop", [
    "ngComponentRouter",
    "dahr.ng-image-picker"
    ]);

angular.module("whatapop").config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

// En el value '$routerRootComponent' indicamos el componente raíz.
angular.module("whatapop").value("$routerRootComponent", "raiz");