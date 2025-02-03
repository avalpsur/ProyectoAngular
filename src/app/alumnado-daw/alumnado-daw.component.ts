import { Component } from '@angular/core';
import {Alumno} from './alumno';

@Component({
  selector: 'app-alumnado-daw',
  imports: [],
  templateUrl: './alumnado-daw.component.html',
  styleUrl: './alumnado-daw.component.css'
})
export class AlumnadoDAWComponent {
  alumnadoDAW : Array<Alumno>;
  cursoSeleccionado = 1;

  constructor() {
    this.alumnadoDAW = [new Alumno("Antonia","Perez","67845678H",1,["DWS","DWC","DAW"]),
                        new Alumno("Álvaro","Valero","32445987N",2,["DWS","DIW"]),
                        new Alumno("Mohcen","Benizza","12375678A",2,["DWC","DIW","DEW"])
    ];
  }

  ngOnInit(){
    console.log(this.alumnadoDAW);
  }
  
  mostrarCurso(curso:number){
    this.cursoSeleccionado = curso;
  }

}
