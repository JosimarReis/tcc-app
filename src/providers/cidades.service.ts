import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Cidade } from './../models/cidade';
import { Config } from './../models/config';
@Injectable()
export class CidadesService {

  config = new Config();
  
  constructor(public http: Http) {
  
  }

  loadCidades(selectEvent): Observable<Cidade[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let uf = selectEvent;
    
  
    return this.http.post(`${this.config.urlServer()}/api/cidades/`, JSON.stringify({sigla:uf}), {headers: headers})
    .map(res => <Cidade[]>(res.json()));


  }

}
