import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; // นำเข้า FormsModule
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // ประกาศว่า AppComponent เป็น Standalone
  imports: [TodoComponent, FormsModule], // ใช้ TodoComponent และ FormsModule
})
export class AppComponent {
  title = 'todolist';
}
