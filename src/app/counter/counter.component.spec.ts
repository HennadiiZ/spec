import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { By } from "selenium-webdriver";
import { By } from "@angular/platform-browser";
import {CounterComponent} from "./counter.component";

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    // component = new CounterComponent()

    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined()
  })

  it('should render counter property', () => {
   component.counter = 42;
   fixture.detectChanges();
   let de = fixture.debugElement.query(By.css('.counter'));
   let el: HTMLElement = de.nativeElement;

   expect(el.textContent).toContain('');
  })

  it('should add green class if counter is even', () => {
    component.counter = 6;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = de.nativeElement;

    expect(el.classList.contains('green')).toBeTruthy();
  })

  it('should add green class if counter is even', () => {
    // component.counter = 6;
    // fixture.detectChanges();

    let btn = fixture.debugElement.query(By.css('#increment'));
    btn.triggerEventHandler('click', '');
    // let el: HTMLElement = de.nativeElement;

    expect(component.counter).toBe(1);
  })

})
