import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResertPage } from './resert.page';

describe('ResertPage', () => {
  let component: ResertPage;
  let fixture: ComponentFixture<ResertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
