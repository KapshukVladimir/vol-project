import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[volButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input() color: any = 'black';
  //@Input() size: TButtonSizeTypes = 'small';

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) {}

  public ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'vol-button');
    this.renderer2.addClass(this.elementRef.nativeElement, this.color);
    //this.renderer2.addClass(this.elementRef.nativeElement, this.size);
    //this.renderer2.addClass(this.elementRef.native Element, this.buttonType);
  }
}
