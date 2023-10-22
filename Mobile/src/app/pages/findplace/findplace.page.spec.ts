import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindplacePage } from './findplace.page';

describe('FindplacePage', () => {
  let component: FindplacePage;
  let fixture: ComponentFixture<FindplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
