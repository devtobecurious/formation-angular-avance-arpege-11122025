import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSyst } from './design-syst';

describe('DesignSyst', () => {
  let component: DesignSyst;
  let fixture: ComponentFixture<DesignSyst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignSyst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSyst);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
