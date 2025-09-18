import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRoutingComponent } from './http-routing.component';

describe('HttpRoutingComponent', () => {
  let component: HttpRoutingComponent;
  let fixture: ComponentFixture<HttpRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
