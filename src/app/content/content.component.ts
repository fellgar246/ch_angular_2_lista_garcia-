import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  alumnos = [
    { nombre: 'Juan', edad: 20, promedio: 8 },
    { nombre: 'María', edad: 22, promedio: 9 },
    { nombre: 'Pedro', edad: 19, promedio: 7 },
    { nombre: 'Ana', edad: 21, promedio: 5 },
    { nombre: 'Luis', edad: 18, promedio: 8.5 },
    { nombre: 'Rosi', edad: 21, promedio: 10 },
    { nombre: 'Alejandra', edad: 24, promedio: 7.5 },
    { nombre: 'Roman', edad: 20, promedio: 6.8 },
    { nombre: 'Alfonso', edad: 21, promedio: 8.5 },
    { nombre: 'Edgar', edad: 21, promedio: 9 },
    { nombre: 'Mar', edad: 19, promedio: 6 }
  ];

  isPromedioAlto(promedio: number): boolean {
    return promedio >= 8; // Definimos la condición para un promedio alto
  }

  isPromedioBajo(promedio: number): boolean {
    return promedio <= 6; // Definimos la condición para un promedio bajo
  }
}
