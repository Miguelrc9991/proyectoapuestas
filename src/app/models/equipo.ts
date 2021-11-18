export class Equipo{
    public idEquipo : number;
    public nombre : string;
    public imagen : string;
    public champions : number;
    public paginaWeb : string;
    public descripcion : string;
    public finalista : number;

    constructor(
        idEquipo : number,nombre:string,imagen:string,champions:number,paginaWeb:string,descripcion:string,finalista:number

){
    this.idEquipo = idEquipo
    this.nombre = nombre
    this.imagen = imagen
    this.champions=champions
    this.paginaWeb = paginaWeb
    this.descripcion=descripcion
    this.finalista=finalista

}
}