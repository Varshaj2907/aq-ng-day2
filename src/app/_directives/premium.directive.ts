import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPremium]'
})
export class PremiumDirective {
  constructor(private el: ElementRef) {
    console.log('Directive Created', el);
    el.nativeElement.className = 'font-weight-bold';
    el.nativeElement.style.color = '#E58A23';
    el.nativeElement.style.border = '1px solid #E5C123';
  }
}
