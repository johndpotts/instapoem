import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaikuPage } from './haiku.page';

describe('HaikuPage', () => {
  let component: HaikuPage;
  let fixture: ComponentFixture<HaikuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaikuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaikuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
