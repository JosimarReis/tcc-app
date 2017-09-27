import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UsuarioPage } from './usuario';

@NgModule({
  declarations: [
    UsuarioPage,
  ],
  imports: [
    IonicModule.forRoot(UsuarioPage),
  ],
  exports: [
    UsuarioPage
  ]
})
export class UsuarioPageModule {}
