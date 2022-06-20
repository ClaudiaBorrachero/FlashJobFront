import { Byte } from '@angular/compiler/src/util';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from './../../interfaces/interface';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() busqueda: string='';
  constructor(private anuncioService:AnuncioService,private router:Router, private loginService:LoginService) { }

  public isLogged : boolean = false;
  userRegistered : Usuario ={
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: ''
  }

  ngOnInit():void {
    this.onCheckUser();
  }

  onCheckUser():void{
    this.loginService.validarToken().subscribe({

      next: resp => {
        this.userRegistered = resp;
      }, error(error){

      }

    })
  }

  jwt:JwtHelperService = new JwtHelperService();
  /**
   * Método para obtener role
   */
   findRolUser(): string {

    let token = localStorage.getItem("jwt")!;

    return this.jwt.decodeToken(token).role!;
  }

  /**
   * Método que llama a getImage del servicio y transforma un array de bytes en una url correspondiente a una imagen
   * @param file
   * @returns
   */
   getImage(file: Byte[]) {
    return this.anuncioService.getImage(file);
  }

}
