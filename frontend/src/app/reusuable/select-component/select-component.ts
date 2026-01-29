import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-select-component',
  imports: [],
  templateUrl: './select-component.html',
  styleUrl: './select-component.scss',
})
export class SelectComponent implements ControlValueAccessor {
@Input() lable: string ='';
@Input() classLabel: string ='';
@Input() options: { value: string | number; lable:string}[]=[];
@Input() selectClass: string ='';

constructor(@Self() public ngControl: NgControl){
  return this.ngControl.valueAccessor = this;
}
get control(): FormControl{
  return this.ngControl.control as FormControl;
}

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

}
