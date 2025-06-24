import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/angular/standalone';

import { RouterModule } from '@angular/router'; // ✅ IMPORTAR ESTO

@Component({
  selector: 'app-meditacion',
  standalone: true,
  templateUrl: './meditacion.page.html',
  styleUrls: ['./meditacion.page.scss'],
  imports: [
    CommonModule,
    RouterModule, // ✅ AÑADIRLO AQUÍ
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonButtons,
    IonIcon
  ]
})
export class MeditacionPage {
  audio = new Audio('assets/audio/relajacion.mp3');

  reproducirAudio() {
    this.audio.play().then(() => {
      console.log('Audio reproduciéndose...');
    }).catch(err => {
      console.error('Error al reproducir audio:', err);
    });
  }
}