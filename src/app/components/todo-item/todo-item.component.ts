import { Component, OnInit, Input  } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      isCompleted: this.todo.completed
    }
    return classes;
  }

  onToggle(todo:Todo):void {
    //toggle UI
    todo.completed = !todo.completed;
    //toggle API
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo:Todo):void {
    console.log(todo.title);
  }

}
