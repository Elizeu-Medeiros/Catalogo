import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListUsuaariosPage } from './list-usuaarios.page';

describe('ListUsuaariosPage', () => {
  let component: ListUsuaariosPage;
  let fixture: ComponentFixture<ListUsuaariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsuaariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListUsuaariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
