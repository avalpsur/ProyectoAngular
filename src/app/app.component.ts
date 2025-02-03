import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleado } from './empleado/empleado';
import e from 'express';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports: [EmpleadoComponent,AlumnadoDAWComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp_v19';
}
