import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  ngOnInit() {
    this.getItemStorage();
  }
  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
    this.setItem();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.setItem();
  }

  setItem(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getItemStorage(): void {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
      console.log(this.todos);
    }
  }
}
