import { NgModule } from '@angular/core';

import { Anuncios_ofertadosComponent } from './anuncios_ofertados/anuncios_ofertados.component';
import { AuthGuard } from './../services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    { path: 'anuncios_ofertados',canActivate:[AuthGuard], component: Anuncios_ofertadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Perfil_publicoComponent { }