import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  title: string = 'UTILIZANDO INPUT + CONDICIONAL'
  @Input() btnText: string = '';
  @Input() btnIcon?: string = '';

  checkIcon: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (!!this.btnIcon) {
      this.checkIcon = true;
    }
  }


}



