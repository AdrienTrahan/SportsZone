import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyeventPage } from './modifyevent.page';

describe('CreateeventPage', () => {
  let component: ModifyeventPage;
  let fixture: ComponentFixture<ModifyeventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyeventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyeventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
