import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from 'src/model/complaint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  _url :string = "http://localhost:8082/app/api/complaint"

  constructor(private http:HttpClient) {
  }

    getAll(): Observable<any>{
      return this.http.get(this._url)
    }

    save(complaint: Complaint): Observable<any>{
      return this.http.post(this._url, complaint)
    }
}
