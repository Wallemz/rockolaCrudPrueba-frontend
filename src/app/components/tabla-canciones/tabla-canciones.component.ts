import { Component, OnInit } from '@angular/core';
import { CancionesService } from 'src/app/services/canciones/canciones.service';

@Component({
  selector: 'app-tabla-canciones',
  templateUrl: './tabla-canciones.component.html',
  styleUrls: ['./tabla-canciones.component.scss']
})
export class TablaCancionesComponent implements OnInit {

  constructor(private cancionesService: CancionesService) {     //  Inyección de dependencias del servicio canciones

  } 

  ngOnInit(): void {            // Inicializar datos
    console.log('Entra al componente')
    this.obtenerCanciones();
  }

  public async obtenerCanciones(){
    try {
      const response = await this.cancionesService.obtenerCanciones();
    } catch (error) {
      console.log(error);
    }
  }

}
