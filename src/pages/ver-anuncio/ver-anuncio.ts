import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Anuncio } from './../../models/anuncio';
import { ListaAnunciosPage } from './../lista-anuncios/lista-anuncios'
/**
 * Generated class for the VerAnuncioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ver-anuncio',
  templateUrl: 'ver-anuncio.html',
})
export class VerAnuncioPage {
  anuncio:Anuncio;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setAnuncio();
  }

  public setAnuncio(){
    this.anuncio= JSON.parse(window.localStorage.getItem('veranuncio'));
  }

    ionViewDidEnter() {
      if(!this.anuncio){
        this.navCtrl.setRoot(ListaAnunciosPage);
      }
    }
  
}
