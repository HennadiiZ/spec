import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutingComponent } from './routing.component';

class RouterStub {
  navigate(path: string[]) {}
}

class ActivatedRouteStub {
  params: Observable<Params>
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ RoutingComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RoutingComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
  });

  it('should be Defined', () => {
    expect(component).toBeDefined();
  });

  it('should go back', () => {
    // expect(component).toBeDefined();
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.goBack();
    expect(spy).toHaveBeenCalledWith(['/posts']);
  });
});
