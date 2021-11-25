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
    const url = `${environment.apiUrl}/agregarCancion`;
    return this.http.post(url,cancion).toPromise();
  }
  public actualizarCancion(cancion: any){
    const url = `${environment.apiUrl}/actualizarCancion/${cancion.idcanciones}`;
    return this.http.put(`${url}`, cancion).toPromise();
  }
  public eliminarCancion(id: number): Promise<any>{
    const url = `${environment.apiUrl}/eliminarCancion`;
    return this.http.delete(`${url}/${id}`).toPromise();
  }
}
