import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCalificacionComponent } from './delete-calificacion.component';

describe('DeleteCalificacionComponent', () => {
  let component: DeleteCalificacionComponent;
  let fixture: ComponentFixture<DeleteCalificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCalificacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
