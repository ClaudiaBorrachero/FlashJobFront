import { RatingModule } from 'primeng/rating';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { Anuncios_ofertadosComponent } from './anuncios_ofertados/anuncios_ofertados.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Perfil_publicoComponent } from './perfil_publico.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RatingModule
  ],
  declarations: [
    Perfil_publicoComponent,
    Anuncios_ofertadosComponent]
})
export class Perfil_publicoModule { }
