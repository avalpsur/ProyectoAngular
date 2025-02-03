import internal from "stream";

export class Alumno {
    constructor(public nombre:string, public apellidos:string, public dni:string, public curso:number, public modulos:string[]){}
}