import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Tareas } from "./components/tareas/tareas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Tareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'to-do_Asocebu';
}
