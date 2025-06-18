import { Component } from '@angular/core';
import { tareas } from '../../interface/tareas';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  nombreTareas!:string;
  listaTareas:tareas[] = [];

  guardarTarea(){
    console.log(this.nombreTareas);
    const tarea = {
      nombre: this.nombreTareas,
      tarea: false
    }

    this.listaTareas.push(tarea);
    this.nombreTareas = '';
  }

  eliminarTarea(index:number){

    this.listaTareas.splice(index,1);

    console.log(index);
    
  }

  actualizarTarea(tarea:tareas, index:number){
    console.log(tarea.tarea);
    if(tarea.tarea) tarea.tarea = false;
    else {
      tarea.tarea = true;
    } 

  }
}
