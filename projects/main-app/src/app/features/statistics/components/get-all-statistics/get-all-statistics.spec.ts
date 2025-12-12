import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStatistics } from './get-all-statistics';

describe('GetAllStatistics', () => {
  let component: GetAllStatistics;
  let fixture: ComponentFixture<GetAllStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllStatistics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllStatistics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
