import { Component } from '@angular/core';

import { ListaAnunciosPage } from '../lista-anuncios/lista-anuncios';
import { ContactPage } from '../contact/contact';
import { Pesquisa } from './../pesquisa/pesquisa';
import { NavController } from "ionic-angular";
import { Usuario } from "../../models/usuario";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage} from './../login/login';
import { UsuarioPage } from './../usuario/usuario'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  usuario: Usuario;
  

  tab1Root = Pesquisa;
  tab2Root = ListaAnunciosPage;
  tab3Root = ContactPage;
  tab4Root = UsuarioPage;

   constructor(private nav: NavController, private auth:AuthServiceProvider) {
    this.usuario = this.auth.getUserInfo();
  }
 
  public logout(){
    if(this.auth.logout())
    this.nav.setRoot(LoginPage);
  }
  

}
