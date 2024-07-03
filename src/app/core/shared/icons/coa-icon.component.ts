import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { VolIconsRegistryService } from './coa-icons-registry.service';
import { TVolIcon } from './coa-icons';

//import { epIcon } from './ep-icons';
//import { EpIconsService } from './ep-icons.service';

@Component({
  selector: 'vol-icon',
  template: `<ng-content></ng-content>`,
  standalone: true,
  styles: [
    ':host::ng-deep svg{display: flex; justify-content: center; align-items: center}',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolIconComponent {
  private svgIcon: SVGElement | undefined;

  constructor(
    @Optional() @Inject(DOCUMENT) private document: Document,
    public element: ElementRef,
    private epIconsService: VolIconsRegistryService,
  ) {}

  @Input()
  set name(iconName: TVolIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.epIconsService.getIcon(iconName);

    if (!svgData) {
      return;
    }

    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
