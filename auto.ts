class Auto {
    public color:string;
    public marca:string;
    public motor: string;
    public cant_Puertas:number;
    
    constructor (color: string,marca:string,   motor:string, cant_Puertas:number){
        this.color = color;
        this.marca = marca;
        this.motor = motor;
        this.cant_Puertas = cant_Puertas;
    }


    arrancar():void{
        console.log('Estoy arrancando');
    }
    acelerar():void {
        console.log('Estoy acelerando');
    }
}

const renault = new Auto('Azul','Renault','1.6',4);

console.log(renault.marca);
console.log(renault.color);
console.log(renault.arrancar);