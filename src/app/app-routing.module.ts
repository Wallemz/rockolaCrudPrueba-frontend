import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesComponent } from './components/canciones/canciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

const routes: Routes = [
  {path: 'canciones', component:CancionesComponent}, // Nombre de la ruta, cual componente debe mostrar
  {path:'playlist', component:PlaylistComponent},
  //  {path: '**', redirectTo: 'canciones'},      // ** -> no existe la ruta, redirecciona a la ruta canciones
  {path: '**', component: NotFoundComponent},             // No existe la ruta redirecciona al componente not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
