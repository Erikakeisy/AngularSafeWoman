import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(http: HttpClient) { }

  // findAll(): Observable<Reports[]>{
  //   return this.http.get<Reports[]>(`${API_CONFIG.baseUrl}/reports`);
  // }
}
