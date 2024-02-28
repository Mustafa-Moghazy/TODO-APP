import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  toggleEdit(task: Task) {
    task.editing = !task.editing;
  }

  saveTask(task: Task) {
    task.editing = false;
  }

  completeTask(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(task: Task) {
    task.deleted = !task.deleted;
  }
}
