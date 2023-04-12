import { Component } from '@angular/core';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-another-observable',
  templateUrl: './another-observable.component.html',
  styleUrls: ['./another-observable.component.scss'],
})
export class AnotherObservableComponent {
  public data = null;

  constructor(private observableService: ObservableService) {
    
    this.observableService.getObservable().subscribe((newObject) => {
      this.data = newObject;
    });
  }
}
