import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
  // Lista de cosas asombrosas que hace tu otro proyecto
  listaFeatures = signal([
    { titulo: 'Rápido', desc: 'Carga en menos de un segundo.' },
    { titulo: 'Seguro', desc: 'Tus datos están encriptados de extremo a extremo.' },
    { titulo: 'Moderno', desc: 'Construido con las últimas tecnologías de 2026.' }
  ]);
}