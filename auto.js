var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Auto = /** @class */ (function () {
    function Auto(color, marca, motor, cant_Puertas, patente) {
        this.color = color;
        this.marca = marca;
        this.motor = motor;
        this.cant_Puertas = cant_Puertas;
        this.patente;
    }
    Auto.prototype.arrancar = function () {
        console.log('Estoy arrancando');
    };
    Auto.prototype.acelerar = function () {
        console.log('Estoy acelerando');
    };
    Auto.prototype.frenar = function () {
        console.log('Estoy frenando a full');
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function (_super) {
    __extends(RegistroAutomotor, _super);
    function RegistroAutomotor(color, marca, motor, cant_Puertas, patente) {
        return _super.call(this, color, marca, motor, cant_Puertas, patente) || this;
    }
    RegistroAutomotor.prototype.actualizar = function () {
        console.log('El registro del auto fue actualizado correctamente');
    };
    RegistroAutomotor.prototype.listar_auto = function (patente) {
        console.log('El auto esta registrado en nuestros registros con el numero de patente: ' + patente);
    };
    RegistroAutomotor.prototype.borra_auto = function () {
        console.log('El auto fue borrado correctamente');
    };
    RegistroAutomotor.prototype.alta_auto = function () {
        console.log('El auto fue dado de alta correctamente');
    };
    return RegistroAutomotor;
}(Auto));
var renault = new Auto('Azul', 'Renault', '1.6', 4, 3434);
console.log(renault.marca);
console.log(renault.color);
renault.arrancar();
renault.acelerar();
renault.frenar();
var registro = new RegistroAutomotor('rojo', 'Renault', '1.6', 4, 3456);
registro.listar_auto(3434);
registro.alta_auto();
registro.borra_auto();
