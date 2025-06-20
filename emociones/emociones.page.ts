import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE

@Component({
  selector: 'app-emociones',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule  // 👈 NECESARIO para que routerLink funcione
  ],
  templateUrl: './emociones.page.html',
  styleUrls: ['./emociones.page.scss']
})
export class EmocionesPage {
  emociones: string[] = ['Feliz', 'Triste', 'Ansioso', 'Relajado'];

  seleccionarEmocion(emocion: string) {
    console.log('Emoción seleccionada:', emocion);
    // Aquí puedes almacenar la emoción o navegar
  }
}