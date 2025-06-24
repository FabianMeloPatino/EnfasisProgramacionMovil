import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // ✅ Importación necesaria para routerLink

@Component({
  selector: 'app-ajustes',
  standalone: true,
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  imports: [
    FormsModule,
    IonicModule,
    RouterModule // ✅ Permite usar routerLink en el HTML
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

    // (Opcional) lógica para activar/desactivar modo oscuro
    if (this.modoOscuro) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}