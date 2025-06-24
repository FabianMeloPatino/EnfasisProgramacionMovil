import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-emociones',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './emociones.page.html',
  styleUrls: ['./emociones.page.scss']
})
export class EmocionesPage {
  emociones: string[] = ['Feliz', 'Triste', 'Ansioso', 'Relajado'];
  emocionSeleccionada: string | null = null;
  emocionesRegistradas: { emocion: string; fecha: Date }[] = [];
  resumenEmociones: { nombre: string; porcentaje: number }[] = [];

  seleccionarEmocion(emocion: string) {
    this.emocionSeleccionada = emocion;
    console.log('Emoción seleccionada:', emocion);
  }

  registrarEmocion() {
    if (this.emocionSeleccionada) {
      // Guarda la emoción con la fecha actual
      this.emocionesRegistradas.push({
        emocion: this.emocionSeleccionada,
        fecha: new Date()
      });

      // Actualiza el resumen de porcentajes
      this.actualizarResumen();

      // Limpia la selección
      this.emocionSeleccionada = null;
    }
  }

  actualizarResumen() {
    const total = this.emocionesRegistradas.length;

    const conteo = this.emociones.reduce((acc, emocion) => {
      acc[emocion] = this.emocionesRegistradas.filter(e => e.emocion === emocion).length;
      return acc;
    }, {} as { [emocion: string]: number });

    this.resumenEmociones = this.emociones.map(emocion => ({
      nombre: emocion,
      porcentaje: total > 0 ? Math.round((conteo[emocion] || 0) / total * 100) : 0
    }));
  }
}