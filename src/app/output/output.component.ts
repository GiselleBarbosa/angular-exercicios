import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  title: string = 'Praticando Output';

  subtitle: string = 'Cadastro de Games';
  @Output() clickAlertEvent = new EventEmitter<any>();
  @Output() createEvent = new EventEmitter<string>();
  @Output() removeGameEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickAlert($event: any) {
    this.clickAlertEvent.emit($event);
  }

  createGame(newGame: string) {
    this.createEvent.emit(newGame);
  }

  removeGame(newGame: string) {
    this.removeGameEvent.emit(newGame);
  }

}
