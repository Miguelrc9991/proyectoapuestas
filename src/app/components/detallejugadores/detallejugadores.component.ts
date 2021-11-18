import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { ServiceEquipos } from 'src/app/services/equipos.service';
import { Jugador } from 'src/app/models/jugador';
@Component({
  selector: 'app-detallejugadores',
  templateUrl: './detallejugadores.component.html',
  styleUrls: ['./detallejugadores.component.css']
})
export class DetallejugadoresComponent implements OnInit {
  public jugador! : Jugador

  constructor( private _service:ServiceEquipos,private route : ActivatedRoute) { }
  mostrarDetalles():void{
    this.route.params.subscribe((params :Params)=>{
      var idJugador =  params['idJugador']
      this._service.getDetallesJugador(idJugador).subscribe( response=>{
        this.jugador = response
      })
    })
  }
  ngOnInit(): void {
    this.mostrarDetalles()
  }

}
