import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  newTaskTitle: string = '';

  constructor(private taskService : TaskService) {}

  addTask(){
    if(this.newTaskTitle.trim()){
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle  = '';
    }
  }

}
