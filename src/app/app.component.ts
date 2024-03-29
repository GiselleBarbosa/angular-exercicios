import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo: string = 'utilizando input';
  // Task 1
  textSent = 'Meu texto enviado';

  // Task 2
  btnText = 'Adicionar';
  btnIcon = 'bi bi-plus';

  games: string[] = [];

  onAlertReceived() {
    alert("clicou no botão");
  }

  onGameReceived(newGame: string) {
    this.games.push(newGame);
  }

  onRemoveGame(newGame: string) {
    this.games.shift();
  }
}


