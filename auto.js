var Auto = /** @class */ (function () {
    function Auto(color, marca, motor, cant_Puertas) {
        this.color = color;
        this.marca = marca;
        this.motor = motor;
        this.cant_Puertas = cant_Puertas;
    }
    Auto.prototype.arrancar = function () {
        console.log('Estoy arrancando');
    };
    Auto.prototype.acelerar = function () {
        console.log('Estoy acelerando');
    };
    return Auto;
}());
var renault = new Auto('Azul', 'Renault', '1.6', 4);
console.log(renault.marca);
console.log(renault.color);
console.log(renault.arrancar);
