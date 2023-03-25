import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-favroutes',
  templateUrl: './favroutes.component.html',
  styleUrls: ['./favroutes.component.css']
})
export class FavroutesComponent {
  tasks: any
  taskTitle:string | undefined
  constructor(private TodosService: TodosService, private router: Router){
    this.TodosService = TodosService;
    this.tasks = this.TodosService.findFavFunc();
    this.taskTitle = this.tasks.task
  }
}
