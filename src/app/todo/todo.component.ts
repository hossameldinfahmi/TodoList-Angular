import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { GardService } from '../gard.service';
import { FormsModule } from '@angular/forms';
import { TypesModule, Task, User } from '.././types.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  newTodo: string = '';
  tasks: Task[] | undefined;
  users: any = [{}];
  username: string = '';
  favQuote: string = '';
  constructor(
    private TodosService: TodosService,
    private GardService: GardService
  ) {}

  ngOnInit() {
    this.tasks = this.TodosService.getTasks();
    this.users = this.TodosService.getUsers();
    this.username = this.users[0].username;
    this.favQuote = this.users[0].favQuote;
    console.log(`the favQoute from Todos ${this.users[0].username}`);
  }

  addTask() {
    let task: Task = {
      id: this.TodosService.generateUniqueId(),
      text: this.newTodo,
      done: false,
      fav:false
    };
    this.TodosService.addTask(task);
    task = { id: '', text: '', done: false, fav:false };
  }
  favFunc(task:Task) {
    this.TodosService.addFav(task)
    console.log(task.fav);

  }

  markTaskAsDone(task: Task) {
    this.TodosService.markTaskAsDone(task);
    
  }

  deleteTask(taskId: string) {
    this.TodosService.deleteTask(taskId);
  }
}
