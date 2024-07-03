import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';
import { TVolIcon } from '../../icons/coa-icons';
import { VolIconComponent } from '../../icons/coa-icon.component';

@Directive({
  selector: '[volInput]',
  standalone: true,
})
export class InputDirective implements OnInit, OnDestroy {
  @Input() iconName!: TVolIcon;
  @Input() maxLength!: number;
  private _errorMessage = 'NOT_VALID';
  private _errorWrapper!: HTMLElement;
  private _errorField!: HTMLElement;
  private _isVisiblePassword = false;
  private _unlistener!: () => void;
  private _unlistenerOnChange!: () => void;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private vcr: ViewContainerRef,
  ) {}

  @Input() set errorMessage(value: string) {
    this._errorMessage = value;

    if (this._errorField) {
      this.renderer2.setProperty(this._errorField, 'innerText', value);
    }
  }

  public ngOnInit(): void {
    const field = this.createField();
    const fieldWrapper = this.createFieldWrapper();
    const featherEyeImg = this.createFeatherEyeImg();
    const errorMessageElement = this.renderer2.createElement('p');
    this._errorWrapper = this.createErrorWrapper();
    this._errorField = this.createErrorField();
    const errorMessageText = this.renderer2.createText(this._errorMessage);

    const el = this.createCurrentElField();
    const parent = el.parentNode;

    this.renderer2.insertBefore(parent, field, el);

    this.renderer2.appendChild(field, fieldWrapper);
    this.renderer2.appendChild(field, this._errorWrapper);
    this.renderer2.appendChild(this._errorWrapper, this._errorField);
    this.renderer2.appendChild(errorMessageElement, errorMessageText);
    this.renderer2.appendChild(this._errorField, errorMessageElement);
    if (this.renderPasswordIcon()) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'password');
      this.renderer2.appendChild(fieldWrapper, featherEyeImg);
    }
    this.renderer2.appendChild(fieldWrapper, el);

    if (this.iconName) {
      this.createInputIcon(fieldWrapper);
    }

    if (this.maxLength) {
      const lengthField = this.createLengthField();
      this.renderer2.appendChild(this._errorWrapper, lengthField);
      //this.inputOnChange(el, lengthField);
    }
  }

  ngOnDestroy(): void {
    this._unlistener();

    if (this.maxLength) {
      this._unlistenerOnChange();
    }
  }

  private createCurrentElField(): HTMLElement {
    const field = this.elementRef.nativeElement;

    this.renderer2.addClass(field, 'vol-input');

    return field;
  }

  private createField(): HTMLElement {
    const field = this.renderer2.createElement('div');

    this.renderer2.addClass(field, 'vol-input-field');

    return field;
  }

  private createFieldWrapper(): HTMLElement {
    const field = this.renderer2.createElement('div');

    this.renderer2.addClass(field, 'vol-input-field-wrapper');

    return field;
  }

  private createFeatherEyeImg(): HTMLElement {
    const field = this.renderer2.createElement('img');

    this.renderer2.addClass(field, 'icon');
    this.renderer2.setAttribute(
      field,
      'src',
      'https://unpkg.com/feather-icons@4.29.0/dist/icons/eye-off.svg',
    );

    this._unlistener = this.renderer2.listen(
      field,
      'click',
      this.clickOnEye.bind(this, field),
    );

    return field;
  }

  private clickOnEye(field: HTMLElement): void {
    const element = this.elementRef.nativeElement;
    const typeValue = this._isVisiblePassword ? 'password' : 'text';
    const srcValue = this._isVisiblePassword ? 'eye-off' : 'eye';

    this.renderer2.setAttribute(element, 'type', typeValue);
    this.renderer2.setAttribute(
      field,
      'src',
      `https://unpkg.com/feather-icons@4.29.0/dist/icons/${srcValue}.svg`,
    );
    this._isVisiblePassword = !this._isVisiblePassword;
  }

  private createErrorWrapper(): HTMLElement {
    const field = this.renderer2.createElement('div');

    this.renderer2.addClass(field, 'vol-input-error');

    return field;
  }

  private createErrorField(): HTMLElement {
    const field = this.renderer2.createElement('p');

    this.renderer2.addClass(field, 'vol-input-field-error');

    return field;
  }

  private createLengthField(): HTMLElement {
    const field = this.renderer2.createElement('div');

    this.renderer2.addClass(field, 'vol-input-error-length');

    return field;
  }

  private renderPasswordIcon(): boolean {
    const currentAttr = this.elementRef.nativeElement.type;

    return currentAttr === 'password';
  }

  private createInputIcon(wrapper: HTMLElement): void {
    const component = this.vcr.createComponent(VolIconComponent);
    component.instance.name = this.iconName;
    const componentElement = component.instance.element.nativeElement;

    this.renderer2.addClass(componentElement, 'input-icon');
    this.renderer2.appendChild(
      wrapper,
      component.instance.element.nativeElement,
    );
  }

  //private inputOnChange(el: HTMLElement, lengthField: HTMLElement): void {
  //this.renderer2.setProperty(lengthField, 'innerText', `0 ${of} ${this.maxLength}`);
  //this._unlistenerOnChange = this.renderer2.listen(
  //el,
  //'input',
  //(event: InputEvent) => {
  //const lengthValue = (event.target as HTMLInputElement).value;
  //
  //this.renderer2.setProperty(
  //lengthField,
  //'innerText',
  //`${lengthValue.length} ${of} ${this.maxLength}`,
  //);
  //},
  //);
  //}
}
