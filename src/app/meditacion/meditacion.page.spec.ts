import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeditacionPage } from './meditacion.page';

describe('MeditacionPage', () => {
  let component: MeditacionPage;
  let fixture: ComponentFixture<MeditacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
