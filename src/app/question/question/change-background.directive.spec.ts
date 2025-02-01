import { ChangeBackgroundDirective } from './change-background.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ChangeBackgroundDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(null);
    const renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
    const directive = new ChangeBackgroundDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
