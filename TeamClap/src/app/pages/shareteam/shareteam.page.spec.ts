import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareteamPage } from './shareteam.page';

describe('ShareteamPage', () => {
  let component: ShareteamPage;
  let fixture: ComponentFixture<ShareteamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareteamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
