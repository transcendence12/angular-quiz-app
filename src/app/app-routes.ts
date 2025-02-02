import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome/welcome.component')
      .then(m => m.WelcomeComponent)
  },
  {
    path: 'question',
    loadComponent: () => import('./question/question/question.component')
      .then(m => m.QuestionComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./not-found-component/not-found-component.component')
      .then(m => m.NotFoundComponentComponent)
  }
];
