import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import IUser from 'src/app/models/IUser';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
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
    if((localStorage.getItem('name') === null) && (this.nameKey.nativeElement?.value)){
      localStorage.setItem('name', this.nameKey.nativeElement?.value);
      // console.log(this.nameKey)
      this.router.navigate(['question']);
    }
  }

}
