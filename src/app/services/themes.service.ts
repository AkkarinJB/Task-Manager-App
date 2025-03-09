import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private themeKey = 'theme';
  private themeSubject = new BehaviorSubject<boolean>(false); 

  theme$ = this.themeSubject.asObservable(); 

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    const htmlEl = document.documentElement;
    const isDarkMode = htmlEl.classList.toggle('dark');
    

    localStorage.setItem(this.themeKey, isDarkMode ? 'dark' : 'light');
    
   
    this.themeSubject.next(isDarkMode);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem(this.themeKey);
    const isDarkMode = savedTheme === 'dark';

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

   
    this.themeSubject.next(isDarkMode);
  }
}