import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [
    FormsModule,
    IonicModule
  ]
})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor() {}

  registrarse() {
    if (this.nombre && this.correo && this.contrasena) {
      console.log('Registro con:', this.nombre, this.correo, this.contrasena);
    } else {
      console.warn('Por favor, complete todos los campos.');
    }
  }
}