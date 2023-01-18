import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrls } from '../core/api-url';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = apiUrls.getUser;
  }
  getusuario() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.url + 'save', { headers: headers });
  }
}
