import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'; // ✅ necesario para routerLink

@Component({
  selector: 'app-psicologo',
  standalone: true,
  templateUrl: './psicologo.page.html',
  styleUrls: ['./psicologo.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, // ✅ necesario para usar routerLink en el HTML
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  ]
})
export class PsicologoPage {
  nombre = '';
  correo = '';
  mensaje = '';

  enviarMensaje() {
    console.log('Mensaje enviado:', {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    });

    // (Opcional) limpiar campos luego del envío
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}