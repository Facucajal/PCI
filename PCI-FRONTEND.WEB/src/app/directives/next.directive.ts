import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {
    
   }

   @HostListener('click')
   nextFunc(){
    var elm= this.el.nativeElement.parentElement.parentElement.children[0];
    var tarjeta = elm.getElementsByClassName("tarjeta");
    console.log(tarjeta);
    elm.append(tarjeta[0]);
   }

}
