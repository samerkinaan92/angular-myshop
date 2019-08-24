import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  @Input('appConfirm') msg;
  @Output() onConfirm = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('click')
  onclick(){
    if(confirm(this.msg)){
      this.onConfirm.emit();
    }
  }
}
