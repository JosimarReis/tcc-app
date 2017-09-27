import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ListaAnunciosPage } from '../lista-anuncios/lista-anuncios'
import { Cidade } from "../../models/cidade";
import { Anuncio } from "../../models/anuncio";
import { CidadesService } from './../../providers/cidades.service';
import { AnunciosService } from './../../providers/anuncios.service';
import { AuthServiceProvider} from './../../providers/auth-service/auth-service'
import { PesquisaHistorico } from '../../models/pesquisaHistorico';

@IonicPage()
@Component({
  selector: 'page-pesquisa',
  templateUrl: 'pesquisa.html',
})

export class Pesquisa {

  
  title: string = "Pesquisar";
  loading:any;
  isLoggedIn:boolean= false;
  pesquisa:any={termo:'',cidade:'todos',uf:'todos',usuario:this.auth.getUserInfo()};

  cidades: Cidade[];
  anuncios: Anuncio[];
  pesquisaHistorico:PesquisaHistorico[];
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cidadesService: CidadesService,
    private anunciosService: AnunciosService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private auth:AuthServiceProvider
     ) {
      this.getHistoricoPesquisa();
   }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });

  }
 getHistoricoPesquisa(){
   this.anunciosService.loadHistoricoPesquisas({usuario:window.localStorage.getItem('usuario')})
   .subscribe(historicos =>{
     this.pesquisaHistorico=historicos;
   });
 }

 preencherFormulario(pesquisa:any){
  this.pesquisa.termo = pesquisa.termo;
  this.pesquisa.cidade = pesquisa.localizacao.cidade;
  this.pesquisa.uf = pesquisa.localizacao.uf;
    
  }

  //pesquisa por termo digitado e localizacao
  pesquisar(){
    if(!this.pesquisa.usuario){
      this.pesquisa.usuario = window.localStorage.getItem('usuario');
    }
    this.anuncios= [];
    this.anunciosService.loadAnuncio(this.pesquisa).subscribe(
      anuncios =>{
        this.anuncios=anuncios;
        window.localStorage.setItem('anuncios',JSON.stringify(anuncios));
        this.getHistoricoPesquisa();
        this.navCtrl.push(ListaAnunciosPage);
      }
    );
  }
  verDetalhes(termo){
    this.anuncios= [];
    this.anunciosService.loadAnuncio(this.pesquisa).subscribe(
      anuncios =>{
        this.anuncios=anuncios;
      }
    );
  }

 wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}

  //filtra cidades por estado e popula o selectbox com cidades para cada estado.
   carregarCidades(uf:string){
     this.cidadesService.loadCidades(uf).subscribe(cidades=>{
       this.cidades=cidades;
     })
   }
   //aviso para selecionar um estado
    selecioneUfAlert() {
    let alert = this.alertCtrl.create({
      title: 'Selecione um estado!',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }

}
