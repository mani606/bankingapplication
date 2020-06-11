import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

   constructor(private el: ElementRef) {
  }
  @Input('appHighlight') highlightColor: string;

  /**
  * @description This method will be called on mouseEnter
  */

  @HostListener('mouseenter') onMouseEnter() {
    
    this.highlight(this.highlightColor || '#deb887');
  }
  /**
   * @description This method will be called on mouseLeave
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.highlightColor || '#87CEFA');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
