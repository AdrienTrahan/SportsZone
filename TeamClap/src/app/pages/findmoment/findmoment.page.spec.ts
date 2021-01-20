import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindmomentPage } from './findmoment.page';

describe('FindmomentPage', () => {
  let component: FindmomentPage;
  let fixture: ComponentFixture<FindmomentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindmomentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindmomentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
