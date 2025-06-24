import { Component } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  AlertController
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

  constructor(private alertController: AlertController) {}

  async login() {
    if (this.email === 'fmelo@poligran.edu.co' && this.password === 'fabian123') {
      // Redirige a /home
      window.location.href = 'http://192.168.11.23:8100/home';
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Correo o contraseña incorrectos.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}