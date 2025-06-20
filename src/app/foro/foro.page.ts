import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss']
})
export class ForoPage {
  nuevoMensaje: string = '';
  publicaciones: string[] = [];

  publicarMensaje() {
    if (this.nuevoMensaje.trim() !== '') {
      this.publicaciones.push(this.nuevoMensaje);
      this.nuevoMensaje = '';
    }
  }
}