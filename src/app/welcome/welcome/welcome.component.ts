import { Component, ElementRef, OnInit, inject, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import IUser from 'src/app/models/IUser';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    RouterModule,
    ProgressBarModule
] as const
})
export class WelcomeComponent implements OnInit {
  private router = inject(Router);


  readonly nameKey = viewChild.required('name', { read: ElementRef });

  user: IUser = {
    name: ''
  };

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const nameKey = this.nameKey();
    if(nameKey.nativeElement?.value){
      localStorage.setItem('name', nameKey.nativeElement?.value);
      // console.log(this.nameKey)
      this.router.navigate(['question']);
    }
  }

}
