import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types.module';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  users: User[] = [];
  todos: any;

  constructor(private TodosService: TodosService) { 
    this.TodosService.getTodos().subscribe(data => {
      this.todos = data;      
    });

  }
}
