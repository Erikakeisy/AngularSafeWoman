import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(http: HttpClient) { }

  // findAll(){
  //   return this.http.get('$')
  // }

  // create(report: ReportsService): Observable<ReportsService>{
  // return this.http.post<ReportsService[]>(`${API_CONFIG.baseUrl}/reports`, report);
  // }
}
