import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TypesModule, Task, User } from '.././types.module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  username: string | undefined;
  tasks: Task[] | undefined;
  users: any;
  completedTasksCount: number = 0;
  deletedTasksCount: number = 0;
  favTaskCount:number =  0;
  constructor(private TodosService: TodosService, private router : Router) {
    this.TodosService.completedTasksCount$.subscribe(data=>{
      this.completedTasksCount = data;
    })
    this.TodosService.deletedTasksCount$.subscribe(data=>{
      this.deletedTasksCount = data;
    })
    this.TodosService.favTaskCount$.subscribe(data=>{
      this.favTaskCount = data;
    })
  }


  ngOnInit(): void {
    this.tasks = this.TodosService.getTasks();
    this.users = this.TodosService.getUsers();
    this.username = this.users[0].username;
    console.log(this.username);
    
  }
  logout(){
    this.router.navigate(['/login'])
  }
  about(){
    this.router.navigate(['/about'])
  }
  completedPage(){
    this.router.navigate(['/completed'])
  }
  deletedPage(){
    this.router.navigate(['/deleted'])
  }
  favPage(){
    this.router.navigate(['/fav'])
  }

  ngOnDestroy(): void {
   
  }  
}


