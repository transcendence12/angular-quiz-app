import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question/question.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path:'welcome', component: WelcomeComponent},
  {path:'question', component: QuestionComponent}
  //  dodać **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
