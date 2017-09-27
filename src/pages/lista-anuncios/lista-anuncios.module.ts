import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListaAnunciosPage } from './lista-anuncios';

@NgModule({
  declarations: [
    ListaAnunciosPage,
  ],
  imports: [
    IonicModule.forRoot(ListaAnunciosPage),
  ],
  exports: [
    ListaAnunciosPage
  ]
})
export class ListaAnunciosPageModule {}
