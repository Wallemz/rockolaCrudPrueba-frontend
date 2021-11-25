import { LiteralPrimitive } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionModel } from 'src/app/models/cancion';
import { CancionesService } from 'src/app/services/canciones/canciones.service';

@Component({
  selector: 'app-tabla-canciones',
  templateUrl: './tabla-canciones.component.html',
  styleUrls: ['./tabla-canciones.component.scss']
})
export class TablaCancionesComponent implements OnInit {

  public canciones: CancionModel[] = [];     // Array vacío para guardar las canciones
  constructor(private cancionesService: CancionesService, 
    private router:Router) {     //  Inyección de dependencias del servicio canciones

  } 

  async ngOnInit(): Promise<void> {            // Inicializar datos
    localStorage.clear();                     // Borrar eel localStorage
    this.canciones = await this.obtenerCanciones();
  }

  public async obtenerCanciones(): Promise<any>{
    try {
      const response = await this.cancionesService.obtenerCanciones();
      return response.datos;
    }catch(error) {
      console.log(error);
      this.router.navigate(['/error']);     // Enrutamiento desde el controlador con router de angular
    }
  }

  public eliminarCancion(id:number){
    this.cancionesService.eliminarCancion(id).then(async response=>{
      if(response.message === 'deleted'){
        this.canciones = await this.obtenerCanciones();   // Para actualizar cuando se borra
        alert("Canción eliminada correctamente!");
      }
    }).catch(error =>{
      console.log(error);
    })
  }

  public irActualizarCancion(cancion: CancionModel){
    localStorage.setItem('cancionActualizar', JSON.stringify(cancion));
    this.router.navigate(['/formulario-cancion']);
  }

}
