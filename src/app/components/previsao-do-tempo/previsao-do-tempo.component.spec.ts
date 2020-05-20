import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoDoTempoComponent } from './previsao-do-tempo.component';

describe('PrevisaoDoTempoComponent', () => {
  let component: PrevisaoDoTempoComponent;
  let fixture: ComponentFixture<PrevisaoDoTempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisaoDoTempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevisaoDoTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
