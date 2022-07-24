import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import IUser from 'src/app/models/IUser';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!: ElementRef;

  user: IUser = {
    name: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
    this.router.navigate(['question'])
  }

}
