import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.component.html',
  styleUrls: ['./not-found-component.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NotFoundComponentComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
