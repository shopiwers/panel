import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  public url = GLOBAL.url;
  public urlSkania =
    'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private _http: HttpClient) {}

  // Login
  login_admin(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login_admin', data, {
      headers: headers,
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  // Autenticacion Guards
  public isAuthenticate(): boolean {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
      // console.log('ingreso token ');
    }

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);

      //console.log(decodedToken);
      if (helper.isTokenExpired(token)) {
        localStorage.clear();
        return false;
      }

      if (!decodedToken) {
        console.log('No es valido');
        localStorage.removeItem('token');
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }

  // Registro
  registro_colaborador_admin(data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.post(this.url + 'registro_colaborador_admin', data, {
      headers: headers,
    });
  }

  //listar Get
  lista_colaboradores_admin(token: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + 'lista_colaboradores_admin', {
      headers: headers,
    });
  }

  obtener_datos_colaborador_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.get(this.url + 'obtener_datos_colaborador_admin/' + id, {
      headers: headers,
    });
  }

  editar_colaborador_admin(id: any, data: any, token: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.put(this.url + 'editar_colaborador_admin/' + id, data, {
      headers: headers,
    });
  }

  // Delete
  eliminar_colaborador_admin(id: any, token: any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
    });
    return this._http.delete(this.url + 'eliminar_colaborador_admin/' + id, {
      headers: headers,
    });
  }

  // Oskania
  obtener_oskania(): Observable<any> {
    return this._http.get(this.urlSkania);
  }
}
