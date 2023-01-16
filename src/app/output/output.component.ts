import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  title: string = 'Praticando Output';
  
  @Output() clickAlertEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickAlert($event: any) {
    this.clickAlertEvent.emit($event);
  }

}