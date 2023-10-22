import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RolechooserPage } from './rolechooser.page';

describe('RolechooserPage', () => {
  let component: RolechooserPage;
  let fixture: ComponentFixture<RolechooserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolechooserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RolechooserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
