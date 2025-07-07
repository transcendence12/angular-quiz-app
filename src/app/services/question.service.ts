import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private http = inject(HttpClient);

  constructor() { }

  getQuestionJson() {
    return this.http.get<any>('assets/question.json');
  }
}
