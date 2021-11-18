import { ServiceEquipos } from 'src/app/services/equipos.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Jugador } from 'src/app/models/jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {
   public jugadores! :Array<Jugador>
  constructor(private _service:ServiceEquipos,private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.mostrarJugadores()
  }
  mostrarJugadores( ):void{
    this.route.params.subscribe((params:Params)=>{
      var idEquipo = params['idEquipo']
      console.log(idEquipo)
      this._service.getJugadores(idEquipo).subscribe(response=>{
        this.jugadores = response
      })

    })
  }

}
