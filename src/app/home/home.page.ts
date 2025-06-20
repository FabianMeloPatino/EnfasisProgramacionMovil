import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common'; // 👈 Importa NgForOf para *ngFor

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    RouterModule,
    NgForOf // 👈 Agrega aquí también
  ]
})
export class HomePage {
  constructor() {}
}