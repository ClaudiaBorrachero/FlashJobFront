import { Perfil_publicoModule } from './perfil_publico/perfil_publico.module';
import { AnuncioModule } from './anuncio/anuncio.module';
import { AuthGuard } from './services/auth-guard.service';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ProfileModule,
    RouterModule,
    AuthModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AnuncioModule,
    Perfil_publicoModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
