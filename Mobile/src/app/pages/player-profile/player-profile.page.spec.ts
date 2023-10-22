import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerProfilePage } from './player-profile.page';

describe('PlayerProfilePage', () => {
  let component: PlayerProfilePage;
  let fixture: ComponentFixture<PlayerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
