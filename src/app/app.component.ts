import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';

import { AuthServiceProvider } from './../providers/auth-service/auth-service';

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthServiceProvider) {
    var validaToken = this.auth.validarToken();
    if(validaToken){
      this.rootPage = TabsPage;
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
