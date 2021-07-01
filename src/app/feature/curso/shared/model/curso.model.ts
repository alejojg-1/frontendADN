export class Curso{

    id:number;
    nombre:string;
    tipo:string;
    precio:number;
    descripcion:string;

    constructor(id:number,nombre:string,tipo:string,precio:number,descripcion:string){
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.precio=precio;
        this.descripcion=descripcion;

    }

}