import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18038Page } from './s18038.page';

describe('S18038Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18038Page;
  let fixture: ComponentFixture<S18038Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18038Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18038Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
