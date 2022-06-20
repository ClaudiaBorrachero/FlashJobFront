import { LoginService } from './../services/login.service';
import { Usuario } from './../interfaces/interface';
import { UserService } from './../services/user.service';
import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil_publico',
  templateUrl: './perfil_publico.component.html',
  styleUrls: ['./perfil_publico.component.css']
})
export class Perfil_publicoComponent implements OnInit {

  constructor(private usuarioService: UserService, private loginService: LoginService) { }

  usuarioRegistrado: Usuario = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    // fechaNacimiento: '',
    location: '',
    file:undefined
  };
  // val3: number = 5;

  ngOnInit() {    
    window.scrollTo(0, 0);
    this.conseguirUsuarioRegistrado();
  }

 /**
   * Método que llama a getImage del servicio y transforma un array de bytes en una url correspondiente a una imagen
   * @param file
   * @returns
   */
  getImage(file: Byte[]) {
    return this.usuarioService.getImage(file);
  }

  conseguirUsuarioRegistrado() {
    this.loginService.validarToken().subscribe({
      next: (resp) => {
        this.usuarioRegistrado = resp;
      },
      error: (error) => {},
    });
  }

}
