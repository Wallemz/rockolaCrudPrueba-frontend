import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioCancionComponent } from './components/formulario-cancion/formulario-cancion.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

const routes: Routes = [
  {path: 'canciones', component:CancionesComponent}, // Nombre de la ruta, cual componente debe mostrar
  {path: 'formulario-cancion', component:FormularioCancionComponent},
  {path:'error', component:ErrorComponent},          // Ruta para errores
  {path:'playlist', component:PlaylistComponent},
  //  {path: '**', redirectTo: 'canciones'},      // ** -> no existe la ruta, redirecciona a la ruta canciones
  {path: '**', component: NotFoundComponent},             // No existe la ruta redirecciona al componente not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
