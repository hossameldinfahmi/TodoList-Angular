import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deleted-tasks',
  templateUrl: './deleted-tasks.component.html',
  styleUrls: ['./deleted-tasks.component.css']
})
export class DeletedTasksComponent {
  tasks: any
  taskTitle:string | undefined
  constructor(private TodosService: TodosService, private router: Router){
    this.TodosService = TodosService;
    this.tasks = this.TodosService.findDeletedTasks();
    this.taskTitle = this.tasks.task
  }

}
