export class Clase{

    id:number;
    idUsuario:number;
    idCurso:number;
    fechaInicio:Date;
    fechaFin:Date;
    costoTotal:number;

    constructor(
        id:number,
        idUsuario:number,
        idCurso:number,
        fechaInicio:Date,
        fechaFin:Date,
        costoTotal:number
    ){
        this.id=id;
        this.idUsuario=idUsuario;
        this.idCurso=idCurso;
        this.fechaInicio=fechaInicio;
        this.fechaFin=fechaFin;
        this.costoTotal=costoTotal;
        
    }


}