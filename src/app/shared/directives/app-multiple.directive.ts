import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]',
  standalone: true
})
export class AppMultipleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input() set appMultiple(times: number) {
    this.viewContainerRef.clear();
    for (let i = 0; i < times; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}

//Kullanım örneği:
//<ng-template appMultiple [appMultiple]="3">
//  <div>İçerik tekrarı</div>
//</ng-template>

