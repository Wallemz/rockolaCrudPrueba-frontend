import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaCancionesComponent } from './components/tabla-canciones/tabla-canciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { HttpClientModule } from '@angular/common/http';
import { CancionesService } from './services/canciones/canciones.service';
import { ErrorComponent } from './components/error/error.component';
import { FormularioCancionComponent } from './components/formulario-cancion/formulario-cancion.component';
import { ReactiveFormsModule } from '@angular/forms';


// DECORADOR
@NgModule({
  declarations: [     // Array de componeentes del módulo
    AppComponent, HeaderComponent, FooterComponent, TablaCancionesComponent, NotFoundComponent, PlaylistComponent, CancionesComponent, ErrorComponent, FormularioCancionComponent      // Componente principal
  ],
  imports: [            // Importacioón de los módulos de los que depende el funcionamiento
    BrowserModule,      // Módulo para los navegadores
    AppRoutingModule,   // Módulo de routing
    HttpClientModule,   // Módulo HTTP Client
    ReactiveFormsModule
  ],
  providers: [CancionesService],      // Servicios dentro del array
  bootstrap: [AppComponent]   // Array que recibe componentes que crea un árbol de componentes 
})
export class AppModule { }
