import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { RolepopoverComponent } from './rolepopover.component';

describe('RolepopoverComponent', () => {
  let component: RolepopoverComponent;
  let fixture: ComponentFixture<RolepopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolepopoverComponent ],
      imports: [IonicModule.forRoot(),
        TranslateModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RolepopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
