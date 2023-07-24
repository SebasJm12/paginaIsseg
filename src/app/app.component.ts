import { Component, OnInit } from '@angular/core';

interface tarjeta{
  titulo:string;
  subtitulo:string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PagPractica';
  public ArregloTarjetas: tarjeta[]=[];

  ngOnInit() : void{

    this.ArregloTarjetas = [
      {titulo:"NombreImagen 1", subtitulo:"subtitulo Imagen 1"},
      {titulo:"NombreImagen 2", subtitulo:"subtitulo Imagen 2"},
      {titulo:"NombreImagen 3", subtitulo:"subtitulo Imagen 3"},
    ]
  }
}
