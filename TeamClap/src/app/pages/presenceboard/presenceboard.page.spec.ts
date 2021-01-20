import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresenceboardPage } from './presenceboard.page';

describe('PresenceboardPage', () => {
  let component: PresenceboardPage;
  let fixture: ComponentFixture<PresenceboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresenceboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
