import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColaboradorComponent } from './create-colaborador.component';

describe('CreateColaboradorComponent', () => {
  let component: CreateColaboradorComponent;
  let fixture: ComponentFixture<CreateColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateColaboradorComponent]
    });
    fixture = TestBed.createComponent(CreateColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
