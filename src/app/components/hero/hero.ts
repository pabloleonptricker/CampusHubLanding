import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  // Aquí puedes añadir variables si quieres que el texto sea dinámico
  appNombre = 'Mi Super App';
  
  redirect() {
    window.location.href = 'https://tu-otra-app.com';
  }
}