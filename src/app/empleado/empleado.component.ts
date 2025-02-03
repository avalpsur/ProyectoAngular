import { Component } from '@angular/core';
import {Empleado} from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  public title = "Bienvenido Empleado"
  public empleadoExt: Empleado;
  public trabajador: Array<any>;
  public trabajadorExterno: boolean;


  constructor() {
    this.empleadoExt = new Empleado("Antonia",47);
    this.trabajador = [new Empleado("Antonia",47),
                        new Empleado("Antonia",47),
                        new Empleado("Antonia",47)
    ]
    this.trabajadorExterno=true;
  }
  ngOnINit(){
    console.log(this.empleadoExt);
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }
}
