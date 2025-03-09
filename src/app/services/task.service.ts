import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>(this.loadTasks());
  tasks$ = this.tasksSubject.asObservable();

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  

  addTask(title: string) {
    const tasks = [...this.tasksSubject.value, { id: Date.now(), title, completed: false }];
    this.updateTasks(tasks);
  }

  toggleTaskCompletion(id: number) {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.updateTasks(tasks);
  }

  deleteTask(id: number) {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.updateTasks(tasks);
  }

  private updateTasks(tasks: Task[]) {
    this.tasksSubject.next(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  private loadTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }
}