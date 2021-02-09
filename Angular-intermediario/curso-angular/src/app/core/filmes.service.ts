import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filme } from '../shared/models/filme';
import { Observable } from 'rxjs';
import { ConfigParams } from '../shared/models/config-params';
import { ConfigParamsService } from './config-params.service';


const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme);
  }
  listar(config: ConfigParams): Observable<Filme[]> {
    const configParams = this.configService.configurarParametros(config);
    
    return this.http.get<Filme[]>(url, {params: configParams});
  }
}
