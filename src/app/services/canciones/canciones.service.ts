import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
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
    // Enviar headers al back
    const headers: HttpHeaders = new HttpHeaders({
      isadmin:'true'
    })

    // Enviar Params al back
    const params = {
      idcancion: 1,
      idplaylisst: 2
    }
    return this.http.get(url, {headers, params}).toPromise();
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
