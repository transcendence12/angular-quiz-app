import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question/question.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';


const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path:'welcome', component: WelcomeComponent},
  {path:'question', component: QuestionComponent},
  {path: '**', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
