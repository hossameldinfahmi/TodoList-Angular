import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  tasks: any
  taskTitle:string | undefined
  constructor(private TodosService: TodosService, private router: Router){
    this.TodosService = TodosService;
    this.tasks = this.TodosService.findCompletedTasks();
    this.taskTitle = this.tasks.task
  }


  
  

}
