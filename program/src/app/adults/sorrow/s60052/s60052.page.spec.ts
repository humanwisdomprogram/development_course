import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60052Page } from './s60052.page';

describe('S60052Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S60052Page;
  let fixture: ComponentFixture<S60052Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60052Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60052Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
