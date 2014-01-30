/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("MiApp", []);
function Datos($scope) {
    var datos = {
        nombre: "",
        ape1: "",
        ape2: ""
    };
    $scope.seguro = datos;

}


function Preguntas($scope) {
    $scope.preguntas = [
        {
            id: 1,
            enunciado: '¿Cúal es la capital de España',
            correcta: 1,
            elegida: null,
            status: '',
            respuestas: [
                {id: 1, enunciado: 'Madrid'},
                {id: 2, enunciado: 'Barcelona'},
                {id: 3, enunciado: 'Valencia'},
                {id: 4, enunciado: 'Cuenca'}
            ]
        },
        {
            id: 2,
            enunciado: '¿Las personas pueden respirar bajo el agua?',
            correcta: 2,
            elegida: null,
            status: '',
            respuestas: [
                {id: 1, enunciado: 'No pueden.'},
                {id: 2, enunciado: 'Pueden con una botella de aire.'},
                {id: 3, enunciado: 'Pueden con sus branquias.'}
            ]
        },
        {
            id: 3,
            enunciado: '¿Cúal es el color azul del cielo?',
            correcta: 2,
            elegida: null,
            status: '',
            respuestas: [
                {id: 1, enunciado: 'Rosa'},
                {id: 2, enunciado: 'Azul'},
                {id: 3, enunciado: 'Amarillo'}
            ]
        }
    ];

    $scope.userStatus = '';
    $scope.correctas = 0;

    $scope.validate = function(pregunta) {
        if (pregunta.correcta == pregunta.elegida) {
            $scope.correctas++;
            pregunta.status = 'ok';
        } else {
            if (pregunta.status == 'ok' && $scope.correctas > 0) {
                $scope.correctas--;
            }
            pregunta.status = 'error';
        }

        updateUserStatus();
        pregunta.mostrar = false;
    };

    function updateUserStatus() {
        var avgcorrectas = ($scope.correctas / $scope.preguntas.length) * 100;
        if (avgcorrectas == 0) {
            $scope.userStatus = 'looser';
        } else if (avgcorrectas == 100) {
            $scope.userStatus = 'guru';
        } else {
            $scope.userStatus = 'poor';
        }
    }
}

