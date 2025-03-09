import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../services/themes.service';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports:[CommonModule ,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDarkMode = false; 

  constructor(private themesService: ThemesService) {}
  ngOnInit(){
    this.themesService.theme$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme() {
    this.themesService.toggleTheme();
  }
}