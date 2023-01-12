import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.html',
  styleUrls: ['./child-component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input() textReceived: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    let showText = this.textReceived;
    return console.log(showText);

  }

}
