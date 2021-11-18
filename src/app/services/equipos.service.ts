import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ServiceEquipos{
    constructor(private _http:HttpClient){}
    getEquipos():Observable<any>{
        var request = "api/Equipos"
        var url = Global.urlapuestas+request
        return this._http.get(url)
    }
    getDetallesEquipo(idEquipo:string):Observable<any>{
        var request = "/api/Equipos/"+idEquipo
        var url =Global.urlapuestas+request
        return this._http.get(url);

    }

    getJugadores(idEquipo : string):Observable<any>{
        var request = "api/Jugadores/JugadoresEquipos/"+idEquipo
        var url =Global.urlapuestas+request
        return this._http.get(url);
    }
    getDetallesJugador(idJugador : String): Observable<any>{
         var request = "/api/Jugadores/"+ idJugador
         var url =Global.urlapuestas+request
         return this._http.get(url); 
    }
}