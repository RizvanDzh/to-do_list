import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoitemComponent } from './todoitem.component';

describe('TodoitemComponent', () => {
  let component: TodoitemComponent;
  let fixture: ComponentFixture<TodoitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoitemComponent],
    });
    fixture = TestBed.createComponent(TodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
