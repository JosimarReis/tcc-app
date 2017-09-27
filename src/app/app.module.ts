import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from "@angular/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { ListaAnunciosPage } from '../pages/lista-anuncios/lista-anuncios';
import { ContactPage } from '../pages/contact/contact';
import { AnuncioPage } from '../pages/anuncio/anuncio';
import { TabsPage } from '../pages/tabs/tabs';
import { Pesquisa } from './../pages/pesquisa/pesquisa';
import { LoginPage } from './../pages/login/login';
import { RegisterPageModule } from './../pages/register/register.module'
import { VerAnuncioPage } from './../pages/ver-anuncio/ver-anuncio'
import { AnunciosService } from './../providers/anuncios.service';
import { CidadesService } from './../providers/cidades.service';
import { UsuarioPage } from "../pages/usuario/usuario";

@NgModule({
  declarations: [
    MyApp,
    ListaAnunciosPage,
    ContactPage,
    TabsPage,
    Pesquisa,
    AnuncioPage,
    LoginPage,
    UsuarioPage,
    VerAnuncioPage
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegisterPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaAnunciosPage,
    ContactPage,
    TabsPage,
    Pesquisa,
    AnuncioPage,
    LoginPage,
    UsuarioPage,
    VerAnuncioPage
  ],
  providers: [
    AnunciosService,
    CidadesService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthServiceProvider
    
     
  ]
})
export class AppModule {}
