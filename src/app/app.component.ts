import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  titulo:string = 'Componente Pai'

  textSent = 'Meu texto enviado'
}
