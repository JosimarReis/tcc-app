import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Anuncio } from './../models/anuncio';
import { Config } from './../models/config';
import { PesquisaHistorico } from './../models/pesquisaHistorico';

/*
  Generated class for the AnunciosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AnunciosService {

  config = new Config();
  anuncios: Anuncio[];
  pesquisas: PesquisaHistorico[];
  
  constructor(public http: Http) {
  }
  
  loadAnuncio(consulta): Observable<Anuncio[]>{

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(`${this.config.urlServer()}/api/anuncios/`, JSON.stringify(consulta),
     {headers: headers})
    .map(res => <Anuncio[]>(res.json()));

  }
  loadHistoricoPesquisas(usuario): Observable<PesquisaHistorico []>{
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
        return this.http.post(`${this.config.urlServer()}/api/historicopesquisa`, JSON.stringify(usuario),
         {headers: headers})
        .map(res => <PesquisaHistorico[]>(res.json()));
    
      }

      geo(){
        
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
            return this.http.post(`${this.config.urlServer()}/api/geo`, JSON.stringify({}),
             {headers: headers})
            .map(res => (res.json()));
        
          }
}
