import { Component } from '@angular/core';

interface Task {
  id: string;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  newTask: Task = { id: '', text: '', done: false };
  tasks: Task[] = [];

  generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  addTask() {
    if (this.newTask.text.trim().length !== 0) {
      this.newTask.id = this.generateUniqueId();
      this.tasks.push(this.newTask);
      this.newTask = { id: '', text: '', done: false };
    }
  }

  markTaskAsDone(task: Task) {
    task.done = !task.done;
    console.log(task.done);
  }

  deleteTask(taskId: string) {
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
