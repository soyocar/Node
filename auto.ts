class Auto {
    public color:string;
    public marca:string;
    public motor: string;
    public cant_Puertas:number;
    public patente: number;
    
    constructor (color: string,marca:string,   motor:string, cant_Puertas:number, patente:number){
        this.color = color;
        this.marca = marca;
        this.motor = motor;
        this.cant_Puertas = cant_Puertas;
        this.patente;
    }


    arrancar():void{
        console.log('Estoy arrancando');
    }
    acelerar():void{
        console.log('Estoy acelerando');
    }
    frenar():void{
        console.log('Estoy frenando a full');
    }
}

class RegistroAutomotor extends Auto{
    constructor(color: string,marca:string,   motor:string, cant_Puertas:number, patente:number){
        super(color,marca,motor, cant_Puertas,patente);
    }

    actualizar():void {
        console.log('El registro del auto fue actualizado correctamente');
    }

    listar_auto(patente:number):void{
        console.log('El auto esta registrado en nuestros registros con el numero de patente: ' + patente);
    }
    borra_auto():void{
        console.log('El auto fue borrado correctamente');
    }
    alta_auto():void{
        console.log('El auto fue dado de alta correctamente');
    }
  
   
    
}



const renault = new Auto('Azul','Renault','1.6',4,3434);

console.log(renault.marca);
console.log(renault.color);
renault.arrancar();
renault.acelerar();
renault.frenar();


let registro = new RegistroAutomotor('rojo','Renault','1.6',4,3456);
registro.listar_auto(3434);
registro.alta_auto();
registro.borra_auto();