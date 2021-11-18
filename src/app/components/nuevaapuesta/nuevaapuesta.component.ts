import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuesta.service';
import { Apuesta } from 'src/app/models/apuesta';
@Component({
  selector: 'app-nuevaapuesta',
  templateUrl: './nuevaapuesta.component.html',
  styleUrls: ['./nuevaapuesta.component.css']
})
export class NuevaapuestaComponent implements OnInit {
@ViewChild("cajaUsuario") cajaUsuario! : ElementRef;
@ViewChild("cajaE1") cajaE1! : ElementRef;
@ViewChild("cajaE2") cajaE2! : ElementRef;
@ViewChild("cajaFecha") cajaFecha! : ElementRef;

  constructor(
        private _router: Router,
        private _service : ServiceApuestas
  ) { }
insertarApuesta() :void{
var idApuesta = 0
var usuario = this.cajaUsuario.nativeElement.value
var resultado = this.cajaE1.nativeElement.value+"-"+this.cajaE2.nativeElement.value
var fecha = this.cajaFecha.nativeElement.value
var apuesta = new Apuesta(idApuesta,usuario,resultado,fecha)
this._service.realizarApuesta(apuesta).subscribe( response=> {
  this._router.navigate(["/apuestas"])
})
}
  ngOnInit(): void {
  }

}
