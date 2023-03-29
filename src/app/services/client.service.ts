import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  _url = "http://localhost:8082/app/api/";
  public response_data : any;
  constructor(private http: HttpClient) { 
  }

  getClientByDni(dni:string){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')
    return this.http.get(this._url+"?dni="+dni, {
      headers: header
    });
  };
}
