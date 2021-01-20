import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewplayerPage } from './newplayer.page';

describe('NewplayerPage', () => {
  let component: NewplayerPage;
  let fixture: ComponentFixture<NewplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewplayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
