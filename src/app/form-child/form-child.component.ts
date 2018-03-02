import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() formGroupData: FormGroup;
  @Output() submitValue = new EventEmitter<FormGroup>();

  public enabled: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.enabled = this.formGroupData.get('Enable').value === 'true' ? true : false;
    this.formGroupData.addControl('FirstName', new FormControl(''));
    this.formGroupData.addControl('LastName', new FormControl(''));
    console.log('FormChild - Changes', this.formGroupData);
    // console.log('Form', changes.formGroupData.currentValue);
    // console.log('Form Group Data', this.formGroupData);
  }

  ngDoCheck() {
    // console.log(this.formGroupData.get('Enable').value);
    // console.log('Enabled', this.enabled);
    if (this.formGroupData.get('Enable').value === 'true' ? true : false != this.enabled) {
      console.log('Changes detected in DoCheck');
      this.changeDetectorRef.markForCheck();
      this.enabled = this.formGroupData.get('Enable').value === 'true' ? true : false;
    }
    console.log('(DoCheck) Form', this.formGroupData);
  }

  private onSubmit() {
    console.log('Form Values', this.formGroupData);
    this.submitValue.emit(this.formGroupData);
  }

}
