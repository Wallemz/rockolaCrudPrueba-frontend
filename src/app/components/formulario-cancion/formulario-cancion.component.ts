import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CancionModel } from 'src/app/models/cancion';
import { CancionesService } from 'src/app/services/canciones/canciones.service';

@Component({
  selector: 'app-formulario-cancion',
  templateUrl: './formulario-cancion.component.html',
  styleUrls: ['./formulario-cancion.component.scss']
})
export class FormularioCancionComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});  // Conjunto de Inputs de Angular
  public cancionActualizar: CancionModel | null = null; // Con el | le puedo decir que puede ser de varios tipos
  constructor(private formBuilder: FormBuilder, 
    private cancionesService: CancionesService, 
    private router: Router) { } // Inyecto formbuiulder de angular

  ngOnInit(): void {
    const actualizar = localStorage.getItem('cancionActualizar');
    this.cancionActualizar = actualizar ? JSON.parse(actualizar) : null;
    console.log(this.cancionActualizar);
    this.buildForm();
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({       // Creo el grupo de inputs
      nombre: [this.cancionActualizar?.nombre, [Validators.required]],   // valor por defecto, validaciones del input
      genero: [this.cancionActualizar?.genero, Validators.required],
      artista: [this.cancionActualizar?.artista, Validators.required]
    })
  }

  public agregarCancion(){
    console.log(this.formGroup.value);      // Imprime los datos ingresados en los inputs
    this.cancionesService.agregarCancion(this.formGroup.value).then(response => {
      alert('Canción creada correctamente!')
      this.router.navigate(['/canciones']);
    }).catch(error => {
      this.router.navigate(['/error']);
    }
    )
  }

  public actualizarCancion(){
    console.log(this.formGroup.value);    // Guarda el valor nuevo del form
    const cancion: CancionModel = {
      idcanciones: this.cancionActualizar?.idcanciones,
      ...this.formGroup.value
    }
    this.cancionesService.actualizarCancion(cancion).then(response =>{
//      if (response.message === 'updated'){    // Validar la respuesta del back
//        alert('Canción actualizada correctamente');
//        this.router.navigate(['/canciones']);
//      }
      alert('Canción actualizada correctamente');
      localStorage.clear();                     // Borrar eel localStorage
      this.router.navigate(['/canciones']);
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }

}
