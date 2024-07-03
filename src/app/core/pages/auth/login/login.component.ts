import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonDirective } from '../../../shared/directives/button/button.directive';
import { InputDirective } from '../../../shared/directives/input/input.directive';
import { InputErrorHelper } from '../../../shared/helper-classes/input-error.helper';
import { VolIconComponent } from '../../../shared/icons/coa-icon.component';

@Component({
  selector: 'vol-login',
  standalone: true,
  imports: [
    ButtonDirective,
    InputDirective,
    ReactiveFormsModule,
    VolIconComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends InputErrorHelper implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  constructor() {
    super();
  }

  public ngOnInit(): void {
    console.log('LoginComponent');
    this.initializeLoginFormGroup();
  }

  public initializeLoginFormGroup(): void {
    this.formGroup = this.fb.group({
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  public login(): void {
    console.log(this.formGroup.value);
  }

  public navigateToRegistration(): void {
    this.router.navigate(['/registration']);
  }
}
