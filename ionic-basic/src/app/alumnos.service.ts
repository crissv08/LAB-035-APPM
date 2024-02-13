import { Injectable } from '@angular/core';
import { Alumnos } from './alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumnos[]= [];

  constructor() { }

  public agregarAlumno(alumno: Alumnos){
    if(this.alumnos.length>0){
      alumno.id = this.alumnos.length + 1 ;
    } else {
      alumno.id = 1;
    }
    this.alumnos.push(alumno);
  }

  public borrarAlumno(id: number){  
    this.alumnos =
    this.alumnos.filter((al=>al.id!=id));
  }

  public getAlumos(): Alumnos[]{
    return this.alumnos;
  }

  public setAlumnos(alumnos: Alumnos[]){
    this.alumnos = alumnos;
  }

  public actualiza(alumno: Alumnos): Alumnos[]{
    this.alumnos.filter(
      (al)=>al.id==alumno.id
    ).map(al=>{
      al.matricula=alumno.matricula;
      al.nombre = alumno.nombre;
    });
    return this.alumnos;
  }
}
