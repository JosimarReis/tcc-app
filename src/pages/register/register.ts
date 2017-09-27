import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Usuario } from '../../models/usuario';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  usuario:Usuario;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider,
    private alertCtrl: AlertController  ) {
  }

  public register() {
    this.auth.register(this.usuario).then(data => {
      if (data) {
        this.createSuccess = true;
        this.showPopup("Sucesso", "Cadastro efetuado com sucesso!");
        this.navCtrl.setRoot(LoginPage);
      } else {
        this.showPopup("Erro", "Erro ao lhe cadastrar. Por favor tente novamente!");
      }
    },
      error => {
        this.showPopup("Erro", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
