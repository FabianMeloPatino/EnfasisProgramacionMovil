import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  standalone: true,
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  imports: [
    FormsModule,
    IonicModule
  ]
})
export class AjustesPage {
  notificaciones: boolean = true;
  modoOscuro: boolean = false;

  guardarCambios() {
    console.log('Cambios guardados:', {
      notificaciones: this.notificaciones,
      modoOscuro: this.modoOscuro
    });
  }
}