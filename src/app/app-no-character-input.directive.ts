import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true
})
export class AppNoCharacterInputDirective {

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // Sayı olmayan karakterlerin girişini engelle
    if (!(event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
          event.key === 'Tab' || (event.key >= '0' && event.key <= '9'))) {
      event.preventDefault();
    }
  }
}
