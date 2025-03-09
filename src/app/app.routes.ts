import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NoteComponent } from './components/note/note.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
    {path: '' ,component:HomeComponent}, 
    {path: 'home' ,component:HomeComponent},
    {path: 'about' ,component:AboutComponent},
    {path: 'note' ,component:NoteComponent},
    {path: 'contact' ,component:ContactComponent},

];
