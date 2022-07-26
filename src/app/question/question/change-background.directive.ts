import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {
  @Input() isCorrect: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.renderer.setStyle(this.el.nativeElement, 'background', '#0487D9');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid gray')
    }else{
      this.renderer.setStyle(this.el.nativeElement, 'background', '#D92B04');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid gray')
    }
  }
}