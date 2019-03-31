import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaDetalhePage } from './musica-detalhe.page';

describe('MusicaDetalhePage', () => {
  let component: MusicaDetalhePage;
  let fixture: ComponentFixture<MusicaDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaDetalhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
