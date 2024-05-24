import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppButton]',
})
export class AppButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'bacgroundColor', '#007bff')
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '4px');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s');

    this.renderer.listen(this.el.nativeElement, 'mouseenter', () => {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#0056b3');
    });

    this.renderer.listen(this.el.nativeElement, 'mouseleave', () => {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#007bff');
    });
  }

}
