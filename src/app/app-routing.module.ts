import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TablaCancionesComponent } from './components/tabla-canciones/tabla-canciones.component';

const routes: Routes = [
  {path: 'canciones', component:TablaCancionesComponent}, // Nombre de la ruta, cual componente debe mostrar
//  {path: '**', redirectTo: 'canciones'},      // ** -> no existe la ruta, redirecciona a la ruta canciones
  {path: '**', component: NotFoundComponent},             // No existe la ruta redirecciona al componente not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
