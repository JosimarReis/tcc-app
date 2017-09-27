import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicModule.forRoot(RegisterPage),
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
