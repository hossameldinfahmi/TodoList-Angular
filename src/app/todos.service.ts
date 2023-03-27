import { Injectable } from '@angular/core';
import { GardService } from './gard.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TypesModule, Task, User } from './types.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: any;
  usersString: any = localStorage.getItem('users');
  users = JSON.parse(this.usersString) || [];
  private apiUrl = 'https://dummyjson.com/todos';

  constructor(
    private GardService: GardService,
    private router: Router,
    private http: HttpClient
  ) {}
  newTask: Task = { id: '', text: '', done: false, fav: false };
  tasks: Task[] = [];
  deletedTasks: Task[] = [];
  deletedTasksCounter: number = 0;
  completedTasks: number = 0;
  favTasksCounter: number = 0;
  completedTasksCount = new BehaviorSubject<number>(this.completedTasks);
  completedTasksCount$ = this.completedTasksCount.asObservable();
  deletedTasksCount = new BehaviorSubject<number>(this.deletedTasksCounter);
  deletedTasksCount$ = this.deletedTasksCount.asObservable();
  favTaskCount = new BehaviorSubject<number>(this.favTasksCounter);
  favTaskCount$ = this.favTaskCount.asObservable();

  getTodos() {
    return this.http.get(this.apiUrl);
  }

  completedLen() {
    let count: number = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].done) {
        count++;
      }
      this.completedTasksCount.next(count);
    }
  }

  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  addTask(task: Task) {
    if (task.text.trim().length !== 0) {
      this.tasks.push(task);
    }
  }

  findCompletedTasks() {
    return this.tasks.filter((ele: any) => ele.done == true);
  }

  findDeletedTasks() {
    return this.deletedTasks;
  }

  userLogin(user: User): void {
    if (user.username.trim().length !== 0) {
      this.users.push(user);
      console.log('User added:', user, this.users);
      this.GardService.isLogged = true;
      this.router.navigate(['/todos']);
    } else {
      alert('You have to login first!');
      this.GardService.isLogged = false;
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  findFavFunc() {
    return this.tasks.filter((ele: any) => ele.fav == true);
  }

  markTaskAsDone(task: Task) {
    task.done = !task.done;
    this.completedLen();
  }

  addFav(task: Task) {
    task.fav = !task.fav;
    this.getFavCount();
  }

  getFavCount() {
    let count: number = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].fav) {
        count++;
      }
    }
    this.favTaskCount.next(count);
  }

  deleteTask(taskId: string) {
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.deletedTasks.push(this.tasks[index]);
      this.tasks.splice(index, 1);
      this.completedLen();
      this.getDeleted();
      this.getFavCount();
    }
  }

  getDeleted() {
    let count = this.deletedTasks.length;
    console.log(count);
    this.deletedTasksCount.next(count);
    return this.deletedTasks;
  }
  getTasks() {
    return this.tasks;
  }

  getUsers() {
    return this.users;
  }
}
