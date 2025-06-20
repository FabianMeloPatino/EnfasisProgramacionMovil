import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./ajustes/ajustes.page').then(m => m.AjustesPage),
  },
  {
    path: 'emociones',
    loadComponent: () => import('./emociones/emociones.page').then(m => m.EmocionesPage),
  },
  {
    path: 'foro',
    loadComponent: () => import('./foro/foro.page').then(m => m.ForoPage),
  },
  {
    path: 'historial',
    loadComponent: () => import('./historial/historial.page').then(m => m.HistorialPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'meditacion',
    loadComponent: () => import('./meditacion/meditacion.page').then(m => m.MeditacionPage),
  },
  {
    path: 'psicologo',
    loadComponent: () => import('./psicologo/psicologo.page').then(m => m.PsicologoPage),
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then(m => m.RegistroPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];