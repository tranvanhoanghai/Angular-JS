import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() todo!: Todo;
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  isHovered = false;
  isEditing = false;

  changeTodoStatus() {
    this.changeStatus.emit({
      ...this.todo,
      isCompleted: !this.todo.isCompleted,
    });
  }

  onSubmit() {
    this.editTodo.emit(this.todo);
    this.isEditing = false;
  }

  // submitEdit(event: KeyboardEvent) {
  //   const { keyCode } = event;
  //   event.preventDefault(); //prevent Form to submit by default
  //   if (keyCode === 13) {
  //     this.editTodo.emit(this.todo);
  //     this.isEditing = false;
  //   }
  // }
}
