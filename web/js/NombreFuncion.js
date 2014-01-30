/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("MiApp", []);
function NombreFuncion($scope) {
    var datos = {
        nombre: "Jordi ",
        ape1: "Eslava",
        ape2: "Barrera"
    };
    $scope.seguro = datos;
    $scope.mostrar = false;
   
}



