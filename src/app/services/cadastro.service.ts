import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { API_CONFIG } from "../config/api.config";
import { Cadastro } from "../models/cadastro";

@Injectable({
    providedIn: 'root'
  })
  export class CadastroService {

    jwtService: JwtHelperService =  new JwtHelperService();

  constructor(private http: HttpClient) { }

  create(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(`${API_CONFIG.baseUrl}/safewoman/user/create`, cadastro);
  }

  findAll(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(`${API_CONFIG.baseUrl}/safewoman/report/findAll`)
  }
  }