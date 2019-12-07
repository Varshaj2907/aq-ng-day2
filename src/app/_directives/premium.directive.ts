import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  @HostBinding('className')
  css = 'font-weight-bold';

  @HostBinding('style.color')
  color = 'red';

  @HostListener('dblclick', ['$event'])
  handler(args) {
    console.log('Directive is intercepting the event', args);
  }
}
