import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  
  titulo: string = 'Componente Filho';
  @Input() textReceived: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    let showText = this.textReceived;
    return console.log(showText);

  }

}
