import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { ServiceApuestas } from 'src/app/services/apuesta.service';
import { Apuesta } from 'src/app/models/apuesta';
@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {
 public apuestas! : Array<Apuesta>
  constructor(private _service:ServiceApuestas) { }
  mostrarApuestas():void{
    this._service.cargarApuestas().subscribe(response=>{
        this.apuestas = response
    })
  }
  ngOnInit(): void {
    this.mostrarApuestas()
  }

}
