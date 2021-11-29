import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
  public subtituloTabla = 'Esto es un sub';      // Dato que voy a passar al hijo
  public showAlert = false;

  constructor(private activatedRoute: ActivatedRoute) { }       // Inyecto el ActivatedRoute para passsar info entre compónentess

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
  }

  public mostrarAlerta(evento:any){
    this.showAlert = evento.mostrarAlert;   // Cambia a true y muestra la alerta
    setTimeout(() =>{                       // Despues de 3s quita la alerta
      this.showAlert = false;
    }, 3000);
    console.log(evento);
  }
}
