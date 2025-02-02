import { Directive, ElementRef, HostListener, Renderer2, inject, input } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]',
  standalone: true
})
export class ChangeBackgroundDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  readonly isCorrect = input<boolean>(false);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  
  constructor() { }

  @HostListener('click') answer() {
    if(this.isCorrect()) {
      this.renderer.setStyle(this.el.nativeElement, 'background', '#0487D9');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid gray');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background', '#D92B04');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid gray');
    }
  }
}