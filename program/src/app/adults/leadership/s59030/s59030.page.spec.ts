import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59030Page } from './s59030.page';

describe('S59030Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59030Page;
  let fixture: ComponentFixture<S59030Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59030Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59030Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
