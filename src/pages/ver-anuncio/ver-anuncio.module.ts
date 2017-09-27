import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { VerAnuncioPage } from './ver-anuncio';

@NgModule({
  declarations: [
    VerAnuncioPage,
  ],
  imports: [
    IonicModule.forRoot(VerAnuncioPage),
  ],
  exports: [
    VerAnuncioPage
  ]
})
export class VerAnuncioPageModule {}
