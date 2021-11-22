import { Component } from '@angular/core';

// DECORADOR COMPONENTE
@Component({
  selector: 'app-root',                   // Permite reutilizar el componente como etiqueta HTML
  templateUrl: './app.component.html',    // Se le define cual es el html
  styleUrls: ['./app.component.scss']     // Se le definen cuales son lo estilos
})
export class AppComponent {
}
