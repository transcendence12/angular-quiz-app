import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBackgroundDirective } from 'src/app/question/question/change-background.directive';
import { QuestionComponent } from 'src/app/question/question/question.component';
import { WelcomeComponent } from 'src/app/welcome/welcome/welcome.component';
import { PrimeNgModule } from './primeNg/primeNg.module';
import { FormsModule } from '@angular/forms';
import { NotFoundComponentComponent } from '../not-found-component/not-found-component.component';



@NgModule({
  declarations: [
    ChangeBackgroundDirective,
    WelcomeComponent,
    QuestionComponent,
    NotFoundComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule
  ],
  exports: [ 
    FormsModule,
    PrimeNgModule ]
})

export class SharedModule { }
