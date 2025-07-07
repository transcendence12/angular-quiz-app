import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { ChangeBackgroundDirective } from './change-background.directive';
import { JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ChangeBackgroundDirective,
    RouterModule,
    ButtonModule,
    ProgressBarModule
  ] as const,
  providers: [
    JsonPipe
  ]
})
export class QuestionComponent implements OnInit {
  private questionService = inject(QuestionService);

  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public counter = 60;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$:any;
  progress:number = 0;
  isQuizCompleted:boolean = false;
  value: number = 0;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getQuestionJson().subscribe((res: any) => {
      this.questionList = res.questions;
    });
  }

  nextQuestion() {
    if(this.currentQuestion < this.questionList.length - 1) {
      this.currentQuestion++;
    }
  }
  previousQuestion() {
    if(this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  answer(currentQuestionNr: number, option: any) {
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.getProgressPercent();
        this.checkQuizCompletion();
      },1000);
      
    } else {
      setTimeout(()=>{
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.getProgressPercent();
        this.checkQuizCompletion();
      },1000);
      this.points -= 10;
    }
  }

  checkQuizCompletion() {
    if(this.currentQuestion >= this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    } else {
      this.resetCounter();
    }
  }

  startCounter(){
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.points-=10;
        this.incorrectAnswer++;
        this.getProgressPercent();
        this.checkQuizCompletion();
      }
    })
    // Set timeout for total quiz duration (9 questions × 60 seconds = 540 seconds)
    setTimeout(()=>{
      if(this.interval$) {
        this.interval$.unsubscribe();
      }
    },540000)
  };

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  };

  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }

  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress = 0;
    this.correctAnswer = 0;
    this.incorrectAnswer = 0;
    this.isQuizCompleted = false;
  }

  getProgressPercent(){
    // Ensure progress doesn't exceed 100%
    const progressValue = Math.min((this.currentQuestion/this.questionList.length)*100, 100);
    this.progress = parseInt(progressValue.toPrecision(2));
    return this.progress;
  }

}
