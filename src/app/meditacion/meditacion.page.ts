import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-meditacion',
  standalone: true,
  templateUrl: './meditacion.page.html',
  styleUrls: ['./meditacion.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton
  ]
})
export class MeditacionPage {
  reproducirAudio() {
    console.log('Reproducir audio');
  }
}