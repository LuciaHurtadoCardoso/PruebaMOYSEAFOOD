import { Injectable } from '@angular/core';
import {Usuario} from '../usuario';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetalleUserService {

  modal:boolean = false;
  private urlEndPoint:string = 'https://jsonplaceholder.typicode.com/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  abrirModal(){
    this.modal = true;
  }

  cerrarModal(){
    this.modal = false;
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put(`${this.urlEndPoint}users/${usuario.id}`, usuario, { headers: this.httpHeaders }).pipe(
      map((response: any) => response.usuario as Usuario),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        return throwError(e);
      })
    );
  }
}
