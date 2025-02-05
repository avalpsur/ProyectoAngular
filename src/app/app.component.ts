import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import e from 'express';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',

  imports: [MenuComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp_v19';
}
