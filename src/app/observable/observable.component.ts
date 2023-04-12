import { Component, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit {
  public title = 'observable';

  public data: any = null;

  constructor(private observableService: ObservableService) {
    this.observableService.getObservable().subscribe((newObject) => {
      this.data = newObject;
    });
  }

  ngOnInit(): void {}

  changeObjectObservable() {
    const valueObservable = 'valor recebido';

    this.observableService.setObservable(valueObservable);
  }
}
