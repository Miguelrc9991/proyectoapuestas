export class Apuesta{
    public idApuesta : number;
    public usuario: string;
    public resultado : string;
    public fecha :string;
    constructor(idApuesta:number,usuario:string,resultado:string,fecha:string

    ){
    this.idApuesta = idApuesta
    this.usuario = usuario
    this.resultado = resultado
    this.fecha = fecha
    }
}