import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Apuesta } from "../models/apuesta";
@Injectable()
export class ServiceApuestas{
    constructor(private _http:HttpClient){}
    cargarApuestas():Observable<any>{
        var request = "/api/Apuestas"
        var url = Global.urlapuestas+request
        return this._http.get(url);
    }
    realizarApuesta(apuesta : Apuesta):Observable<any>{
                var json = JSON.stringify(apuesta);
        var header = new HttpHeaders().set("Content-Type", "application/json");

        var request = "/api/Apuestas"
        var url = Global.urlapuestas+request
        return this._http.post(url, json, {headers: header});
    }
}