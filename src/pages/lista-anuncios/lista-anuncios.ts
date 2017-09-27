import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Anuncio } from '../../models/anuncio'
import { Pesquisa } from './../pesquisa/pesquisa'

import { VerAnuncioPage } from './../ver-anuncio/ver-anuncio';
/**
 * Generated class for the ListaAnunciosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista-anuncios',
  templateUrl: 'lista-anuncios.html',
})
export class ListaAnunciosPage {
  anuncios:Anuncio[];
   an:any = JSON.parse(window.localStorage.getItem('anuncios'));
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    if(!this.an){
      this.navCtrl.setRoot(Pesquisa);
    }
  }

  visualizarAnuncio(anuncio:Anuncio){
    window.localStorage.setItem('veranuncio',JSON.stringify(anuncio));
    this.navCtrl.push(VerAnuncioPage);
  }
}
