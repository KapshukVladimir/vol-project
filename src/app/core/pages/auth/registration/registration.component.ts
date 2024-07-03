import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputErrorHelper } from '../../../shared/helper-classes/input-error.helper';
import { ButtonDirective } from '../../../shared/directives/button/button.directive';
import { InputDirective } from '../../../shared/directives/input/input.directive';

@Component({
  selector: 'vol-registration',
  standalone: true,
  imports: [ButtonDirective, InputDirective, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent extends InputErrorHelper implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  constructor() {
    super();
  }

  public ngOnInit(): void {
    console.log('RegistrationComponent');
    this.initializeRegistrationFormGroup();
  }

  public register(): void {
    console.log(this.formGroup.value);
  }

  public navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  public initializeRegistrationFormGroup(): void {
    this.formGroup = this.fb.group({
      first_name: new FormControl('', []),
      last_name: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }
}
