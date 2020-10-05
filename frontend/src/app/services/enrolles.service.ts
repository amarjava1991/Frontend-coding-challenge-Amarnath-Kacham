import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Enrolles } from '../interface/enrolles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollesService {
 private baseurl =environment.apiUrl;
 private headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }
  GetEnrolles(): Observable<Enrolles[]> {
    return this.http.get<Enrolles[]>(this.baseurl + '/enrollees')
  }
  updateEnrolles(data): Observable<Enrolles> {
    return this.http.put<Enrolles>(this.baseurl + '/enrollees/'+data.id,data,{'headers':this.headers})
  }
}
