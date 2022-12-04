import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, forwardRef, Input, NgModule, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgModel, NG_VALUE_ACCESSOR, ValidatorFn } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements AfterViewInit, ControlValueAccessor {

  @Output() @ViewChild('input') ngModel?: NgModel;
  @Input() name!: string;
  @Input() placeholder?: string;
  @Input() type!: 'text' | 'password' | 'number' | 'email' | 'tel';
  @Input() disabled = false;
  @Input() inputMode:
    | 'decimal'
    | 'email'
    | 'none'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | undefined;
  @Input() pattern: string | RegExp = '';
  @Input() required = false;
  @Input() errorMessages?: {
    [key: string]: string;
  }
  @Input() passwordErrors?: {
    [key: string]: string;
  }
  @Input() validators?: ValidatorFn | ValidatorFn[];

  _value!: string;
  @Input() set value(_value: string) {
    this._value = _value;
    this.onChange(_value);
    this.onTouch(_value);
    this.valueChange.next(_value);
  }

  get value() {
    return this._value;
  }
  @Output() valueChange = new EventEmitter<string>();

  ngAfterViewInit() {
    if (this.validators) {
      this.ngModel?.control.addValidators(this.validators);
      this.ngModel?.control.updateValueAndValidity();
    }
  }

  // #region ControlValueAccessor Properties
  onChange: any = () => { };
  onTouch: any = () => { };
  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // #endregion

}

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
