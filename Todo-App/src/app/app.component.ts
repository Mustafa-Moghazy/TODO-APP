import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Task } from './models/task.model';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, TaskListComponent]
})
export class AppComponent {
  tasks: Task[] = [];
  onAddTask(taskName: string) {
    const newTask: Task = {
      name: taskName,
      creator: 'Mustafa Mahmoud',
      creationDate: new Date(),
      completed: false,
      deleted: false,
      editing: false,
    };
    this.tasks.push(newTask);
  }
}
