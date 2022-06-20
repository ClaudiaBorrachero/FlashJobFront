import { Byte } from '@angular/compiler/src/util';
import { AnuncioService } from './../../services/anuncio.service';
import { Anuncio } from './../../interfaces/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncios_ofertados',
  templateUrl: './anuncios_ofertados.component.html',
  styleUrls: ['./anuncios_ofertados.component.css']
})
export class Anuncios_ofertadosComponent implements OnInit {

  constructor(private anuncioService : AnuncioService) { }

  listaMisAnuncios:Anuncio[]=[];
  dialogoVisible:boolean = false;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.misAnuncios();
  }

 /**
   * Método que llama a getImage del servicio y transforma un array de bytes en una url correspondiente a una imagen
   * @param file
   * @returns
   */
  getImage(file: Byte[]) {
    return this.anuncioService.getImage(file);
  }

   /**
   * Este método resuelve la peticion de anuncioService, la cual dará una lista de anuncios que cargamos en la variable listaMisAnuncios
   */
    misAnuncios(){
      this.dialogoVisible = false;
      this.anuncioService.misAnuncios().subscribe( resp => {
        this.listaMisAnuncios=resp;
  
  
      })
    }
}
