import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Usuario} from './../../models/usuario';
import { LoginPage } from "../login/login";
/**
 * Generated class for the UsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  usuario:Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider,  private alertCtrl: AlertController) {
    this.usuario=this.auth.getUserInfo();
  }

  public logout(){
    this.auth.logout()
    this.navCtrl.setRoot(LoginPage);
  }


}
