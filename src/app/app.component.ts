import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';
import {TodosService} from './todos.service';

export interface Todo {
  complete: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todoTitle = '';
  todos: Todo[] = [];
  loading = false;

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      complete: false,
      title: this.todoTitle
    };

    this.todosService.addTodo(newTodo)
      .subscribe(response => {
        this.todos.push(response);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodos()
      .subscribe(todos => {
        console.log('Response: ', todos);
        this.todos = todos;
        this.loading = false;
      });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      });
  }
}

