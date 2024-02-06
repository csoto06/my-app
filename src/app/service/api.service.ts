import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private urlApi = 'https://rickandmortyapi.com/api/character/183';
  // private urlApi = 'http://localhost:5023/api/stock';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    const result = this.http.get<any>('http://localhost:5023/api/stock') 
    return result;
  }

  // public obtenerDatos(): void {
  //   this.getData().subscribe(
  //     (data) => {
  //       if (data) {
  //         console.log('Datos recibidos:', data);
  //         // Puedes realizar cualquier operación adicional con los datos recibidos
  //       } else {
  //         console.log('La solicitud no devolvió datos.');
  //       }
  //     },
  //     (error) => {
  //       console.error('Error en la solicitud:', error);
  //     }
  //   );
  // }
}
