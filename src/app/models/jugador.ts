export class Jugador{
    public idJugador : number;
    public nombre : string;
    public posicion : string;
    public imagen : string;
    public fechaNacimiento:string;
    public pais : string;
    public idEquipo : number;
    constructor(idJugador : number, nombre : string,posicion : string,imagen : string,fechaNacimiento:string,pais : string,idEquipo : number

    ){
this.idJugador = idJugador
this.idEquipo = idEquipo
this.nombre = nombre
this.posicion = posicion
this.imagen = imagen
this.fechaNacimiento = fechaNacimiento
this .pais = pais
    }
}