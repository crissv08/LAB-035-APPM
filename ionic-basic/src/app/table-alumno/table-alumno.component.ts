import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-table-alumno',
  templateUrl: './table-alumno.component.html',
  styleUrls: ['./table-alumno.component.scss'],
})
export class TableAlumnoComponent  implements OnInit {

  @Input() alumnosList:Alumnos[] =[];
  @Output() eliminar: any = new EventEmitter<Alumnos[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
