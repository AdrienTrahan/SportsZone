import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrSeparatorComponent } from './or-separator.component';

describe('OrSeparatorComponent', () => {
  let component: OrSeparatorComponent;
  let fixture: ComponentFixture<OrSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrSeparatorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
