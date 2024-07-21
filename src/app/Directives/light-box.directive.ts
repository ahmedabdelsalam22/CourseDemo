import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
  standalone: true
})
export class LightBoxDirective {

  highLightColor:string= "red";
  constructor(private elementRef : ElementRef)
  {
    this.elementRef.nativeElement.style.border = '2px solid red';
  }
  
  @HostListener('mouseenter') onMouseFocus(){
    this.elementRef.nativeElement.style.border = `5px solid ${this.highLightColor}}`;
  }
  @HostListener('mouseout') onMouseOut(){
    this.elementRef.nativeElement.style.border = '2px solid blue';
  }
}
