import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) {

   }

  @HostListener('click')
   prevFunc(){
    var elm= this.el.nativeElement.parentElement.parentElement.children[0];
    var tarjeta = elm.getElementsByClassName("tarjeta");
    console.log(tarjeta);
    elm.prepend(tarjeta[tarjeta.length - 1]);
   }

}
