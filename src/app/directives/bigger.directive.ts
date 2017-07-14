import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBigger]'
})
export class BiggerDirective {

  @HostListener('mouseenter')onMouseEnter(){
    this.bigger("aquamarine")
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.elementRef.nativeElement.style.fontSize = '1em';
    this.elementRef.nativeElement.style.background = null; 
  }

  constructor(private elementRef: ElementRef) { }

  bigger(color: string){
    this.elementRef.nativeElement.style.fontSize = '25px';
    this.elementRef.nativeElement.style.background = color;
  }

}
