import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: string, language?: string): Observable<string> {
    if (!value) {
      return new Observable((observer) => {
        observer.next('');
        observer.complete();
      });
    }

    const translationKey = value;

    return this.translateService.get(translationKey, { lang: language }).pipe(
      map((res: string) => res)
    );
  }
}
