import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherObservableComponent } from './another-observable.component';

describe('AnotherObservableComponent', () => {
  let component: AnotherObservableComponent;
  let fixture: ComponentFixture<AnotherObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
