import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({                     // Inyección de dependencias, para evitar creart objetos en cada componente
  providedIn: 'root'
})
export class CancionesService {
  
  constructor(private http: HttpClient) { // Inyección de dependencias, de la libreria de angular inyecto el http client
    
  }


  // METODOS
  public obtenerCanciones(): Promise<any>{
    const url = `${environment.apiUrl}/obtenerCanciones`;
    return this.http.get(url).toPromise();
  }
  public obtenerCancion(id: number){
    
  }
  public agregarCancion(cancion: any){
    
  }
  public actualizarCancion(cancion: any, id: number){
    
  }
  public eliminarCancion(id: number){
    
  }
}
