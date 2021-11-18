import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { ServiceEquipos } from 'src/app/services/equipos.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public equipos! :Array<Equipo>

  constructor(private _service : ServiceEquipos) { }
  cargarEquipos(){
    this._service.getEquipos().subscribe(response=>{
      this.equipos=response
    })
  }
  ngOnInit(): void {
    this.cargarEquipos()
  }

}
