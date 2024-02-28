import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  newTaskName: string = '';
  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    if (this.newTaskName.trim() !== '') {
      this.addTask.emit(this.newTaskName);
      this.newTaskName = '';
    }
  }
}
