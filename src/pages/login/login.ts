import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage} from './../tabs/tabs';
import { Usuario } from './../../models/usuario'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading:Loading;
  registerCredentials: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider, 
    private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
      
      this.registerCredentials =new Usuario('','',false,false);



  }
  public createAccount(){
    this.navCtrl.setRoot('RegisterPage');
  }

  public login(){
    this.showLoading();
    this.auth.login(this.registerCredentials).then( data => {
      console.log("login => "+data);
      if(data){
        this.navCtrl.setRoot(TabsPage);
      }else{
        
        this.showError('Acesso Negado.')
      }
    }, error => {
      this.showError(error)
      
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde por favor...',
      dismissOnPageChange: true,
      spinner: 'dots'
    });

    this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
    }, 5000);
  }

  showError(text){
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Falha',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(alert);
  }
}
