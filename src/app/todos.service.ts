import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './app.component';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  addTodo(newTodo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo);
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2').pipe(delay(1500));
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
