import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import IUser from 'src/app/models/IUser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ButtonModule,
    CardModule
  ]
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name', {read: ElementRef}) nameKey!: ElementRef;

  user: IUser = {
    name: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(this.nameKey.nativeElement?.value){
      localStorage.setItem('name', this.nameKey.nativeElement?.value);
      // console.log(this.nameKey)
      this.router.navigate(['question']);
    }
  }

}
