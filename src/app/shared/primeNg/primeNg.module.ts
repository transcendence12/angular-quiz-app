import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    CardModule
  ],
  exports: [ ButtonModule, InputTextModule, ProgressBarModule, CardModule ]
})
export class PrimeNgModule { }