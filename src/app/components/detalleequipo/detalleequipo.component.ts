import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEquipos } from 'src/app/services/equipos.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Equipo } from 'src/app/models/equipo';
@Component({
  selector: 'app-detalleequipo',
  templateUrl: './detalleequipo.component.html',
  styleUrls: ['./detalleequipo.component.css']
})
export class DetalleequipoComponent implements OnInit {

  public equipo! : Equipo
  constructor( private _service : ServiceEquipos,private route : ActivatedRoute) { }
mostrarDetalles(){
this.route.params.subscribe((params:Params) =>{
  var idEquipo = params['id']
  console.log(idEquipo)
  this._service.getDetallesEquipo(idEquipo).subscribe(response=>{
    this.equipo = response
  })
})
}
  ngOnInit(): void {
    this.mostrarDetalles()
  }

}
