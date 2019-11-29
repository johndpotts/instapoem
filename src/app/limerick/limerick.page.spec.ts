import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LimerickPage } from './limerick.page';

describe('LimerickPage', () => {
  let component: LimerickPage;
  let fixture: ComponentFixture<LimerickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimerickPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LimerickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
