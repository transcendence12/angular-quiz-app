import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { ChangeBackgroundDirective } from './change-background.directive';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProgressBarModule,
    ButtonModule,
    ChangeBackgroundDirective,
    JsonPipe
  ]
})
export class QuestionComponent implements OnInit {
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

  constructor(private questionService: QuestionService) { }

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
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQuestionNr: number, option: any) {
    if(currentQuestionNr === this.questionList.length){
      this.isQuizCompleted === true;
      this.stopCounter();
    }

    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      },1000);
      
    } else {
      setTimeout(()=>{
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      },1000);
      this.points -= 10;
    }
  }

  startCounter(){
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter = 60;
        this.points-=10;
      }
    })
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000)
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
  }

  getProgressPercent(){
    this.progress = parseInt(((this.currentQuestion/this.questionList.length)*100).toPrecision(2));
    return this.progress;
  }

}
