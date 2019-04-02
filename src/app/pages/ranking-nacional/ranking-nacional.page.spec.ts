import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingNacionalPage } from './ranking-nacional.page';

describe('RankingNacionalPage', () => {
  let component: RankingNacionalPage;
  let fixture: ComponentFixture<RankingNacionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingNacionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingNacionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
