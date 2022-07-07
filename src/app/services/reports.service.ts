import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { reports } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<reports[]>{
    return this.http.get<reports[]>(`${API_CONFIG.baseUrl}/safewoman/report/findAll`)
  }

  create(reports: reports): Observable<reports>{
    return this.http.post<reports>(`${API_CONFIG.baseUrl}/safewoman/report/create`, reports);
  }
}
