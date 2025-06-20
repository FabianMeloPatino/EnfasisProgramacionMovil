import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss']
})
export class HistorialPage {
  historial: { fecha: string; actividad: string }[] = [
    { fecha: '2025-06-01', actividad: 'Meditación: 10 minutos' },
    { fecha: '2025-06-02', actividad: 'Consulta con Psicólogo' },
    { fecha: '2025-06-03', actividad: 'Registro emocional: Feliz' },
  ];
}