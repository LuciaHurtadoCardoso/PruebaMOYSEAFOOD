import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private urlEndPoint:string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.urlEndPoint + 'users');
  }
}
