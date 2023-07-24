import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  id?: number;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://farmaciasisseg.com.mx/assets/img/boton_todo_lo_que_necesitas.jpg";
  public Titulo:string = "pagina de Farmacia";
  constructor(){ }
 

ngOnInit(): void {
}

}
