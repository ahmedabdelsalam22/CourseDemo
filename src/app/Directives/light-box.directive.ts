import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
  standalone: true
})
export class LightBoxDirective implements OnChanges{

  @Input() highLightColor:string= "red"; 
  constructor(private elementRef : ElementRef)
  {
    // this.elementRef.nativeElement.style.border = '2px solid red';
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elementRef.nativeElement.style.border = '2px solid red';
  }
  
  @HostListener('mouseenter') onMouseFocus(){
    this.elementRef.nativeElement.style.border = `5px solid ${this.highLightColor}}`;
  }
  @HostListener('mouseout') onMouseOut(){
    this.elementRef.nativeElement.style.border = '2px solid blue';
  }
}
