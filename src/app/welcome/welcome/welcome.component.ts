import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startQuiz() {
    console.log("click")
    localStorage.setItem('name', this.nameKey.nativeElement.value);
    this.router.navigate(['question'])
  }

}
