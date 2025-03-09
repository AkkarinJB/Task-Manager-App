import { ThemesService } from './services/themes.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    TaskFormComponent,
    TaskListComponent,  
    NavbarComponent,
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';

  constructor(private ThemesService : ThemesService) {}

  toggleTheme(){
    this.ThemesService.toggleTheme();
  }
}

