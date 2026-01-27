import { Component, signal } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';

@Component({
  selector: 'app-root',
  standalone: true,
  // Registramos tus componentes para que funcionen en el HTML
  imports: [Hero, Features],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'landing-proyecto';

  // 1. Creamos una "Signal" con la URL (puedes dejarla vacía o con un placeholder)
  // Cuando tengas la ruta real, solo edita lo que está entre comillas.
  private readonly APP_URL = signal('https://mi-futura-app-url.com');

  /**
   * Método para redirigir a la aplicación principal.
   * Se puede llamar desde cualquier parte de app.html
   */
  irAApp(): void {
    const url = this.APP_URL();

    if (url && url !== 'https://mi-futura-app-url.com') {
      window.location.href = url;
    } else {
      console.warn('⚠️ La ruta de la aplicación aún no ha sido configurada.');
      alert('¡Próximamente! Estamos preparando el acceso a la aplicación.');
    }
  }
}