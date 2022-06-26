import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ChangeBackgroundDirective } from 'src/app/question/question/change-background.directive';
import { QuestionComponent } from 'src/app/question/question/question.component';
import { WelcomeComponent } from 'src/app/welcome/welcome/welcome.component';



@NgModule({
  declarations: [
    ChangeBackgroundDirective,
    WelcomeComponent,
    QuestionComponent],
  imports: [
    CommonModule, MaterialModule
  ],
  exports: [MaterialModule]
})
export class SharedModule { }