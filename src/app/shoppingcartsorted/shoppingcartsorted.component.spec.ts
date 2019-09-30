import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSortedComponent } from './shoppingcart.component';

describe('ShoppingCartSortedComponent', () => {
  let component: ShoppingCartSortedComponent;
  let fixture: ComponentFixture<ShoppingCartSortedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartSortedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
