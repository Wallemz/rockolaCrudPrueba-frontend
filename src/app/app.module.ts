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


// DECORADOR
@NgModule({
  declarations: [     // Array de componeentes del módulo
    AppComponent, HeaderComponent, FooterComponent, TablaCancionesComponent, NotFoundComponent, PlaylistComponent, CancionesComponent      // Componente principal
  ],
  imports: [          // Importacioón de los módulos de los que depende el funcionamiento
    BrowserModule,    // Módulo para los navegadores
    AppRoutingModule,  // Módulo de routing
    HttpClientModule        //
  ],
  providers: [CancionesService],      // Servicios dentro del array
  bootstrap: [AppComponent]   // Array que recibe componentes que crea un árbol de componentes 
})
export class AppModule { }
