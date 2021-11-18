import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { DetalleequipoComponent } from "./components/detalleequipo/detalleequipo.component";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { DetallejugadoresComponent } from "./components/detallejugadores/detallejugadores.component";
import { ApuestasComponent } from "./components/apuestas/apuestas.component";
import { NuevaapuestaComponent } from "./components/nuevaapuesta/nuevaapuesta.component";
const appRoutes : Routes=[

    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "detalles/:id", component: DetalleequipoComponent},
    {path: "jugadores/:idEquipo", component: JugadoresComponent},
    {path: "detallesjugador/:idJugador", component: DetallejugadoresComponent},
    {path: "apuestas", component: ApuestasComponent},
    {path: "napuesta", component: NuevaapuestaComponent},


]
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);