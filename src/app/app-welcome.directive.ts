import { Directive, Input, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appWelcome]'
})
export class AppWelcomeDirective implements AfterViewInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appWelcome(delay: number) {
    this.viewContainerRef.clear();
    const welcomeElement = document.createElement('div');
    welcomeElement.textContent = 'Welcome!';
    this.viewContainerRef.element.nativeElement.appendChild(welcomeElement);
    setTimeout(()=> {
      for (let i = 0; i < this.viewContainerRef.length; i++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }, delay);
  }

  ngAfterViewInit() {
    //Directive ilk kez uygulandığında "Welcome!" metnini gösterir.
    const welcomeElement = document.createElement('div');
    welcomeElement.textContent = 'Welcome!';
    this.viewContainerRef.element.nativeElement.appendChild(welcomeElement); 
  }
}

//Örnek kullanımı:
//<ng-template appWelcome [appWelcome]="2000">
//  <div>İçerik bekletme ile yazdırılıyor...</div>
//</ng-template>
