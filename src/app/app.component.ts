import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { FormModel } from './models/FormModel.model';
import { Actor } from './models/actor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sampleForm: FormGroup;
  public formModel = new FormModel(false, '', '');
  public firstName: string;
  public lastName: string;

  constructor (private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.sampleForm = this.fb.group({
      Enable: [this.formModel.enable, Validators.required]
    });
  }

  public enableChange() {
    console.log('Enable', this.sampleForm.controls.Enable.value);
  }

  private getData(event) {
    // this.sampleForm = <FormGroup>event;
    // console.log(event);
    this.firstName = event.get('FirstName').value;
    this.lastName = event.get('LastName').value;
  }

  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = new Actor('Arnold', 'Schwarzenegger');
  
  changeActorProperties(): void {
    this.actor.firstName = 'Nicholas';
    this.actor.lastName = 'Cage';
  }
  
  changeActorObject(): void {
    this.actor = new Actor('Bruce', 'Willis');
  }

}