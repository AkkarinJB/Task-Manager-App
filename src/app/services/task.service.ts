import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  private idCounter = 1;

  getTasks() {
    return this.tasks.asObservable();
  }

  addTask(title: string) {
    const currentTasks = this.tasks.getValue();
    const newTask: Task = {
      id: this.idCounter++,
      title,
      completed: false
    };
    this.tasks.next([...currentTasks, newTask]);
  }

  toggleTaskCompletion(id: number) {
    const currentTasks = this.tasks.getValue();
    const updatedTasks = currentTasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasks.next(updatedTasks);
  }

  deleteTask(id: number) {
    const currentTasks = this.tasks.getValue();
    const updatedTasks = currentTasks.filter(task => task.id !== id);
    this.tasks.next(updatedTasks);
  }
}