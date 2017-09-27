import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, App } from "ionic-angular";

import { Usuario } from '../../models/usuario';
import { Config } from './../../models/config';


@Injectable()
export class AuthServiceProvider {
  
  private currentUser: Usuario;
  private config = new Config();

  private isLoggedin:boolean;
  private nav: NavController;

  constructor(private app: App, private http:Http){
    this.nav = app.getActiveNav();
    this.isLoggedin=false;
  }

  public login(usuario){
    let headers = new Headers();
    let creds = "email="+usuario.email+"&senha="+usuario.senha;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post(this.config.urlServer()+'/authenticate',creds,{headers:headers}).subscribe(data=> {
        if(data.json().success){
          window.localStorage.setItem('token', data.json().token);
          this.currentUser = data.json().usuario;
          this.isLoggedin = true;
          console.log(this.currentUser);
          resolve(this.isLoggedin);
        }
      })
    })

  }
  public validarToken(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var token = window.localStorage.getItem('token');
    if(!token)
    return false;
    return new Promise(resolve => {
      this.http.post(this.config.urlServer()+'/validartoken',JSON.stringify({token:token}),
      {headers:headers}).subscribe(data=> {
        if(data.json().success){
          this.currentUser=data.json().usuario;
          this.currentUser.senha='';
          window.localStorage.setItem('usuario',JSON.stringify(this.currentUser));
          resolve(true);       
        }else{
          resolve(false)
        }
      })
    })

  }
  public getUserInfo(): Usuario{
    return this.currentUser;
  }

  public logout(){
      this.currentUser =null;
    window.localStorage.clear();  
    return true;
  }
  public register(usuario){
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      
      this.http.post(this.config.urlServer()+'/api/usuario/registro',usuario,{headers:headers})
      .subscribe(data => {
        if(data.json().success){
          resolve(true);
        }
        else
          resolve(false)
      });

    });
  }

}
