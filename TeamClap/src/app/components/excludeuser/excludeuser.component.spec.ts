import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcludeuserComponent } from './excludeuser.component';

describe('ExcludeuserComponent', () => {
  let component: ExcludeuserComponent;
  let fixture: ComponentFixture<ExcludeuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcludeuserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcludeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
