import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleequipoComponent } from './components/detalleequipo/detalleequipo.component';
import { ServiceEquipos } from './services/equipos.service';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetallejugadoresComponent } from './components/detallejugadores/detallejugadores.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { ServiceApuestas } from './services/apuesta.service';
import { NuevaapuestaComponent } from './components/nuevaapuesta/nuevaapuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DetalleequipoComponent,
    JugadoresComponent,
    DetallejugadoresComponent,
    ApuestasComponent,
    NuevaapuestaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
        HttpClientModule,
        routing
  ],
  providers: [appRoutingProviders,ServiceEquipos,ServiceApuestas],
  bootstrap: [AppComponent]
})
export class AppModule { }
