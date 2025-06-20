import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    FormsModule,
    RouterModule
  ]
})
export class LoginPage {
  email: string = '';
  password: string = '';

  login() {
    if (this.email && this.password) {
      console.log('Inicio de sesión con:', this.email, this.password);
    } else {
      console.warn('Por favor, complete todos los campos.');
    }
  }
}