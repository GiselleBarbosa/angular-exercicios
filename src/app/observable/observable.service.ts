import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  observable$: Subject<any> = new Subject();

  constructor() {}

  // metodo que envia a notificação para todos os observadores
  setObservable(newValue: any) {
    this.observable$.next(newValue);
  }

  // metodo que cria um observavel
  getObservable(): Observable<any> {
    return this.observable$.asObservable();
  }
}
